import React, { useState } from "react";

import JobsDB from "data/jobs";
import "../styles/jobs.scss";

export default function Jobs() {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (option) => {
    document.getElementById("company-" + selectedOption).classList.remove("active");
    setSelectedOption(option);
    console.log(selectedOption);
    document.getElementById("company-" + option).classList.add("active");
    console.log(JobsDB[selectedOption]["describe"]);
  };

  return (
    <section className="section-jobs" id="experience">
      <header>Where I've Worked</header>
      <div className="jobs-container">
        <div className="col-left">
          {JobsDB.map((job, index) => (
            <div id={"company-" + index} className={selectedOption === index ? "job active" : "job"} key={index} onClick={() => handleOptionClick(index)}>
              <div className="job-info">
                <p>{job.company}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-right">
          <h3>
            {JobsDB[selectedOption]["position"]} <span className="highlight">@ {JobsDB[selectedOption].company}</span>
          </h3>
          <p className="duration">
            {JobsDB[selectedOption].start} - {JobsDB[selectedOption].end}
          </p>
          <ul>
            {JobsDB[selectedOption].description.map((point, index) => (
              <li key={index} className="li-format">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
