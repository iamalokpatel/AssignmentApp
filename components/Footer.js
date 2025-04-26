"use client";
import "../app/page.css";
import { useState } from "react";

export default function Footer() {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() !== "") {
      console.log("Input value:", input);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      <footer className="col-start-2 row-start-3 p-4 flex items-center justify-center Footer grid grid-cols-4 grid-rows-3">
        <div className="col-start-1 row-start-1 row-span-3 h-vh">
          <div className="flex mb-1">
            <h1 className="mt-2 ml-4">Pending Questions</h1>
            <p className="ml-auto mr-8 mt-2 bg-sky-300 rounded-md w-8 text-sm h-5 pl-2 text-white">
              02
            </p>
          </div>
          <div className="QuestionCard">
            <div className="flex">
              <img
                className="h-9 w-9 ml-4 rounded-full"
                alt="Phoenix"
                src="/phoenix.png"
              />
              <div className="p-1">
                <h1 className="ml-2">Phonix Baker</h1>
                <p className="ml-2 text-xs">@Phoenix</p>
              </div>
              <p className="ml-auto mr-2 text-xs">5min ago</p>
            </div>
            <p className="text-sm ml-4">
              What are the requirement for new store
            </p>
          </div>
          <div className="QuestionCard">
            <div className="flex">
              <img
                className="h-9 w-9 ml-4 rounded-full"
                alt="Koray"
                src="/koray.png"
              />
              <div className="p-1">
                <h1 className="ml-2">koray okumas</h1>
                <p className="ml-2 text-xs">@Koray</p>
              </div>
              <p className="ml-auto mr-5 text-xs">4hr ago</p>
            </div>
            <p className="text-sm ml-4">How do I manage Inventory efectively</p>
          </div>
        </div>

        <div className="col-start-2 row-start-1 FooterAssistant">
          <div>
            <div className="w-1/2 mx-auto">
              <img
                alt="Symble"
                width={70}
                height={70}
                className="mt-6 mx-auto p-4 mix-blend-multiply"
                src="/symble.png"
              />
              <h1 className="mx-auto flex justify-center w-66 font-bold">
                Welcome To The AI Chat Assistant
              </h1>
            </div>
            <div className="w-3/5 mx-auto border rounded h-8 mt-2 flex items-center">
              <input
                type="text"
                className="p-1 rounded-md  mx-auto ml-2 outline-none"
                placeholder="Enter text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleSubmit} className="text-xl font-bold ml-2">
                &#10148;
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
