import "./nav.css";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";
import { IoCloudDoneSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
        <FaHome />
      </a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
        <FaUserAlt />
      </a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>
        <BsBookmarkStarFill />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}>
        <IoCloudDoneSharp />
      </a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
