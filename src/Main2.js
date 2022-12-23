import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
const Accordion = ({ API, Description, Link }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{API}</div>
        <div>{!isActive ? <SlArrowDown /> : <SlArrowUp />}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {Description}
          <br />
          <a
            rel="noreferrer"
            href={Link}
            target="blank"
            className="btn btn-sm btn-dark mt-3"
          >
            Read More
          </a>
        </div>
      )}
    </div>
  );
};

export default Accordion;
