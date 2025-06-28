import { useState } from "react";
import "../styles/recomendations.css";

export default function Recomendation({
  recomendation,
}: {
  recomendation: {
    name: string;
    recomendation: string;
    role: string;
    image: string;
    url: string;
  };
}) {
  const [textExpanded, setTextExpanded] = useState(false);

  return (
    <div
      className={
        (textExpanded ? "" : "max-h-64 ") +
        "recomendation-box flex justify-start flex-col gap-3 max-w-[600px] relative overflow-hidden"
      }
    >
      <div className="flex gap-3 items-center">
        <img
          src={recomendation.image}
          className="size-14 rounded-full"
          alt=""
        />
        <div className="flex flex-col">
          <span className="text-white">{recomendation.name}</span>
          <span className="text-white">{recomendation.role}</span>
        </div>
      </div>
      <p className="!text-left whitespace-pre-line">
        {recomendation.recomendation}
      </p>
      <a href={recomendation.url}></a>

      <div
        className={
          (textExpanded ? "" : "absolute top-full -translate-y-full ") +
          "w-full flex bg-black"
        }
      >
        <button
          className=" text-[#007ACC] z-20 text-3xl pb-3 cursor-pointer"
          onClick={() => {
            setTextExpanded((expanded) => (expanded = !expanded));
          }}
        >
          {textExpanded ? "See less" : "See more..."}
        </button>
      </div>
    </div>
  );
}
