import { PencilSquare } from "react-bootstrap-icons";
import "../styles/CardProfile.css";
import { ArrowRight } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { deleteMyExperience, getExperience } from "../action";
import { useDispatch, useSelector } from "react-redux";
import AddExperience from "./AddExperience";

const ExperienceCard = ({ showButton = true }) => {
  const location = useLocation();
  const experiences = useSelector((state) => state.experiences.experiences);
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = useState(false);

  const formatDate = (format) => {
    const date = new Date(format);
    const options = { year: "numeric", month: "long" };
    const formattedDate = date.toLocaleDateString("it-IT", options);

    return formattedDate;
  };


  const handleDeleteExperience = (id) => {
    dispatch(deleteMyExperience(id))
  };

  return (
    <div className="card-profile-wrapper bg-light">
      <div className="card-header">
        <div className="left-section">
          <div className="title">Esperienza</div>
        </div>
        <div className="right-section">
          {location.pathname === "/profile/66deab4f4d0def0015cef0f9" ? (
            <>
              <Plus
                className="plus-button"
                onClick={() => setModalShow(true)}
              />
              <PencilSquare size={25} />
            </>
          ) : (
            <></>
          )}
          <AddExperience show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
      <div className="card-content">
        {experiences.length > 0 ? (
          experiences.map((element) => {
            return (
              <div key={element._id} className="mb-4 d-flex justify-content-between align-items-start">
                <div>
                  <h4 className="text-dark">{element.role}</h4>
                  <h5 className="text-secondary fw-bolder">
                    {element.company}
                  </h5>
                  <h6 className="text-secondary">
                    {formatDate(element.startDate)} -{" "}
                    {formatDate(element.endDate)}
                  </h6>
                  <h6 className="text-secondary">{element.area}</h6>
                </div>
                <i className="bi bi-trash3-fill fs-4" onClick={() => handleDeleteExperience(element._id)}></i>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
      {showButton !== true ? (
        <div className="card-footer">
          <div className="footer-content">Mostra tutte le attività</div>
          <ArrowRight />
        </div>
      ) : null}
    </div>
  );
};
export default ExperienceCard;
