import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [search,setSearch] = useState('');
    const navigate=useNavigate();
    
    const handleClick=(e)=>{
        e.preventDefault();
        const movie=search;
        setSearch('');
        navigate(`/search1/${movie}`)
    }

  return (
    
    <div className='bg-dark border-top py-3 d-flex align-center justify-content-center'>
        <form class="d-flex" role="search" style={{width:'70%'}}>
            <input class="form-control me-2"  type="search" placeholder="Search By Movie Name" name='search' value={search} onChange={e=>setSearch(e.target.value)} aria-label="Search"/>
            <button class="btn btn-outline-warning" onClick={handleClick}>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
