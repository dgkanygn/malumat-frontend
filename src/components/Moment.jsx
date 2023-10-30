import React from "react";

// moment
import moment from "moment";

export const Moment = ({ date }) => {
  const timeAgo = moment(date).startOf().fromNow();

  return (
    <>
      {/* <p>{timeAgo}</p> */}
      <p>15d</p>
    </>
  );
};
