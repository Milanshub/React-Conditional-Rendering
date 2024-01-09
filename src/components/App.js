import Login from "./Login";

var isLoggedIn = false; 

// Ternary  below 
// isLoggedIn ? <h1>Hello</h1> : <Login />

//Operator below
// const currentTime = new Date().getHours();
// currentTime > 12 && <h1>What are you doing so late</h1>

// if isLoggedin "user loged in" render Hello, otherwise render Login component 
function App() {
  return (
    <div className="container">
     {isLoggedIn ? <h1>Hello</h1> : <Login />} 
    </div>
  );
}

export default App;