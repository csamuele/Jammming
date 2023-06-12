
import SearchBar from '../components/SearchBar';
import Playlist from '../components/Playlist';
import SearchResults from '../components/SearchResults';

function Tracklist() {
    return (
        <div className='Tracklist'>
            <SearchBar />
            <div className='lists-container'>
                <SearchResults/>
                <Playlist/>
            </div>
        </div>
    )
}

export default Tracklist;