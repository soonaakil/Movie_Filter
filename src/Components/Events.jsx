import { useState } from 'react'

const Events = () => {
  const [count, setCount] = useState(0)

  const handleClick = ()=> {
    alert(`You click me, Next time don't click me. I warn you.`)
  }
  const handleClick2 = ()=> {
    alert(`Your curser over me, Next time don't over me. I warn you.`)
  }
  const paraClick = (k)=> {
    alert(k+10)
  }
  const style = {
    border: '1px solid #333',
    backgroundColor: 'yellow',
    color: '#333',
    margin: '0 2px'
  }
  const container = {
    backgroundColor: '#ccc',
    padding: '20px',
    borderRadius: '10px',
    marginLeft: '50px'
  }

  let counter = 0;

  const increaseBy = () => {
    counter++;
    console.log("Counter: ", counter);
  }
  const decreaseBy = () => {
    counter--;
    console.log("Counter: ", counter);
  }
  const increaseBy1 = () => {
    setCount(count + 1)
    console.log("Count: ", count);
  }
  const decreaseBy1 = () => {
    setCount(count - 1)
    console.log("Count: ", count);
  }

  return (
    <>
       <h1>We are learning Events.</h1>
       <div style={container}>
            <div className="Click">
                <button style={style} onClick={handleClick}>Click Here</button>
                <button style={style} onMouseOver={handleClick2}>Mouse Over Here</button>
                <button style={style} onClick={()=>paraClick(9)}>Click with Para</button>
            </div>
            {/* ============================================ */}
            <div className="JS-Counter">
                <p>{counter}</p>
                <button style={style} onClick={increaseBy}>IncreaseBy</button>
                <button style={style} onClick={decreaseBy}>DecreaseBy</button>
            </div>
            {/* ============================================ */}
            <div className="React-Counter">
                <p>{count}</p>
                <button style={style} onClick={increaseBy1}>By1-Inc</button>
                <button style={style} onClick={decreaseBy1}>By1-Dec</button>
            </div>
       </div>
    </>
  )
}

export default Events
