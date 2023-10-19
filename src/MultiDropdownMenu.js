import {useCallback, useState} from "react";
import "./MultiDropdownMenu.css";

function MultiDropdownMenu({fruits, selected}) {
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const toggleDropdown = () => setIsDropdownDisplayed(!isDropdownDisplayed);

    const multiSelect = useCallback((fruit) => {
        setSelectedOptions(prev => {
            let newSelectedOptions;
            if(prev.includes(fruit)){
                // Filter out the clicked fruit if it's already in the array
                newSelectedOptions = prev.filter(item => item !== fruit);
            } else {
                // Add the clicked fruit if it's not in the array
                newSelectedOptions = [...prev, fruit];
            }
    
            // Call the 'selected' function prop with the updated options
            selected && selected(newSelectedOptions);
    
            // Return the new state
            return newSelectedOptions;
        });
    }, [selected]);

    const selectAll = useCallback(() => {
        setSelectedOptions(fruits);
    }, [fruits]);

    const deselectAll = useCallback(() => {
        setSelectedOptions([]);
    }, []);

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown}>
                {selectedOptions.length
                    ? selectedOptions.join(', ')
                    : "Select Your Fruits"}
            </button>
            {isDropdownDisplayed && (
                <ul className="dropdown-item">
                    {fruits.map(fruit => (
                        <li key={fruit}>
                            <div onClick={() => multiSelect(fruit)} className="fruit-container">
                                <input 
                                    type="checkbox" 
                                    checked={selectedOptions.includes(fruit)}
                                    readOnly
                                />
                                <span>{fruit}</span>

                            </div>
                        </li>
                    ))}
                    
                    <li className="select-options">
                        <button onClick={selectAll}>Select All Fruits</button>
                        
                    </li>
                    <li className="select-options">
                        {selectedOptions.length > 0 && (
                            <button onClick={deselectAll}>Reset</button>
                        )}
                    </li>
                </ul>
                    
            )

            }

        </div>
    )
}

export default MultiDropdownMenu;