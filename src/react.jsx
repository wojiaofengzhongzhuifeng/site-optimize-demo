import {useState} from 'react'

// react 代码
function ReactComponent(){
  const [count, setCount] = useState(11)
  const handleClick = ()=>{
    setCount(count + 1)
  }
  return <div>
    {count}
    <button onClick={handleClick}>+1</button>
  </div>
}

console.log(123);
var domFunctionArea = document.querySelector("#react-area");
ReactDOM.render(React.createElement(ReactComponent), domFunctionArea);
