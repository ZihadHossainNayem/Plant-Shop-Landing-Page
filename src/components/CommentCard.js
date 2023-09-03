import React from "react";
import { BsQuote } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const CommentCard = ({ commentData }) => {
  return (
    <div className="bg-[#F3FFFC]  border shadow-lg rounded-xl max-w-[700px] md:py-8 py-4 md:px-12 px-6 cursor-default md:h-[250px] h-[270px]">
      {/* comment */}
      <p className="font-steppe">{commentData.comment}</p>
      <div className="pt-8 flex justify-between px-0 md:px-2">
        <div className="flex md:gap-4 gap-2 items-start">
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
