import TrackTable from "./TrackTable";

function SearchResults({songArray, onAdd}) {

    return (
        <div className="SearchResults">
        <h2>Results</h2>
        <TrackTable isAdd={true} songArray={songArray} onAdd={onAdd}/>
    </div>
    )
};

export default SearchResults;