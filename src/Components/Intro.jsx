import React from 'react';
import { useState } from 'react';

// function Home() {
//     let name = "nicole"
//     const handleClick= () =>{
//      let newName = 'salome'
//      console.log(newName);
//     }

//     this.handleClick = this.handleClick.bind(this);
//   return (

//     <div>
//     <p>my name is {name}</p>  
//     <button onClick={handleClick}>Click Me</button>
//     </div>
//   );

// }

// export default Home;




function Home() {
    const [name, setName] = useState("Nicole");
    const [age, setAge] = useState (19)
    const handleClick = () => {
        setName('Salome')
        setAge (22)
    }
    

    return (
        <div>
            <p>My name is {name} and i am {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;

