import React from "react";



function Track({Title, Artist, Album, id, AddRemove}) {
    return (
        <tr key={id}>
            <td className="Artist">
                <p><strong>{Title}</strong></p>
                <p>{Artist}</p>
            </td>
            <td className="Album">{Album}</td>
            <td className="TrackButton">{AddRemove}</td>
        </tr>
    )
};

export default Track;