import { useState } from "react";

import { BsSun, BsMoon, BsBook } from "react-icons/bs";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function Header({ darkTheme, setDarkTheme, font, setFont, onResetSearch }) {
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleResetSearch = () => {
    console.log("reset");
    onResetSearch(); // Call the provided onResetSearch function
  };

  return (
    <header className="flex justify-between items-center py-2 px-6">
      <BsBook
        size={40}
        onClick={handleResetSearch}
        className="cursor-pointer"
        aria-label="Reset Search"
        role="button"
      />
      <div className="flex flex-row gap-4 items-center">
        <div
          className="flex justify-between items-center gap-2 relative"
          onClick={() => setDropdownActive(!dropdownActive)}
          aria-expanded={dropdownActive}
        >
          {font === "font-sans"
            ? "Sans Serif"
            : font === "font-serif"
            ? "Serif"
            : "Mono"}
          {dropdownActive ? (
            <FaAngleUp className="text-purple-600" />
          ) : (
            <FaAngleDown className="text-purple-600" />
          )}
          {dropdownActive && (
            <div
              className={`absolute z-10 top-8 w-24 flex flex-col gap-2 py-1 ${
                darkTheme ? "bg-black" : "bg-white"
              } border border-purple-600`}
            >
              <button onClick={() => setFont("font-serif")}>Serif</button>
              <button onClick={() => setFont("font-sans")}>Sans Serif</button>
              <button onClick={() => setFont("font-mono")}>Mono</button>
            </div>
          )}
        </div>
        <span
          className={`w-px h-6 ${darkTheme ? "bg-white" : "bg-black"}`}
          aria-hidden="true"
        ></span>
        <div className="flex flex-row gap-2 items-center">
          <button
            className={`relative w-12 h-6 rounded-xl cursor-pointer ${
              darkTheme ? "bg-purple-600" : "bg-zinc-400"
            }`}
            onClick={() => setDarkTheme(!darkTheme)}
            aria-label={
              darkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
          >
            <div
              className={`absolute w-4 h-4 top-1 ${
                darkTheme ? "right-1" : "left-1"
              } bg-white rounded-full`}
            ></div>
          </button>
          {darkTheme ? (
            <BsSun size={24} aria-label="Light Mode" />
          ) : (
            <BsMoon size={24} aria-label="Dark Mode" />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
