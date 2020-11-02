import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

//Scroll to top button from Matthew Croak https://medium.com/better-programming/create-a-scroll-to-top-arrow-using-react-hooks-18586890fedc
const ScrollTopBtn = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div>
      <Button
        variant="secondary"
        id="scrollTop"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    </div>
  );
};

export default ScrollTopBtn;
