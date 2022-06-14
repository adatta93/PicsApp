import React from "react";

const ChooseLanguage = ({ lang, setLang }) => {
  return (
    <div>
	  <div>
	    <span style={{paddingRight: "10px"}}>Choose Form Language: </span>
        <i className="flag us" style={{cursor: "pointer"}} onClick={() => setLang("english")} />
        <i className="flag nl" style={{cursor: "pointer"}} onClick={() => setLang("dutch")} />
	  </div>
      Selected Language: <b>{lang}</b>
    </div>
  );
};

export default ChooseLanguage;
