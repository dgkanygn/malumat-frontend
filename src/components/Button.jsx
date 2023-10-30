import React from "react";

export const Button = ({ text, onClick, bg, hover }) => {
  const classes = ` rounded px-4 py-2 text-white ${bg} ${hover}`;

  return (
    <>
      <button onClick={onClick} className={classes}>
        {text}
      </button>
    </>
  );
};
