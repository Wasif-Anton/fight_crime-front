import './App.css';
// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Question from './components/QuestionTask/Question';
import Status from './components/QuestionTask/Status';
import Task from './components/QuestionTask/Task';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="StatusPage">
        <Task/>
        <Status/>
      </div>
    </div>
  );
}

export default App;