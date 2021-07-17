import "./Components/Contact"
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
      name="plopinette"
      avatar="https://randomuser.me/api/portraits/women/69.jpg"
      statusOnline
      online
      />

      <Contact
      name="Gloria"
      avatar="https://randomuser.me/api/portraits/women/79.jpg"
      />

      <Contact
      name="Richard"
      avatar="https://randomuser.me/api/portraits/men/57.jpg"
      online
      />
    </div>    
  );
}

export default App;
