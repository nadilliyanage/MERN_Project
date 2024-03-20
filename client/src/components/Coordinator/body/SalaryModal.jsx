import React from "react";
import SalaryForm from "./SalaryForm";

const AddSalaryModal = ({ show, handleClose, handleSubmit, handleOnChange, rest }) => {
  const showHideClassName = show ? "modal fade show" : "modal fade";

  return (
    <div className={showHideClassName} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Salary</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <SalaryForm 
              handleSubmit={handleSubmit} handleOnChange={handleOnChange} rest={rest} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSalaryModal;