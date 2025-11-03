import './App.css';
import Header from './sections/Header';
import Stats from './sections/Stats';
import Tasks from './sections/Tasks';

function App() {
  return (
    <div className="container py-5">
      <Header />
      <Stats />
      <Tasks />
    </div>
  );
}

export default App;
