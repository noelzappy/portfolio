import React, { useState } from "react";

const CV = () => {
  function download(url, filename) {
    fetch(url).then(function (t) {
      return t.blob().then((b) => {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(b);
        a.setAttribute("download", filename);
        a.click();
      });
    });
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>My Resume</span>
              <h5>Curriculum Vitae</h5>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className="tokyo_tm_button">
          <form
            action="https://github.com/noelzappy/CV/raw/main/Emmanuel%20Yeboah%20Resume.pdf"
            method="get"
          >
            <button className="ib-button">Download My CV</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CV;
