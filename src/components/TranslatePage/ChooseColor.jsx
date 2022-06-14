import React from "react";

const ChooseColor = ({ color, setColor }) => {
  return (
    <div>
	  <div>
	    <span style={{paddingRight: "10px"}}>Choose Button Color: </span>
        <span
          style={{
            display: "inline-block",
            width: "20px",
            height: "20px",
            backgroundColor: "red",
			cursor: "pointer"
          }}
          onClick={() => setColor("red")}
        ></span>
        <span
          style={{
            display: "inline-block",
            width: "20px",
            height: "20px",
            backgroundColor: "blue",
			cursor: "pointer"
          }}
          onClick={() => setColor("primary")}
        ></span>
	  </div>
      Chosen Color: {color}
    </div>
  );
};

export default ChooseColor;
