import { useState } from "react";

import Snackbar from "../Snackbar";
import "./index.scss";

import { getBookByISBN } from "../../services/openLibraryApi"
import { Link } from "react-router-dom";

export default function Form() {
    function showSnackbar() {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
      
        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 10000);
    } 

    async function submitForm(e)
    {
        e.preventDefault();
        let isbn = document.querySelector("#isbn");
        console.log(isbn.value)
        if(isbn.value.length!=10)
        {
            isbn.focus();
            return alert("Le format du numéro ISBN n'est pas bon !")
        }
        let res = await getBookByISBN(isbn.value)
        console.log(res)
        if(!res["ISBN:"+isbn.value])
        {
            setImages([])
        }
        // let url = res["ISBN:"+isbn.value].info_url;
        try{
            let image = res["ISBN:"+isbn.value].thumbnail_url;
            let image_s = image;
            let image_m = image.slice(0, -5) + "M.jpg";
            let image_l = image.slice(0, -5) + "L.jpg";
    
            setImages([{name:"Image S", url:image_s}, {name:"Image M", url:image_m}, {name:"Image L", url:image_l}]);
        }
        catch(e)
        {
            setImages([])
            console.error("Pas d'infos sur ce livre - ISBN : "+ isbn.value )
            console.error(e)
        }
    }

    const [images, setImages] = useState([]);

    return (
        <section className="twocol">
            <div className="form">
                <h2>Entrez votre ISBN</h2>
                <form id="form" action="#" onSubmit={e => submitForm(e)}>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required id="isbn" name="isbn" minLength="10" maxLength="10" onFocus={showSnackbar}/>
                            <div className="underline"></div>
                            <label htmlFor="isbn">ISBN</label>
                        </div>
                    </div>
                    <div className="form-row submit-btn">
                        <a className="btn" type="submit" onClick={e => submitForm(e)}>Envoyer</a>
                    </div>
                </form>
                <Snackbar message="ISBN de la forme : 0201558025" />
            </div>
            <div className="result">
                <div className="buttons">
                    {
                        images.length ? images.map((i, index) => <Link to={i.url} key={index} className="btn" target="_blank" rel="noreferrer">{i.name}</Link>) : <p>Pas d&apos;informations sur ce livre 😟</p>
                    }
                </div>
            </div>
        </section>
    )
}