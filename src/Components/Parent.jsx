import React from 'react';
import '../Parent.css'

function Parent({title,dis}) {


    return (
        <div className='mapping'>
            <h3>{title}</h3>
            {dis.map((det) => (

                <div key={det.id} >
                    <h2>{det.title}</h2>
                    <h4>Written by {det.name} in the {det.state}</h4>
                    <p>{det.body}</p>
                </div >


            ))}
        </div>
    );
}

export default Parent;
