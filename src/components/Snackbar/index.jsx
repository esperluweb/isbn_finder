import "./index.scss";
import PropTypes from 'prop-types';

export default function Snackbar({message}) {
    return (
        <div id="snackbar">{message}</div>
    )
}

Snackbar.propTypes = {
    message: PropTypes.string.isRequired
}