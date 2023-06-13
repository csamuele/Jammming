import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



function Track(props) {
    const track = props.track;
    const handleAdd = (event) => {
        props.onAdd(track);
    }
    const handleRemove = (event) => {
        props.onRemove(track);
    }
    const AddRemove = () => {
        if(props.isAdd) {
            return <button onClick={handleAdd}><FontAwesomeIcon icon={faPlus}/></button> 
        } else {
            return <button onClick={handleRemove}><FontAwesomeIcon icon={faMinus} /></button>
        }
    }
    return (
        <tr>
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