function Definitions({ data }) {
  if (!data) {
    return null; // Return null or a loading/error message when data is null
  }

  return (
    <section>
      {data.meanings.map((meaning) => (
        <div className="py-4" key={meaning.partOfSpeech}>
          <div className="flex flex-row items-center gap-4">
            <h2 className="text-xl font-bold italic tracking-tighter">
              {meaning.partOfSpeech}
            </h2>
            <div className="w-full h-[1px] bg-gray-300"></div>
          </div>
          <div className="pt-4">
            <h3 className="text-zinc-500">Meaning</h3>
            <ul className="list-disc pl-4" role="definitions list">
              {meaning.definitions.map((definition) => (
                <li
                  className="marker:text-purple-600 pt-4"
                  key={definition.definition}
                  role="definition"
                >
                  {definition.definition}
                </li>
              ))}
            </ul>
            {meaning.synonyms.length > 0 && (
              <div className="pt-4 flex gap-4">
                <span className="text-zinc-500">Synonyms: </span>
                <ul className="list-disc pl-4" role="synonyms list">
                  {meaning.synonyms.map((synonym) => (
                    <li
                      className="text-purple-600 list-none"
                      key={synonym}
                      role="synonym"
                    >
                      {synonym}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="w-full h-[1px] bg-gray-300 my-4"></div>
    </section>
  );
}

export default Definitions;
