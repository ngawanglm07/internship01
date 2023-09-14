import React from 'react'
import SearchForm from '../components/searchForm'


function Home() {
return(
    <div>
        <h1>home page is being rendered</h1>
        <SearchForm onSearch={onSearch}/>
    </div>
)

}

export default Home
