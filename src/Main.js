import React from "react";

const Main = (props) => {
  let { API, Description, Link } = props;

  return (
    <div style={{ color: "black" }} className="">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              {API}
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
