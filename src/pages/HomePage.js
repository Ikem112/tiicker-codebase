import hero_1 from "../image_folder/home-hero-1-img.png";
import hero_2 from "../image_folder/home-hero-2-img.png";
import hero_3 from "../image_folder/home-hero-3-img.png";
import work from "../image_folder/work-img.png";
import collaborate from "../image_folder/collaborate-img.png";
import succeed from "../image_folder/succeed-img.png";
import tiicker_logo_pic from "../image_folder/tiicker-logo-pic.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandNav from "../components/LandNav";
import UserSelectionModal from "./UserSelectionModal";
import { useEffect, useState, useRef } from "react";

const HomePage = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const dialogRef = useRef(null);

  return (
    <div className="container">
      <div className="overlap">
        <LandNav dialogRef={dialogRef} />
        <div className="home-hero-1">
          <div className="left-side">
            <h1 id="h1-text">
              A comprehensive, all-inclusive remedy that simplifies your
              workflow and affords you with all the necessary tools to execute
              your tasks !
            </h1>
            <p>Let us speak in your stead...</p>
            <button
              className="openModalBtn"
              onClick={() => dialogRef.current.showModal()}
            >
              Sign Up Now!!!
            </button>
          </div>
          <div className="right-side">
            <div className="hero_1_img_cont">
              <img className="hero_1_img" src={hero_1} alt="Desk_img" />
            </div>
          </div>
        </div>
      </div>
      <div className="home-hero-2">
        <div className="left-side">
          <div className="hero-2-img-cont">
            <img className="hero-2-img" src={hero_2} alt="hero_2" />
          </div>
        </div>
        <div className="right-side">
          <h1 id="h1-text">
            Streamlining and systematizing tasks has never been simpler or more
            effortless, with the aid of our intuitive and user-friendly platform
          </h1>
          <p>Your one stop site for project management...</p>
        </div>
      </div>
      <div className="home-hero-3">
        <div className="left-side">
          <h1 id="h1-text">
            Supervise and monitor the current progress of team members at all
            times and in any location with ease.
          </h1>
          <p>A great tool for easy collaboration...</p>
        </div>
        <div className="right-side">
          <div className="hero_3_img_cont">
            <img className="hero_3_img" src={hero_3} alt="hero 3" />
          </div>
        </div>
      </div>
      <div className="home-hero-4">
        <div className="small-picture-cont">
          <div className="work-img-cont">
            <img className="work-img" src={work} alt="hero 3" />
          </div>
          <div className="collaborate-img-cont">
            <img className="collaborate-img" src={collaborate} alt="hero 3" />
          </div>
          <div className="succeed-img-cont">
            <img className="succeed-img" src={succeed} alt="hero 3" />
          </div>
        </div>
      </div>
      <footer>
        <div className="faq-cont">
          <a href="#">
            <Link to="/faqs">FAQ's</Link>
          </a>
        </div>
        <div className="footer-logo-cont">
          <img className="tiicker_logo_pic" src={tiicker_logo_pic} alt="Logo" />
        </div>
        <div id="special-cont" className="footer-info-cont">
          <span id="phone_number">+2349075591953</span>
          <span id="address">H2k Northpointe Estate, Lagos, Nigeria</span>
          <span id="email-address">info@tiicker.com</span>
        </div>
      </footer>
      <UserSelectionModal dialogRef={dialogRef} />
    </div>
  );
};

export default HomePage;
