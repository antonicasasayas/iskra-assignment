import "./css/App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import Alert from "./components/Alert";
import { getLocalStorage, setLocalStorage } from "./lib/localStorageHandler";
import QueriesList from "./components/QueriesList";

function App() {
  const [query, setQuery] = useState("");
  const [submittedQueries, setSubmittedQueries] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "suggestion textbox",
    "suggestion textbox javascript",
    "suggestion textbox jquery",
  ]);

  const handleChange = async (e) => {
    const { value } = e.target;
    setQuery(value);
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.includes("suggestion textbox")
    );
    setSuggestions([value, ...filteredSuggestions]);

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

  const handleClick = (e) => {
    const clickedSuggestion = suggestions.find(
      (suggestion, index) => index == e.target.className
    );
    setQuery(clickedSuggestion);
  };

  useEffect(() => {
    setSubmittedQueries(getLocalStorage("queriesList"));
  }, []);

  useEffect(() => {
    setLocalStorage("queriesList", submittedQueries);
  }, [submittedQueries]);

  const handleClickOnQueries = (e) => {
    const clickedQuery = e.target.className;
    setQuery(clickedQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setShowAlert(true);
    if (submittedQueries.length >= 10) submittedQueries.shift();
    setSubmittedQueries([...submittedQueries, query]);
    setQuery("");
    setTimeout(function () {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div>
      <Alert
        showAlert={showAlert}
        submittedQuery={submittedQueries[submittedQueries.length - 1]}
      />
      <div id="container">
        <img id="logo" src="/logo.png" alt="google-logo" />
        <Form
          query={query}
          suggestions={suggestions}
          handleChange={handleChange}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
        />
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <QueriesList
          handleClickOnQueries={handleClickOnQueries}
          submittedQueries={submittedQueries}
        />
      </form>
    </div>
  );
}

export default App;
