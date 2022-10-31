import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import "./LikeAndDislikeButtons.css";

const LikeAndDislikeButtons = (props) => {
  const [likeClass, setLikeClass] = useState("inactive");
  const [dislikeClass, setDislikeClass] = useState("inactive");

  function handleSelectedLike() {
    if (likeClass === "active") {
      setLikeClass("inactive");
    } else {
      setLikeClass("active");
      setDislikeClass("inactive");
    }
  }

  function handleSelectedDislike() {
    if (dislikeClass === "active") {
      setDislikeClass("inactive");
    } else {
      setDislikeClass("active");
      setLikeClass("inactive");
    }
  }

  return (
    <ButtonGroup>
      <Button
        className={likeClass}
        variant="success"
        onClick={handleSelectedLike}
      >
        Like
      </Button>

      <Button
        className={dislikeClass}
        variant="danger"
        onClick={handleSelectedDislike}
      >
        Dislike
      </Button>
    </ButtonGroup>
  );
};

export default LikeAndDislikeButtons;
