import logo from './logo.svg';
import './App.css';

let name = "everyone";
function App() {
 return (
  <>
    <nav>
      <li>home</li>
      <li>
        about
      </li>
      <li>
        lets start
      </li>
    </nav>
    <div className="container">
      <h1>hello {name}</h1>
    </div>
    </>
  );
}

export default App;
