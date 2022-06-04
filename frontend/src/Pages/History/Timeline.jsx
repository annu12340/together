import React from "react";
import "./timeline.css";


const Timeline = () => {
  return (
    <div className="white-bk dashboard-timeline-row">
      <div className="">
        <h4 className=" dashboard-heading ">Timeline</h4>
      </div>
      <hr />
      <ul className="dashboard-timeline">
        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            <span>2nd September 2021</span>
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">IBeTo Launch</h3>
          </div>
        </li>

        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            <span>19th September 2021</span>
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">Registration Closes</h3>
          </div>
        </li>

        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            <span>23rd September 2021</span>
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">Idea submission</h3>
          </div>
        </li>

        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            <span>27th September 2021</span>
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">
              Announcement of shortlisted teams
            </h3>
          </div>
        </li>
        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            <span>7th October 2021</span>
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">
              Round 1: Detailed Abstract Submission
            </h3>
          </div>
        </li>
        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            <span>14th October 2021</span>
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">
              Announcement of shortlisted teams
            </h3>
          </div>
        </li>
        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            {/* <span>14th October 2021</span> */}
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">
              End of phase 1 : Ideate
            </h3>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;