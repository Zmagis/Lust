import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
