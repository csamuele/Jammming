import Track from "./Track";


function TrackTable({ isAdd, songArray }) {

    const tracks = songArray.map(song => {
        return <Track track={song} isAdd={isAdd}/>
    })
    return (
        <table className="TrackTable">
            <tr>
                <th className="Title">Title</th>
                <th className="Album">Album</th>
                <th className="TrackButton"></th>
            </tr>
            {tracks}
        </table>    
    )
}

export default TrackTable;