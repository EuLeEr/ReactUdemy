console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
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

const renderCounterApp = () => {
  const templateTwo = (
    <div>
    <h1> Count: {count} </h1>
    <button onClick = {addon}>+1</button>
    <button onClick={() => {console.log("minus one"); count--; renderCounterApp()}}>-1</button>
    <button onClick={reset}>reset</button>
    </div>
  )
  const appRoot = document.getElementById('app');
  
  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();