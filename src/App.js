import './App.css';
import SingleDropdownMenu from './SingleDropdownMenu'
import MultiDropdownMenu from './MultiDropdownMenu'

function App() {

  const bases = ['Plain', 'Coconut', 'Strawberry', 'Blueberry'];

  const fruits = ['Strawberry', 'Blueberry', 'Banana', 'Mango', 'Raspberry'];

  const handleSelect = (selectedOptions) => {
    console.log('Selected:', selectedOptions);
  };

  return (
    <div className="App">
      <div className="dropdown-container">
        <div className="single-dropdown">
          <SingleDropdownMenu bases={bases} onSelect={handleSelect}/>
        </div>
        <div className="multiple-dropdown">
          <MultiDropdownMenu fruits={fruits} onSelect={handleSelect}/>
        </div>
      </div>
    </div>
  );
}

export default App;
