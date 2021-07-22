import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/1.png)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h5>Hi, I am </h5>
            <h3 className="name">Emmanuel Yeboah</h3>
            <p className="job">
              I am programmer. I am{" "}
              <span className="emphasized">experienced</span> in using
              programming languages such{" "}
              <span className="emphasized">Java </span>,
              <span className="emphasized">Python </span> and
              <span className="emphasized"> JavaScript </span> to architect
              <span className="emphasized"> websites</span>,
              <span className="emphasized"> mobile apps</span> and
              <span className="emphasized"> desktop apps </span>
              from scratch.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
