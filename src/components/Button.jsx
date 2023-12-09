import React, { useContext, useState } from "react";
import { Oval } from "react-loader-spinner";
import Data from "../context/Data";

export const Button = ({ text, onClick, bg, hover }) => {
  const classes = `flex justify-center items-center rounded px-4 py-2 text-white ${bg} ${hover}`;

  const { isLoading } = useContext(Data);

  return (
    <>
      <button onClick={onClick} className={classes} disabled={isLoading}>
        {isLoading ? (
          <Oval
            height={20}
            width={20}
            color="white"
            secondaryColor="lightblue"
            strokeWidth={5}
          />
        ) : (
          text
        )}
      </button>
    </>
  );
};
