import {useCallback, useState} from "react";
import "./SingleDropdownMenu.css";

function SingleDropdownMenu({bases, selected}) {
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const toggleDropdown = () => setIsDropdownDisplayed(!isDropdownDisplayed);
    
    //const numberOfSelected = Object.values(selectedOptions).filter(Boolean).length;

    const singleSelect = useCallback((base) => {
        setSelectedOptions([base]);
        setIsDropdownDisplayed(false);
        selected && selected([base]);
    },[selected]);

    const deselectAll = useCallback(() => {
        setSelectedOptions([]);
    }, []);

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown}>
                {selectedOptions.length
                    ? selectedOptions.join(', ')
                    : "Select Your Yogurt Base"}
            </button>
            {isDropdownDisplayed && (
                <ul className="dropdown-item">
                    
                    {bases.map(base => (
                        <li key={base}>
                            <div onClick={() => singleSelect(base)} className="base-container">
                                <span>{base}</span>

                            </div>
                        </li>
                    ))}
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

export default SingleDropdownMenu;