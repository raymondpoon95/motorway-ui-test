import React, { useRef } from "react";
import { useClickAway } from "react-use";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ img, setShowModal, showModal }) => {
  const ref = useRef(null);

  useClickAway(ref, () => {
    if (showModal) {
      setShowModal(false);
    }
  });

  return (
    <div className={`outer-modal-container ${showModal ? "show" : ""}`}>
      <div className="inner-modal-container" ref={ref}>
        <div className="modal">
          <div className="modal-img-container">
            <a href={`${img.url}.jpg`} target="_blank" rel="noreferrer">
              <img
                src={`${img.url}.jpg`}
                alt={img.alt_description}
                className="car-img"
              />
            </a>
          </div>
          <div className="modal-user-container">
            <AiFillCloseCircle
              className="close-icon"
              onClick={() => setShowModal(false)}
            />
            <div className="modal-user-header">
              <img
                src={`${img.user.profile_image}.webp`}
                alt="user_profile"
                className="modal-user-img"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                  marginTop: "20px",
                }}
              >
                <span className="modal-username">{img.user.username}</span>
                <span style={{ fontSize: "1rem" }}>{img.user.name}</span>
                <span style={{ fontSize: "0.9rem" }}>{img.user.location}</span>
              </div>
            </div>
            <div className="modal-user-main">
              {img.user.bio && (
                <div className="bio">
                  <span style={{ fontWeight: "500", fontSize: "18px" }}>
                    Bio:{" "}
                  </span>
                  {img.user.bio}
                </div>
              )}

              {img.description && (
                <div className="description">
                  <span
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    Description:{" "}
                  </span>
                  {img.description}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
