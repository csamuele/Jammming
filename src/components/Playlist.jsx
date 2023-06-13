import React from "react";
import TrackTable from "./TrackTable";
function Playlist({songArray}) {
    return (
        <form className="Playlist">
            <input type="text" placeholder="Playlist Name"/>
            <TrackTable isAdd={false} songArray={songArray}/>
            <input type="submit" value="Save to Spotify"/>
        </form>
    )
};

export default Playlist;