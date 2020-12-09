import './style.css';
import {Link} from "react-router-dom";

function Job(props) {
    return (
        <div className="job">
            <p>{props.company} - {props.type}</p>
            <h3>{props.title}</h3>
            <p>{props.location}</p>
            <Link to={props.id} >View</Link>
        </div>
    )
}

export default Job