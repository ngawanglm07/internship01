import React from 'react'
import { useState } from 'react';

function SearchForm({onSearch}) {
    const [searchStr , setSearchStr] = useState();

    const onSearchInputChange=(ev)=>{
      setSearchStr(ev.target.value)
    }
  
    const onSubmit = ev =>{
      ev.preventDefault();
      console.log(searchStr)
      const options = {
        q : searchStr
      }
      onSearch(options)
    }
  
    return (
      <div>
        <form onSubmit={onSubmit}>
        <input placeholder='enter beer' type='text' value={searchStr} onChange={onSearchInputChange}/> 
        <button type='submit'>Search</button>
        </form>
      </div>
    )
  
}

export default SearchForm