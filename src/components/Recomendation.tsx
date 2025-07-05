import { useEffect, useRef, useState } from "react";
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
    seeMoreButtonText: string;
    seeLessButtonText: string;
  };
}) {
  const recomendationText = useRef<HTMLParagraphElement | null>(null);
  const [textExpanded, setTextExpanded] = useState(false);

  const [showExpandButton, setShowExpandButton] = useState(false);

  const handleShowButton = () => {
    if (
      recomendationText.current &&
      recomendationText.current?.offsetHeight > 96
    ) {
      setShowExpandButton(true);
    } else {
      setShowExpandButton(false);
    }
  };

  useEffect(() => {
    handleShowButton();

    const handleResize = () => {
      handleShowButton();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={
        (textExpanded ? "" : "max-h-64 ") +
        "recomendation-box flex justify-start flex-col gap-3 max-w-[600px] relative overflow-hidden"
      }
    >
      <div className="flex gap-3 items-center">
        <img
          loading="lazy"
          src={recomendation.image}
          className="size-14 rounded-full"
          alt=""
        />
        <div className="flex flex-col items-start">
          <a href={recomendation.url} target="_blank">
            <span className="text-d-violet">{recomendation.name}</span>
          </a>
          <span className="text-white">{recomendation.role}</span>
        </div>
      </div>
      <p
        ref={recomendationText}
        className="!text-left whitespace-pre-line truncate pt-2"
      >
        {recomendation.recomendation}
      </p>

      {/* Botón de ver más */}
      {showExpandButton ? (
        <div
          className={
            (textExpanded ? "" : " absolute top-full -translate-y-full ") +
            "w-full flex bg-black z-20"
          }
        >
          <button
            className="text-d-blue hover:text-d-blue-500 text-3xl pb-3 cursor-pointer "
            onClick={() => {
              setTextExpanded((expanded) => (expanded = !expanded));
            }}
          >
            {textExpanded
              ? recomendation.seeLessButtonText
              : recomendation.seeMoreButtonText}
          </button>
        </div>
      ) : null}
    </div>
  );
}
