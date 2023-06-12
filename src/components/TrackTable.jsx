import Track from "./Track";

function TrackTable() {
    return (
        <table className="TrackTable">
            <tr>
                <th className="Title">Title</th>
                <th className="Album">Album</th>
                <th className="TrackButton"></th>
            </tr>
            <Track/>
        </table>    
    )
}

export default TrackTable;