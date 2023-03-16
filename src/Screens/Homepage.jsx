import "./Homepage.css";
//import MyComponent from "../Components/MyComponent";
import Card from "../Components/Card";
import Nav from "../Components/Navigation";
import Button from "../Components/Button";

function Homepage() {
  let buttonTitle = "Juan";

  const submit = (title) => {
    alert(title);
  };

  return (
    <div className="Homepage">
      <Nav />

      <Button title={`button of ${buttonTitle}`} clickHandler={submit}></Button>

      <Card title="My title">
        <div>This is the body</div>
        <div>This is the footer</div>
      </Card>
    </div>
  );
}

export default Homepage;
