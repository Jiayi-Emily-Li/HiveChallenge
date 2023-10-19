import './App.css';
import SingleDropdownMenu from './SingleDropdownMenu'
import MultiDropdownMenu from './MultiDropdownMenu'

function App() {

  const bases = ['Plain Yogurt', 'Coconut Yogurt', 'Strawberry Yogurt', 'Blueberry Yogurt'];

  const fruits = ['Strawberry', 'Blueberry', 'Banana', 'Mango', 'Raspberry', 'Pineapple', 'Orange', 'Kiwi'];

  const selectCheck = (selectedOptions) => {
    console.log('Selected:', selectedOptions);
  };

  return (
    <div className="App">
      <div className="dropdown-container">
        <div className="single-dropdown">
          <SingleDropdownMenu bases={bases} selected={selectCheck}/>
        </div>
        <div className="multiple-dropdown">
          <MultiDropdownMenu fruits={fruits} selected={selectCheck}/>
        </div>
      </div>
    </div>
  );
}

export default App;
