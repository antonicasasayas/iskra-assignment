import "../css/Input.css";

const Form = ({
  handleChange,
  handleClick,
  handleSubmit,
  query,
  suggestions,
}) => {
  return (
    <form data-testid="form" name="form" onSubmit={(e) => handleSubmit(e)} id="form-container">
      <input
        id={query ? "inputActive" : null}
        className="search-input"
        type="text"
        placeholder="Search Google or type a URL"
        value={query}
        onChange={(e) => handleChange(e)}
      />
      <div
        id={query ? "suggestionsActive" : null}
        className="suggestions-container"
      >
        {query &&
          suggestions.map((suggestion, index) => (
            <button
              className={index}
              key={index}
              onClick={(e) => handleClick(e)}
            >
              {suggestion}
            </button>
          ))}
      </div>
    </form>
  );
};

export default Form;
