import React, { useState } from 'react';

function About() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [ name ] = useState("Saidur");

  return (
    <div>
       <p>Your Name is : {name}</p> 
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default About;