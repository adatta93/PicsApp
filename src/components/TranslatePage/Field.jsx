import React from "react";
import { TranslateContext } from "./Context";

class Field extends React.Component {
  static contextType = TranslateContext;
  render() {
    const labelText = this.context === "english" ? "Name" : "Naam";
    return (
      <div className="field">
        <label>{labelText}</label>
        <input />
      </div>
    );
  }
}

export default Field;
