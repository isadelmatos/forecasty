import "./style.css";
import {ReactComponent as LocationIcon} from '../../assets/geo-alt.svg';

function LocationInput() {
    return (
        <div className="input">
            <div>
                <LocationIcon className="icon"/>
                <input type="text" value="Brasil, São Paulo" />
            </div>
        </div>
    )
}

export default LocationInput;