import React from "react";
import "./Cursor.css";

export interface ICursor {
  label: string;
}

const Cursor: React.FC<ICursor> = ({ label }) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  );
};

export default Cursor;
