import Snackbar from "../Snackbar";
import "./index.scss";

export default function Form() {
    function showSnackbar() {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
      
        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 10000);
    } 

    function submitForm(e)
    {
        e.preventDefault();
        let isbn = document.querySelector("#isbn");
        if(isbn.value.length!=10)
        {
            isbn.focus();
            return alert("Le format du numéro ISBN n'est pas bon !")
        }
        
    }

    return (
        <section className="form">
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
        </section>
    )
}