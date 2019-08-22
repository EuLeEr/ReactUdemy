class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options : ['Thing one', 'Thing two', 'Thing f']
    }
  }
  handleDeleteOptions() {
    
    this.setState(() => ({options: []})); 
    //   {
    //   return {
    //     options: []
    //   };
    // }); 
    
  }
  handleDeleteOption(optionToRemove) {
    console.log("delete option ",optionToRemove);
    this.setState((prevState) => ({
      options: prevState.options.filter(syagotakoe => optionToRemove != syagotakoe)
    })
         
     )
  }

  handlePick(){
    alert(this.state.options[0])
  }
  handleAddOption(option){
    if (!option) {
      return "Add appropriete value";
    }
      else if (this.state.options.indexOf(option)> -1) {
      return "Value already exist";
    }
    this.setState((PreState)=> ({options: PreState.options.concat(option)}));
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';


    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOption={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options 
        options={this.state.options} 
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}

        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOption}>
        What should I do?
      </button>
    </div>
  );  
}
// class Action extends React.Component {

//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePick} disabled={!this.props.hasOption}>
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => 
        <Option 
        key={option} 
        optionText={option}
        handleDeleteOption={props.handleDeleteOption} />)
      }
    </div>
  );
}
// class Options extends React.Component {

//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
//       </div>
//     );
//   }
// }
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e)=>{props.handleDeleteOption(props.optionText)}}>Delete</button>
    </div>
  );  
}
// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
   constructor(props) {
     super(props);
     this.handleAddOption = this.handleAddOption.bind(this);
     this.state = {
        error: undefined
        
     }
   }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({error}));
    
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>

          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
