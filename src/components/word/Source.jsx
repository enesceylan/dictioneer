import { BiLinkExternal } from "react-icons/bi";

function Source({ data }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="text-zinc-500">Source: </span>
        <a
          href={data?.sourceUrls[0]}
          target="_blank"
          rel="noreferrer"
          className="flex items-center underline text-sm"
        >
          {data?.sourceUrls[0]}
          <BiLinkExternal className="ml-2" />
        </a>
      </div>
    </>
  );
}

export default Source;
