// jquery 代码
window.onload = function() {
  //YOUR JQUERY CODE
  console.log($(".content"));
  $(".content")[0].innerText = 123321
}


// react 代码
function ReactComponent(){
  const { useState} = window.React
  console.log($);
  const [count, setCount] = useState(0)
  const handleClick = ()=>{
    setCount(count + 1)
  }
  return <div>
    {count}
    <button onClick={handleClick}>+1</button>
  </div>
}
var domFunctionArea = document.querySelector("#react-area");
ReactDOM.render(React.createElement(ReactComponent), domFunctionArea);
