import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

function SearchInput({ darkTheme, font, fetchData }) {
  const [queryParams, setQueryParams] = useSearchParams();
  const initialInput = queryParams.get("term") ?? "hello";

  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setInput(initialInput);
    fetchData(initialInput);
  }, [initialInput]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length < 1) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    setQueryParams({ term: input });
  };

  return (
    <section className="w-full h-16 py-2 px-6 relative">
      <form className="w-full h-full" onSubmit={handleSubmit}>
        <label htmlFor="searchInput" className="sr-only">
          Search for word
        </label>
        <input
          type="search"
          id="searchInput"
          placeholder="Search for word"
          value={input}
          onChange={handleChange}
          maxLength={25}
          className={`w-full h-full ${
            darkTheme ? "bg-zinc-900" : "bg-gray-200"
          } rounded-3xl px-4 sm:px-8 outline-none font-bold ${font}`}
        />
        <button
          type="submit"
          className="absolute top-2/4 right-6 sm:right-10 -translate-x-2/4 -translate-y-2/4"
        >
          <span className="sr-only">Search</span>
          <FaSearch size={25} className="text-purple-600" />
        </button>
      </form>
    </section>
  );
}

export default SearchInput;
