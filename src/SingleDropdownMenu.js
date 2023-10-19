import {useCallback, useState} from "react";
import "./SingleDropdownMenu.css";

function DropdownMenu(fruits, onSelect) {
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const toggleDropdown = () => setIsDropdownDisplayed(!isDropdownDisplayed);
    
    //const numberOfSelected = Object.values(selectedOptions).filter(Boolean).length;

    const singleSelect = useCallback((base) => {
        setSelectedOptions([base]);
        setIsDropdownDisplayed(false);
        onSelect
    },[onSelect]);

    const multiSelect = useCallback((fruit) => {
        if(selectedOptions.includes(fruit)){
            setSelectedOptions(prev => prev.filter(item => item !== fruit));
        }
        else{
            setSelectedOptions(prev => [...prev, fruit]);
        }
        onSelect(selected);
    }, [selected, onSelect]);

    const selectAll = useCallBack(() => {
        setSelectedOptions(fruits);
    }, [fruits]);

    const deselectAll = useCallBack(() => {
        setSelectedOptions([]);
    }, []);

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown}>
                {selected.length
                    ? selected.join(', ')
                    : "Select Your Fruits"}
            </button>
            {isDropdownDisplayed && (
                <ul className="dropdown-item">
                    
                    {fruits.map(fruit => (
                        <li key={fruit}>
                            <div onClick={() => }>

                            </div>
                        </li>
                    ))

                    }
                </ul>
                    
            )

            }

        </div>
    )
}

export default DropdownMenu;