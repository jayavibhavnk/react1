import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import DemoForm from './components/DemoForm';
import SimpleInterest from './components/SimpleInterest';
import Milestokm from './components/Milestokm';

function App() {
  return (
    <div className="App">
      <Header />
      <img src='https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/a2e4e8ed-e758-47c9-b981-a1700a7ccb0a' height='100' ></img>
      <Content />
      <DemoForm />
      <SimpleInterest />
      <Milestokm />

    </div >
  );
}

export default App;
