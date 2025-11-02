import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Language = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState("");

  const addQuery = () => {
    if (query.trim() !== "") {
      setSearchParam({ info: query });
      setQuery("");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center" style={{ height: "80vh", justifyContent: "center" }}>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Enter a language (java, python, react)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control mb-2"
          style={{ width: "300px" }}
        />
        <button className="btn btn-primary" onClick={addQuery}>
          Search
        </button>
      </div>
      <SearchData info={searchParam.get("info")} />
    </div>
  );
};

const SearchData = ({ info }) => {
  if (!info) return <h2>Enter a language name to search.</h2>;

  switch (info.toLowerCase()) {
    case "java":
      return <h2>This is Java</h2>;
    case "python":
      return <h2>This is Python</h2>;
    case "react":
      return <h2>This is React JS</h2>;
    default:
      return <h2>Not valid</h2>;
  }
};

export default Language;
