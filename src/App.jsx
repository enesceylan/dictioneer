import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import useFetch from "./hooks/useFetch";

import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Word from "./components/word/Word";

function App() {
  const [term, setTerm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // values can be font-serif , font-sans , font-mono
  const [font, setFont] = useState(
    localStorage.getItem("current-font") ?? "font-serif"
  );
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    localStorage.setItem("current-font", font);
  }, [font]);

  async function fetchData(input) {
    setTerm(null);
    useFetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`,
      (data) => {
        console.log("Starting useFetch.");
        setTerm(data[0]);
      },
      setLoading,
      setIsError
    );
  }

  const errorElement = (
    <main className="my-20 tablet:my-[8.25rem] text-center">
      <div className="text-heading-l" role="img" aria-label="Sad Face">
        😕
      </div>
      <h5 className="font-bold mt-5 tablet:mt-11">No Definitions Found</h5>
      <p className="mt-3 tablet:mt-6">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at a later time or head to the web
        instead.
      </p>
    </main>
  );

  return (
    <BrowserRouter>
      <main
        className={`${
          darkTheme ? "bg-zinc-950 text-white" : "bg-white text-black"
        } ${font} min-h-screen`}
      >
        <section className="container mx-auto px-4 sm:px-16 lg:px-80">
          <Header
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
            font={font}
            setFont={setFont}
            onResetSearch={() => fetchData("hello")}
          />
          <div className="mt-8">
            <SearchInput
              fetchData={fetchData}
              darkTheme={darkTheme}
              font={font}
            />
            {isError && errorElement}
            {!loading && !isError && <Word data={term} darkTheme={darkTheme} />}
          </div>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
