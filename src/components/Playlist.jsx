import React, { useState } from "react";
import TrackTable from "./TrackTable";
function Playlist({songArray, onRemove, onSave}) {
    const [playlistName, setPlaylistName] = useState("");
    const handleChange = (event) => {
    
        setPlaylistName(event.target.value)
    };
    const handleSave = (event) => {
        event.preventDefault();
        onSave(playlistName);
        setPlaylistName("");
    }

    return (
        <form className="Playlist" onSubmit={handleSave}>
            <input type="text" placeholder="Playlist Name" onChange={handleChange} required={true}/>
            <TrackTable isAdd={false} songArray={songArray} onRemove={onRemove}/>
            <input type="submit" value="Save to Spotify" />
        </form>
    )
};

export default Playlist;