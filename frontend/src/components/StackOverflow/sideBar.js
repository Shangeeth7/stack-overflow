import React from "react";
import "./css/sidebar.css";
import { Public, Stars, Work } from "@mui/icons-material";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <a href="/">Home</a>

            {/* <a href="/">Home</a> */}
          </div>
          <div className="sidebar-option">
            <p>PUBLIC</p>
            <div className="link">
              <div className="link-tag">
                <Public />
                <a href="/">Question</a>

                {/* <a href="/">Question</a> */}
              </div>

              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>COLLECTIVES</p>
            <div className="link">
              <div className="link-tag">
                <Stars />
                <a href="/">Explore Collectives</a>

                {/* <a href="/">Explore Collectives</a> */}
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>FIND A JOB</p>
            <div className="link">
              <a
                style={{
                  margin: "10px 20px",
                }}
                to="/"
              >
                Jobs
              </a>
              {/* <a
              style={{
                margin: "10px 20px",
              }}
              href="/"
            >
              Jobs
            </a> */}
              {/* <a
              style={{
                marginLeft: "20px",
              }}
              href="/"
            >
              Companies
            </a> */}
              <a
                style={{
                  marginLeft: "20px",
                }}
                to="/"
              >
                Companies
              </a>
            </div>
          </div>
          <div className="sidebar-option">
            <p>TEAMS</p>
            <div className="link-tag">
              <Work />
              <a href="/">Companies</a>
              {/* <a href="/">Companies</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
