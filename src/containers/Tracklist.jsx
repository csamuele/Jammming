
import SearchBar from '../components/SearchBar';
import Playlist from '../components/Playlist';
import SearchResults from '../components/SearchResults';
import { useState } from 'react';
import Spotify from '../util/Spotify';



// const results = [
//     {
//         title: "100 Years",
//         artist: "Five For Fighting",
//         album: "The Battle for Everything",
//         id: 1
//     },
//     {
//         title: "1957",
//         artist: "Milo Greene",
//         album: "Milo Greene",
//         id: 2
//     },
//     {
//         title: "Medicine for Melancholy",
//         artist: "Rivers Cuomo",
//         album: "Medicine for Melancholy",
//         id: 3
//     }
// ]
const playlist = [
    {
        title: "All My Loving",
        artist: "The Welll Pennies",
        album: "Covers",
        id: 4
    }
]

function Tracklist() {
    const [resultTracks, setResultTracks] = useState([]);
    const [playlistTracks, setPlaylistTracks] = useState(playlist);

    const handleAdd = (track) => {
        if (!playlistTracks.some(playlistTrack => track.id === playlistTrack.id)) {
            setPlaylistTracks([...playlistTracks, track]);
        };
    };

    const handleRemove = (track) => {
        setPlaylistTracks(playlistTracks.filter(playlistTrack => track.id !== playlistTrack.id))
    }
    const handleSearch = async (term) => {
        const results = await Spotify.search(term);
        setResultTracks(results);
    }

    return (
        <div className='Tracklist'>
            <SearchBar onSearch={handleSearch}/>
            <div className='lists-container'>
                <SearchResults songArray={resultTracks} onAdd={handleAdd}/>
                <Playlist songArray={playlistTracks} onRemove={handleRemove}/>
            </div>
        </div>
    )
}

export default Tracklist;