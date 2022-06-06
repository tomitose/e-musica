import './App.css';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
       <ItemListContainer titulo="Bienvenidos a la App"/>
       {/* <ItemCount initial={1}/> */}
      </header>
    </div>
  );
}

export default App;
