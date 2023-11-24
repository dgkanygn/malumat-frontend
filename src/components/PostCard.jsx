import React from "react";

// components
import { Link } from "react-router-dom";
import { ProfileButton } from "./ProfileButton";
import { Moment } from "./Moment";
import { Flex } from "./Flex";

// utils
import { filterText } from "../utils/filterText";

export const PostCard = ({
  title,
  author,
  subject,
  date,
  id,
  image,
  authorImage,
  param,
}) => {
  const isOwner = param === author;

  const link =
    "https://res.cloudinary.com/dszyogrt7/image/upload/v1698925680/ybtqchgxz9ybhpyjkxji.png";

  const titleArr = title.split(" ");
  let filteredTitle = filterText(titleArr, 35);

  const subjectArr = subject.split(" ");
  let filteredSubject = filterText(subjectArr, 50);

  return (
    <>
      <Flex
        direction={"flex-col"}
        gap={"gap-4"}
        prop1={"md:flex-row"}
        align={"lg:items-center"}
      >
        <div className="flex-shrink-0 w-[300px] h-[200px]">
          <div className="relative w-full h-full">
            <Link to={`/post/${id}`}>
              <img
                class="absolute inset-0 w-full h-full object-cover rounded"
                src={image === " " ? link : image}
                alt=""
              />
            </Link>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-2">
            <Link to={`/post/${id}`}>
              <p class="text-[25px]">
                <b className="hover:text-slate-700">{filteredTitle}</b>
              </p>
            </Link>
            <p>{filteredSubject}</p>
          </div>
          <div class={`flex items-center justify-start ${!isOwner && "gap-2"}`}>
            <Link to={`/profile/${author}`}>
              {!isOwner && (
                <ProfileButton image={authorImage} username={author} />
              )}
            </Link>
            <Moment date={date} />
          </div>
        </div>
      </Flex>
    </>
  );
};
