import React, { useContext, useEffect } from "react";
import { Button } from "./Button";

// context
import Data from "../context/Data";
import axios from "axios";

// context
import { useNavigate } from "react-router-dom";

export const Modal = () => {
  const navigate = useNavigate();

  const {
    showModal,
    setShowModal,
    postComments,
    setPostComments,
    setFeatures,
  } = useContext(Data);

  const closeModal = () => {
    setShowModal({ isShow: false, deleted: "", id: "" });
  };

  const deleteConfirmation = async () => {
    try {
      if (showModal.deleted === "comment") {
        const res = await axios.delete(
          `http://localhost:3001/deleteComment/${showModal.id}`
        );
        const updatedArray = postComments.filter(
          (comment) => comment._id !== showModal.id
        );
        setPostComments(updatedArray);
        setShowModal({
          isShow: false,
          deleted: "",
          id: "",
        });
      } else if (showModal.deleted === "post") {
        const res = await axios.delete(
          `http://localhost:3001/deletePost/${showModal.id}`
        );

        setShowModal({
          isShow: false,
          deleted: "",
          id: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center">
        <div>
          <div
            className="fixed top-0 left-0 w-full h-full bg-slate-900 opacity-70"
            onClick={closeModal}
          ></div>
        </div>
        <div className="bg-white p-7 flex flex-col gap-4 rounded z-50">
          <p>Silmek istediğinize emin misiniz?</p>
          <div className="flex justify-start gap-2">
            <Button
              bg={"bg-red-700"}
              text={"Sil"}
              onClick={deleteConfirmation}
            />
            <Button bg={"bg-blue2"} text={"İptal"} onClick={closeModal} />
          </div>
        </div>
      </div>
    </>
  );
};
