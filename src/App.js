import './App.css';
import SingleDropdownMenu from './SingleDropdownMenu'
import MultiDropdownMenu from './MultiDropdownMenu'

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
          <SingleDropdownMenu base={base} onSelect={handleSelect}/>
        </div>
        <div className="multiple-dropdown">
          <MultiDropdownMenu fruits={fruits} onSelect={handleSelect}/>
        </div>
      </div>
    </div>
  );
}

export default App;
