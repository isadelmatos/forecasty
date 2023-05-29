import "./style.css";
import {ReactComponent as LocationIcon} from '../../assets/geo-alt.svg';

function LocationInput({value, setLocation}) {
    return (
        <div className="input">
            <div>
                <LocationIcon className="icon"/>
                <input type="text" value={value} onChange={(e) => setLocation(e.target.value)} placeholder="Enter your location"/>
            </div>
        </div>
    )
}

export default LocationInput;