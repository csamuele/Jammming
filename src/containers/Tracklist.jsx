
import SearchBar from '../components/SearchBar';
import Playlist from '../components/Playlist';
import SearchResults from '../components/SearchResults';

function Tracklist() {
    const results = [
        {
            title: "100 Years",
            artist: "Five For Fighting",
            album: "The Battle for Everything",
            id: 1
        },
        {
            title: "1957",
            artist: "Milo Greene",
            album: "Milo Greene",
            id: 2
        },
        {
            title: "Medicine for Melancholy",
            artist: "Rivers Cuomo",
            album: "Medicine for Melancholy",
            id: 3
        }
    ]
    const playlist = [
        {
            title: "All My Loving",
            artist: "The Welll Pennies",
            album: "Covers",
            id: 4
        }
    ]
    return (
        <div className='Tracklist'>
            <SearchBar />
            <div className='lists-container'>
                <SearchResults songArray={results}/>
                <Playlist songArray={playlist}/>
            </div>
        </div>
    )
}

export default Tracklist;