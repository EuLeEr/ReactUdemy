class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
          count: 0
        };
    }
    handleAddOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1
        };
      });
    
}
    handleMinusOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1
        };
      });
}
    handleReset() {
      this.setState((prevState) => {
        return {
          count: 0
        };
      });
    }
    componentDidMount() {
    
    try {
        const count = parseInt(localStorage.getItem('count'));

        if (!isNaN(count) && (count)) {
        this.setState( () => ({count : count}));
      }
        //if (!isNaN(count) && (count)) this.state.count = count; 
      } catch (error) {
        
      }
    }
    componentDidUpdate(prevProps,prevState){

      if (prevState.count != this.state.count){
      localStorage.setItem('count', this.state.count); 
    }     
    }
    componentWillUnmount() {
      console.log("umount");
      localStorage.setItem('count', this.state.count);
    }
    render() {
        return (        
        <div>
           <h1>Count: {this.state.count}</h1>
           <button onClick={this.handleAddOne}>+1</button>
           <button onClick={this.handleMinusOne}>-1</button>
           <button onClick={this.handleReset}>reset</button>
        </div>
        );
    }

}

ReactDOM.render(<Counter  />, document.getElementById('app'));
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