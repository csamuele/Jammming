import Track from "./Track";


function TrackTable({ isAdd, songArray, onAdd }) {

    const tracks = songArray.map(song => {
        return <Track track={song} isAdd={isAdd} onAdd={onAdd} key={song.id}/>
    })
    return (
        <table className="TrackTable">
            <thead>
                <tr>
                    <th className="Title">Title</th>
                    <th className="Album">Album</th>
                    <th className="TrackButton"></th>
                </tr>
            </thead>
            <tbody>
                {tracks}
            </tbody>
        </table>    
    )
}

export default TrackTable;