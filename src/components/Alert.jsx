import "../css/Alert.css";

import ClipLoader from "react-spinners/ClipLoader";

const Alert = ({ showAlert, submittedQuery }) => {
  return showAlert ? (
    <div className="alert-container">
      <ClipLoader color="grey" size={15} />
      <span>
        Searching for <b>{submittedQuery}</b>
      </span>
    </div>
  ) : null;
};

export default Alert;
