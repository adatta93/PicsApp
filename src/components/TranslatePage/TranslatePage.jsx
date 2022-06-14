import React, { useState } from "react";
import ChooseColor from "./ChooseColor";
import ChooseLanguage from "./ChooseLanguage";
import { ColorContext, TranslateContext } from "./Context";
import UserForm from "./UserForm";

const TranslatePage = () => {
  const [lang, setLang] = useState("english");
  const [color, setColor] = useState("red");
  return (
    <div className="ui container segment">
      <div className="ui grid">
        <div className="column eight wide">
          <ChooseLanguage lang={lang} setLang={setLang} />
        </div>
        <div className="column eight wide">
          <ChooseColor color={color} setColor={setColor} />
        </div>
      </div>
      <ColorContext.Provider value={color}>
        <TranslateContext.Provider value={lang}>
          <UserForm />
        </TranslateContext.Provider>
      </ColorContext.Provider>
    </div>
  );
};

export default TranslatePage;
