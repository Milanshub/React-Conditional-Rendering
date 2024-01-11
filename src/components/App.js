import Form from "./Form";


// Ternary  below 
// import Login from "./Login";
//var isLoggedIn = true; 
// isLoggedIn ? <h1>Hello</h1> : <Login />

//Operator below. && doesn't mean that condition or the other, its activated when first condition is met. 
// const currentTime = new Date().getHours();
// currentTime > 12 && <h1>What are you doing so late?</h1>

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
     <Form 
     isRegistered={userIsRegistered}
     />
    </div>
  );
}

export default App;

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.