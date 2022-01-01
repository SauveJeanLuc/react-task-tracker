import React from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <Header />
      <Tasks />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1> Hello From a Class</h1>
//   }
// }

export default App;
