import React from "react";

export const Container = ({ children, padding }) => {
  const classes = `container mx-auto max-w-[900px] px-3 ${padding}`;

  return (
    <>
      <div class={classes}>{children}</div>
    </>
  );
};
