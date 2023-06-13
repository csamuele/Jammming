import React, { useState } from "react";

function SearchBar({onSearch}) {
    const [searchValue, setSearchValue] = useState("");
    const handleChange = (event) => {
        setSearchValue(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchValue);
    }

    
    return (
        <form className="SearchBar" onSubmit={handleSubmit}>
            <input required={true} type="text" onChange={handleChange}></input>
            <input type="submit" value="search"></input>
        </form>
    )
};

export default SearchBar;