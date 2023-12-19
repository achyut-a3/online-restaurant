import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const buttonStyle = {
    backgroundColor: "#009e84",
    width: "500px",
    height: "50px",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    fontSize: "1.2rem",
  };

  return (
    <button style={buttonStyle} onClick={goBack}>
      Go Back
    </button>
  );
};

export default GoBackPage;
