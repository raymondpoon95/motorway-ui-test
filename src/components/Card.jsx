import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Modal from "./Modal";

import { AiFillHeart } from "react-icons/ai";

const Card = ({ img }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal img={img} setShowModal={setShowModal} showModal={showModal} />
      )}
      <div className="card-grid-item" onClick={() => setShowModal(true)}>
        <div className="user-img-container">
          <LazyLoadImage
            src={`${img.user.profile_image}.webp`}
            alt="user_profile"
            className="user-img"
          />
          <div className="user-info">
            <div className="username">{img.user.username}</div>
            <div className="user-likes">
              <AiFillHeart style={{ marginRight: "5px" }} />
              {img.user.total_likes} likes
            </div>
          </div>
        </div>
        <LazyLoadImage
          src={`${img.url}.jpg`}
          alt={img.alt_description}
          className="car-img"
        />
        <div className="likes-container">
          <div className="likes">
            <AiFillHeart className="heart-icon" />
            {img.likes}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
