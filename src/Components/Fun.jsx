import { useState } from "react";
const Fun = () => {
const [count,setCount]=useState(0)
const Increment = () => {
    setCount(count + 1)
}
const Decrement = () => {
    setCount(count - 1)
}
const Square = () => {
    setCount(count * count)
}
const Reset = () => {
    setCount(0)
}
return(
<>
<h1>Number is {count}</h1>
<button onClick={()=>Increment()}>Increment </button>
<button onClick={()=>Decrement()}>Decrement</button>
<button onClick={()=>Square()}>Square</button>
<button onClick={()=>Reset()}>Reset value</button>
</>
);
}

export default Fun