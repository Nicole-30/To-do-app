import React from 'react';

function Props({nic,title,nice,handleDelete}) {
    // let nic=props.nic
    // let title=props.title
    
    
  return (
    <div>
         <h2>{title}</h2> 
        {nic.map((blogs) => ( 

                <div key={blogs.id}>
                    <h2>{blogs.title}</h2>
                    <p>wriiten by{blogs.author} in the year{blogs.year} in {blogs.country}</p>
                    <button onClick={()=>handleDelete(blogs.id)}>Delete</button>

                </div>
            ))}
    </div>
  );
}

export default Props;
