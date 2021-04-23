import React from 'react'

function Search(props) {


    const {searchTerm ,setSearchTerm } = props;

    const handleChange = e => {
        setSearchTerm(e.target.value);
      };


    return (
        <div className= "search">
             <input
        type="text"
        placeholder="Search ..."
        value={searchTerm}
        onChange={handleChange}
      />
        </div>
    )
}

export default Search
