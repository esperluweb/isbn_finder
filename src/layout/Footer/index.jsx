import { Link } from "react-router-dom";
import "./index.scss"
// import footer from "../data/footer.json";

export default function Footer() {
  return (
      <footer className="footer">
        <div className="footer__column">
          <h2>Contact</h2>
          <Link className="esperluweb white" to="https://esperluweb.com/contact" target="_blank" rel="noreferrer">EsperluWeb</Link>
        </div>
        <div className="footer__column">
          <h2>Réseaux sociaux</h2>
          <p>
            <Link to="https://facebook.com/esperluweb" target="_blank" rel="noreferrer">Facebook</Link>
          </p>
          <p>
            <Link to="https://instagram.com/esperluweb" target="_blank" rel="noreferrer">Instagram</Link>
          </p>
          <p>
            <Link to="https://linkedin.com/in/boisseaugregoire" target="_blank" rel="noreferrer">Linkedin</Link>
          </p>
        </div>
        <div className="footer__column">
          <p>Développé avec <i className="fa-solid fa-heart"></i> et <i className="fa-brands fa-react"></i></p>
          <p>Lien du GitHub : <Link to="https://github.com/esperluweb/isbn_finder" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></Link></p>
        </div>
      </footer>
    );
  }