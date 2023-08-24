import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import cn from "clsx";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import TalkItem from "./TalkItem";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import customParseFormat from "dayjs/plugin/customParseFormat";
type Props = {};
dayjs.extend(customParseFormat);
dayjs.locale("ko");
const Talk = (props: Props) => {
  const uploadRef = useRef<HTMLInputElement>(null);
  const pdfRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<any[]>([]);
  const [customText, setCustomText] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  const handleUpload = (e: any) => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  };

  const handleInput = (e: any) => {
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsText(file);

    fileReader.onload = () => {
      resultParser(fileReader.result);
    };
  };

  const makePNG = async () => {
    const saveImg = (uri, filename) => {
      let link = document.createElement("a");

      document.body.appendChild(link);

      link.href = uri;
      link.download = filename;
      link.click();

      document.body.removeChild(link);
    };
    html2canvas(pdfRef.current, { scale: 3, width: 700 }).then(canvas => {
      saveImg(canvas.toDataURL("image/png"), "kakao.png");
    });
  };

  const resultParser = (res: any) => {
    const step1 = res.replace(/(?:\r\n)/g, "<br>");
    const red = step1.split("<br>");
    const arr = Array.from({ length: red.length }, (): any => null);

    red.map((v: any, idx: number) => {
      const s1 = v.indexOf(", ");
      const s2 = v.indexOf(": ");
      let result = {};

      const name = v.substring(s1 + 1, s2).trim();
      const message = v.substring(s2 + 1, v.length).trim();
      const date = v.substring(0, s1).trim();
      if (s1 > 0 && s2 > 0) {
        const Tdate = dayjs(date, "YYYY년 M월 D일 A H:mm");
        console.log("tt", name, message);
        result = {
          date: Tdate.format("A H:mm"),
          name,
          message,
        };
      } else if (v.includes("년 ")) {
        const Tdate = dayjs(v, "YYYY년 M월 D일 A H:mm");
        result = {
          date: Tdate.format("YYYY년 M월 D일 ddd요일"),
          name: "",
          message: "",
        };
      } else {
        result = {
          date: "",
          name: "",
          message: v,
        };
      }
      arr[idx] = result;
    });
    setText(arr);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    setUsers(
      text.map(v => {
        if (v.name && !users.includes(v.name)) {
          return v.name;
        }
      })
    );
    if (text.length > 0) {
      window.localStorage.setItem("talk", JSON.stringify(text));
    }
  }, [text]);

  useEffect(() => {
    setCustomText(JSON.parse(window.localStorage.getItem("talk")));
  }, [text]);

  return (
    <div className="">
      <button
        onClick={() => {
          setCustomText([]);
          window.localStorage.removeItem("talk");
        }}
      >
        초기화
      </button>{" "}
      <button onClick={makePNG}>이미지로 저장</button>
      <div className="flex flex-col px-[20px]">
        <select value={users[0]}>
          {users.map((user: string) => {
            return <option value={user}>{user}</option>;
          })}
        </select>
        <div ref={pdfRef} className="flex">
          <div id="output" className="flex bg-[#1e1f21] w-[400px] rounded-[5px] flex-col ">
            <div className="flex px-[15px] flex-col  py-[20px] ">
              {customText?.length > 0 ? (
                customText.map((item: any, idx: number) => {
                  if (item.name && item.message) {
                    return (
                      <TalkItem
                        name={item.name}
                        date={item.date}
                        message={item.message}
                        prevItem={customText[idx - 1]}
                        nextItem={customText[idx + 1]}
                        me={item.name === "준호"}
                      />
                    );
                  } else if (item.date) {
                    return (
                      <div className="flex w-full justify-center my-[10px]">
                        <div className="bg-[#343434] rounded-[15px] text-[0.8rem] font-[600] text-[#9f9f9f] px-[15px] py-[3px]">
                          {item.date}
                        </div>
                      </div>
                    );
                  }
                })
              ) : (
                <div className="flex justify-center">
                  <button onClick={handleUpload}>
                    <input type="file" accept="text/plain" onChange={handleInput} ref={uploadRef} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talk;
