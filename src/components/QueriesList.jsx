import '../css/QueriesList.css'

const QueriesList = ({ submittedQueries, handleClickOnQueries }) => {
    return (
      <div className="queries-container">
        {submittedQueries &&
          submittedQueries.map((submittedQuery, index) => (
              <button type="submit" onClick={(e) => handleClickOnQueries(e) } className={submittedQuery } key={index}>{submittedQuery}</button>
          ))}
      </div>
    );
}

export default QueriesList
