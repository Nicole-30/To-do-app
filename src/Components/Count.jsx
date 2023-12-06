import React, { useState, useEffect } from 'react';

function Count() {
    // const [count, setCount]= useState(0)
    // const handleCount = ()=>{
    //     setCount (count-5 )
    const [count, setCount] = useState(0);
    useEffect(() => {
         let timer = setTimeout(() => {
            setCount((count) => count + 1);
         }, 1000);

         return () => clearTimeout(timer)
        // console.log('component mounted');
    },[]);
    return <h1>I've rendered {count}times!</h1>;
    
}


//   return (
//     <div>
//         <p>counting.... {count}</p>
//       <button onClick={handleCount}>Count</button>
//     </div>
//   );
// }

export default Count;
