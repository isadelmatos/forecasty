import "./style.css";
import {ReactComponent as LocationIcon} from '../../assets/geo-alt.svg';

function LocationInput({setLocation}) {

    return (
        <div className="input">
            <div>
                <LocationIcon className="icon"/>
                <input
                    type="text" 
                    onKeyDown={(e) => {if(e.key === "Enter") {setLocation(e.target.value)}}}
                    placeholder="Enter your location"/>
            </div>
        </div>
    )
}

export default LocationInput;