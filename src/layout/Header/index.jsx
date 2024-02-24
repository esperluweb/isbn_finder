import { Link } from "react-router-dom";
import "./index.scss";

import logo from "/images/isbn_logo.png";
// import header from "../data/header.json";

export default function Header() {

  return (
    <header>
      <img src={logo} alt="logo isbn" />
      <Link className="esperluweb" to="https://esperluweb.com" target="_blank" rel="noreferrer">par EsperluWeb</Link>
    </header>
    );
  }