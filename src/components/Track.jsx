import React from "react";



function Track(props) {
    const track = props.track;
    return (
        <tr key={track.id}>
            <td className="Artist">
                <p><strong>{track.title}</strong></p>
                <p>{track.artist}</p>
            </td>
            <td className="Album">{track.album}</td>
            <td className="TrackButton">{props.addRemove}</td>
        </tr>
    )
};

export default Track;