console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};


const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  //console.log("Перед " + option.length + " добавкой");
  if (option) {
    app.options.push(option);
    e.target.elements.option.value =  "";
  }
  renderArrayOption();
}

const RemoveAll = (e) =>{
  e.preventDefault();
  app.options = [];
  renderArrayOption();
}
const appRoot = document.getElementById('app');

const renderArrayOption = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={RemoveAll}>Remove all</button>
      <ol>
      {
        app.options.map((Aoption) =>  <li key={Aoption}>{Aoption}</li> )
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template,appRoot);
}
renderArrayOption();