import './App.css';
import Footer from './assets/component/Footer';
import SearchAppBar from './assets/component/Header';
import Jumbotroncard from './assets/component/Section';


function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <Jumbotroncard/>
      <Footer/>
    </div>
  );
}

export default App;
