import Track from "./Track";


function TrackTable({ AddRemove, songArray }) {

    const tracks = songArray.map(song => {
        return <Track track={song} addRemove={AddRemove}/>
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