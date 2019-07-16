class VisibiliyToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toogleVisibility = this.toogleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    toogleVisibility() {
        this.setState((preState) => {   
                return {
                    visibility: !preState.visibility
                };
             });
    }
    render() {
    return (
        <div>
        <title>Indecision App</title>
        <h1>Visibility Toogle</h1>
        <button onClick={this.toogleVisibility}>
        {this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && (
            <div>
                <p>Hey ! These are some details </p>
            </div>
        )}
        </div>
        );  

    }
}


    ReactDOM.render(< VisibiliyToggle />, document.getElementById("app"));

