import Track from "./Track";


function TrackTable({ AddRemove, songArray }) {

    const tracks = songArray.map(song => {
        return <Track Title={song.title} Artist={song.artist} Album={song.album} AddRemove={AddRemove}/>
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