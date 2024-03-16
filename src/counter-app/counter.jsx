import { useStore } from "./store"

export function Counter() {

  const {count, incrementCount, decrementCount} = useStore(state => state)
  return <div style={{display: "flex", flexDirection:'column', alignItems:'center'}}>
    <Child/>
    <button onClick={incrementCount}>Increment</button>
    <button onClick={decrementCount}>Decrement</button>

  </div>
}

function Child(){
  const count = useStore(state => state.count)
  return <h1>Count: {count}</h1>
  
}

