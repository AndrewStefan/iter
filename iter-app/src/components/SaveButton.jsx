import { Link } from 'react-router';

export default function SaveButton({ linkTo, linkClassName, buttonClassName, text }) {
    return(
        <Link to={linkTo} className={linkClassName}>
            <button className={buttonClassName}> {text} </button>
        </Link>
    )
}