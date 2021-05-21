import React from "react";
import ProfileImage from "../assets/image-victor.jpg";
const Card = () => {
  return (
    <div className="container">
      <div className="patternCard"></div>
      <div className="cardBody">
        <img src={ProfileImage} alt="ProfileImage" className="profileImage" />
        <div className="heading">
          <h3>
            {" "}
            Victor Crest {" "} <span className="age">26</span>
          </h3>
        </div>
        <div className="city">
          <p>London</p>
        </div>
        <hr className="hr"/>
        <div className="socialMedia">
          <div>
            <div>
              <h3>80k</h3>
              <p>Followers</p>
            </div>
          </div>
          <div>
            <div>
              <h3>803k</h3>
              <p>Likes</p>
            </div>
          </div>
          <div>
            <div>
              <h3>1.4k</h3>
              <p>Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
