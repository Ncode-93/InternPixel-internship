import React from "react";
import "./Features1.css"

const Features = () => {
  return (
    <div className="container">
      <h1 className="h1-text">Lightweight design, ready<br></br> to use for <span className="highlight">team<br></br> productivity</span>.</h1>
      <div className="card-container">
        <div className="card file-sharing">
          <h2 className="h2fileshare">File Sharing</h2>
          <p className="pfileshare">Securely share files within or outside your<br></br> organization, and control access, track edits,<br></br> and analyze the shared content stats.</p>
          <div className="file-sharing-img"></div>
        </div>
        <div className="card collect-files">
          <h2 className="h2collectfile">Collect Files</h2>
          <p className="pcollectfile">You can collect and receive files in a secure<br></br> environment, even if the other person doesn't<br></br> have a Techne's account.</p>
          <div className="collect-files-img"></div>
        </div>
      </div>
      <div className="card team-collaboration">
        <div className="text-and-image">
          <div className="text-content">
            <h2 className="h2teamcollab"><span className="spanteamcollab">Team collaboration</span> in<br></br> one simple place with<br></br> privacy come first.</h2>
            <p className="pteamcollab">Securely share and work together with Techne's<br></br> simple file storage and sharing, easy user<br></br> management, unlimited file size, password<br></br>protected links and more.</p>
            <div className="buttons">
              <button className="start-now">Start now</button>
              <button className="more-features">More features</button>
            </div>
          </div>
          <div className="team-collaboration-img"></div>
        </div>
      </div>
    </div>
  );
}
export default Features;
