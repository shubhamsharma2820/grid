import React, { Component } from 'react'
import './App.css'
import NameList from './Components.js/NameList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        {/* <Hello />
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />
        <Message message='Welcome Visitor' />
        <Message message='Welcome Guest' />
        <Counter />
        <FunctionClick />
        <ClassClick />
        <EventBind />
        <ParentComponent />
        <UserGreeting /> */}
        <NameList />
      </div>
    )
  }
}

export default App