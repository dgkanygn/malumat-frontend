import React from "react";

export const TextArea = ({ onChange, value, name, placeholder }) => {
  return (
    <>
      <textarea
        className="bg-slate-100 p-2 outline-none rounded "
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        rows="5"
      />
    </>
  );
};
