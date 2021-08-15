import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <HomePage></HomePage>;
  }
}

export default App;
