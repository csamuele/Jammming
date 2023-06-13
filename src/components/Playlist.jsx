import React from "react";
import TrackTable from "./TrackTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
function Playlist({songArray}) {
    return (
        <form className="Playlist">
            <input type="text" placeholder="Playlist Name"/>
            <TrackTable AddRemove={<FontAwesomeIcon icon={faMinus}/>} songArray={songArray}/>
            <input type="submit" value="Save to Spotify"/>
        </form>
    )
};

export default Playlist;