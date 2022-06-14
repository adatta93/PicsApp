import React from "react";
import { ColorContext, TranslateContext } from "./Context";

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {val => (
          <button className={`ui button ${val}`}>
            <TranslateContext.Consumer>
              {val => (val === "english" ? "Submit" : "Voorleggen")}
            </TranslateContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
