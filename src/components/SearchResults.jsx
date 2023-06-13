import TrackTable from "./TrackTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function SearchResults({songArray}) {

    return (
        <div className="SearchResults">
        <h2>Results</h2>
        <TrackTable AddRemove={<FontAwesomeIcon icon={faPlus}/>} songArray={songArray}/>
    </div>
    )
};

export default SearchResults;