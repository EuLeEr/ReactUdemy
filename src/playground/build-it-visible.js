let Caption = "Show detail";
const ChangeCaption = ((e) => {
    if (Caption == "Show detail") {Caption = "Hide detail"}
    else Caption = "Show detail";
    UpAndTiger();
})

const UpAndTiger = () => {
    const Template = (
        <div>
        <title>Indecision App</title>
        <h1>Visibility Toogle</h1>
        <button onClick={ChangeCaption}>{Caption}</button>
        </div>
        );
    ReactDOM.render(Template, Approot);  
    };

const Approot = document.getElementById("app");
UpAndTiger();
