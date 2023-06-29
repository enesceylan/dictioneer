import { useEffect, useRef } from "react";

import { FaPlay } from "react-icons/fa";

function Pronunciation({ data, darkTheme }) {
  const validPhonetics = data?.phonetics?.find(
    (phonetics) => phonetics.text && phonetics.audio
  );

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(validPhonetics?.audio);
  }, [data]);

  function playAudio() {
    audioRef.current.play();
  }

  return (
    <section className="flex flex-row justify-between items-center w-full">
      <div>
        <h1 className="text-3xl font-bold pb-2" aria-label="Word">
          {data?.word}
        </h1>
        <span className="text-lg text-purple-600" aria-label="Phonetics">
          {validPhonetics?.text}
        </span>
      </div>
      <button
        className={`w-[50px] h-[50px] ${
          darkTheme ? "bg-purple-500" : "bg-purple-300"
        } rounded-full flex justify-center items-center opacity-60`}
        onClick={playAudio}
        aria-label="Play Audio"
      >
        <FaPlay className="text-purple-800" size={25} />
        <audio id="audio" src=""></audio>
      </button>
    </section>
  );
}

export default Pronunciation;
