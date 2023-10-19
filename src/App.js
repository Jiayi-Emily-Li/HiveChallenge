import './App.css';
import DropdownMenu from './DropdownMenu'

function App() {

  const base = ['Plain', 'Coconut', 'Strawberry', 'Blueberry'];

  const fruits = ['Strawberry', 'Blueberry', 'Banana', 'Mango', 'Raspberry'];

  const handleSelect = (selectedOptions) => {
    console.log('Selected:', selectedOptions);
  };

  return (
    <div className="App">
      <div className="dropdown-container">
        <div className="single-dropdown">
          <DropdownMenu base={base} onSelect={handleSelect}/>
        </div>
        <div className="multiple-dropdown">
          <DropdownMenu fruits={fruits} multiSelect={true} onSelect={handleSelect}/>
        </div>
      </div>
    </div>
  );
}

export default App;
