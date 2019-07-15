let count = 0;
const reset = () => {
  console.log("reset");
  count = 0;
  renderCounterApp()
}
const addon = () => {
  count++;
  renderCounterApp()
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
    <h1> Count: {count} </h1>
    <button onClick = {addon}>+1</button>
    <button onClick={() => {console.log("minus one"); count--; renderCounterApp()}}>-1</button>
    <button onClick={reset}>reset</button>
    </div>
  )
 
  
  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();