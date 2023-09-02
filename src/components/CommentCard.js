import React from "react";
import { BsQuote } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const CommentCard = ({ commentData }) => {
  return (
    <div className="bg-white rounded-xl max-w-[700px] py-8 px-12 cursor-default">
      {/* comment */}
      <p className="font-steppe">{commentData.comment}</p>
      <div className="pt-8 flex justify-between px-2">
        <div className="flex gap-4 items-start">
          <BsQuote size={35} />
          <div>
            <h1 className="font-semibold text-xl">{commentData.name}</h1>
            <p className="font-light text-gray-600">{commentData.profession}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <AiFillStar /> <span>{commentData.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
