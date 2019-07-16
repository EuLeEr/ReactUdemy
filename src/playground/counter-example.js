class Counter extends React.component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

    }
    handleAddOne() {
//alert('Add');
console.log("handleReset");
}
    handleMinusOne() {
//alert('Minus');
console.log("handleReset");
}
    handleReset() {

        console.log("handleReset");
 //alert('reset');
    }
    render() {
        return (        
        <div>
           <h1>Count: </h1>
           <button onClick={this.handleAddOne}>+1</button>
           <button onClick={this.handleMinusOne}>-1</button>
           <button onClick={this.handleReset}>reset</button>
        </div>
        );
    }

}

ReactDOM.render(<Counter />, document.getElementById('app'));
// let count = 0;
// const reset = () => {
//   console.log("reset");
//   count = 0;
//   renderCounterApp()
// }
// const addon = () => {
//   count++;
//   renderCounterApp()
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//     <h1> Count: {count} </h1>
//     <button onClick = {addon}>+1</button>
//     <button onClick={() => {console.log("minus one"); count--; renderCounterApp()}}>-1</button>
//     <button onClick={reset}>reset</button>
//     </div>
//   )
 
  
//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();