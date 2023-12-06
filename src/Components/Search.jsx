import React from 'react';
import { useState } from 'react';
import { data } from '../Data';

function Search() {

    const [search, setSearch] = useState('')
    return (
        <div>

            <form action="">
                <input type="search" placeholder='Search' onChange={(event) => setSearch(event.target.value)} />
            </form>

            <div >
                {data.filter((item) => {
                    return search.toLowerCase() === '' ? item
                        : item.name.toLowerCase().includes(search) 
                        
                })}
                

                {/* .map((item) => (
                    <div key={item}>
                        <h2>{item.name}</h2>
                        <p>{item.body}</p>
                        <p>{item.state}</p>
                    </div>
                ))} */}
            </div>

        </div>
    );
}

export default Search;
