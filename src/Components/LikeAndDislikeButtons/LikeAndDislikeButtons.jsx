import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import "./LikeAndDislikeButtons.css";

const LikeAndDislikeButtons = (props) => {
  const [likeClass, setLikeClass] = useState("inactive");
  const [dislikeClass, setDislikeClass] = useState("inactive");

  function handleClick() {
    if (likeClass === "inactive") {
      setLikeClass("active");
      setDislikeClass("inactive");
    }
    if (likeClass === "active") {
      setLikeClass("inactive");
      setDislikeClass("active");
    }
  }

  return (
    <div>
      <button className={likeClass} onClick={handleClick}>
        Like
      </button>

      <button className={dislikeClass} onClick={handleClick}>
        Dislike
      </button>
    </div>
  );
};

export default LikeAndDislikeButtons;
