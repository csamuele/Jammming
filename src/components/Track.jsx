import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



function Track(props) {
    const track = props.track;
    const AddRemove = () => {
        if(props.isAdd) {
            return <button><FontAwesomeIcon icon={faPlus}/></button> 
        } else {
            return <button><FontAwesomeIcon icon={faMinus} /></button>
        }
    }
    return (
        <tr key={track.id}>
            <td className="Artist">
                <p><strong>{track.title}</strong></p>
                <p>{track.artist}</p>
            </td>
            <td className="Album">{track.album}</td>
            <td className="TrackButton">{AddRemove()}</td>
        </tr>
    )
};

export default Track;