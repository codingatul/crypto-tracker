import React from "react";
import "./SelectButton.css";

function SelectButton({ children, onClick, selected }) {
  return (
    <div
      className="button"
      onClick={onClick}
      style={{
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black" : "",
      }}
    >
      {children}
    </div>
  );
}

export default SelectButton;
