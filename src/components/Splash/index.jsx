import { Link } from "react-router-dom";

import "./index.scss";

export default function Splash() {
    return (
        <section className="splash">
            <h1>ISBN Finder</h1>
            <p>Un petit outil pour récupérer les informations d&apos;un livre à partir de son numéro ISBN !</p>
            <div className="buttons">
                <Link className="btn" to="https://openlibrary.org/">API Open Library</Link>
                <Link className="btn" to="https://esperluweb.com">EsperluWeb</Link>
            </div>
        </section>
    )
}