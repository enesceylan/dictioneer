import Definitions from "./Definitions";
import Pronunciation from "./Pronunciation";
import Source from "./Source";

function Word({ data, darkTheme }) {
  return (
    <div className="flex flex-col gap-4 px-6 py-8 ">
      <Pronunciation data={data} darkTheme={darkTheme} />
      <Definitions data={data} />
      <Source data={data} />
    </div>
  );
}

export default Word;
