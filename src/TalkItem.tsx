import React, { useState } from "react";
import cn from "clsx";
import TextareaAutosize from "react-textarea-autosize";
interface TalkProps {
  name: string;
  date: string;
  message: string;
  prevItem: any;
  nextItem: any;
  me: boolean;
}

const TalkItem = (props: TalkProps) => {
  const { name, date, message, prevItem, nextItem, me } = props;
  const sameUser = nextItem.name === name;
  const sameDate = nextItem.date === date;
  console.log(message, sameUser, nextItem.name, name, sameDate, nextItem.date, date);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <div
      className={cn("relative inline-flex flex-col justify-center mb-[8px]", {
        "items-end": me,
        "items-start": me,
        "mb-[4px]": sameUser && sameDate,
      })}
    >
      {prevItem.name === name || me ? <></> : <div className={cn("top-[-25px] left-[2px] text-[#9f9f9f] text-[0.9rem]")}>{name}</div>}
      <div className="relative inline-flex w-fit">
        <div
          className={cn("relative flex text-[0.8rem] py-[5px] px-[10px] rounded-[5px] max-w-[250px]", {
            "bg-[#ffe030] text-[#000]": me,
            "bg-[#303131] text-[#fff]": !me,
            "after:content-[''] after:absolute after:w-[10px] after:h-[10px] after:top-[20%] after:border-[14px] after:border-solid after:border-t-0 after:border-[transparent]":
              !(sameUser && sameDate),
            "after:right-[-8px] after:border-r-0 after:border-l-[#ffe030]": !sameUser && me,
            "after:left-[-8px] after:border-l-0 after:border-r-[#303131]": !sameUser && !me,
          })}
        >
          {message}
        </div>
        {!(sameUser && sameDate) && (
          <div
            className={cn("absolute flex items-end text-[0.5rem] h-full ml-[3px] font-[600] text-[#9f9f9f]", {
              "text-[#222] bottom-0 right-[calc(100%-_-3px)]": me,
              "text-[#9f9f9f] bottom-0 left-[calc(100%-_-3px)]": !me,
            })}
          >
            <span className="whitespace-nowrap">{date}</span>
          </div>
        )}
      </div>
      {!feedbackOpen && (
        <button
          className="absolute top-0 bottom-0 left-[calc(100%-_-4.5%)] text-[0.75rem] w-[8px] bg-[#ddd] font-[600] rounded-r-[15%] cursor-pointer hover:bg-[#bbb]"
          onClick={() => {
            setFeedbackOpen(true);
          }}
        ></button>
      )}
      {feedbackOpen && (
        <div className="absolute top-[-1px] left-[calc(100%-_-4.5%)] z-[4] rounded-[5px] text-[.8rem] text-[#222] bg-[#ffffff01]">
          <div className="absolute">
            <button
              className="absolute top-[3px] left-[calc(100%-_5%)] font-[600]  cursor-pointer"
              onClick={() => {
                setFeedbackOpen(false);
              }}
            >
              X
            </button>
            <TextareaAutosize className="notes outline-none w-[280px] bg-[#eee] text-[#3232d7] rounded-[5px] px-[10px] py-[5px] border-solid border-[1px] border-[#ccc]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TalkItem;
