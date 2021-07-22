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
            <h3 className="name">Emmanuel Yeboah</h3>
            <p className="job">

              I am a hardworking programmer offering wide-ranging expertise and 4+ years of industry experience.
              I have background in testing, evaluating, designing, and implementing software solutions.
              Specializing in programming languages such as Python, Java, and JavaScript.
              Able to architect, and enhance highly scalable, real-time systems, by leveraging best-in-class tools to deliver value to customers. Exercises judgment in determining and recommending designs based on business objectives, timelines, and resource constraints.

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
