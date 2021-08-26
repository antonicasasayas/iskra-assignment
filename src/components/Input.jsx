import "../css/Input.css";
import { useState } from "react";

const Input = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([
    "suggestion textbox",
    "suggestion textbox javascript",
    "suggestion textbox jquery",
  ]);
  const handleChange = async (e) => {
    const { value } = e.target;
    setQuery(value);

    //Fake API call
    /* 
    const url = new URL ("http://api.iskra.cat/suggestions");
    const params = { term: value };
    url.search = new URLSearchParams(params).toString();
    const request = await fetch(url)
    const response = await request.json()
    setSuggestions(response.data)
    */
  };

  return (
    <div id="input-container">
      <input
        id={query ? "inputActive" : null}
        className="search-input"
        type="text"
        placeholder="Search Google or type a URL"
        value={query}
        onChange={(e) => handleChange(e)}
      />
      <div id="suggestions-container">
        {query &&
          suggestions.map((suggestion) => (
            <span>
              {suggestion.slice(0, 15)}
              <b>{suggestion.slice(15)}</b>
            </span>
          ))}
      </div>
    </div>
  );
};

export default Input;
