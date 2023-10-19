import {useCallback, useState} from "react";
import "./DropdownMenu.css";

function DropdownMenu(items) {
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const toggleDropdown = () => setIsDropdownDisplayed(!isDropdownDisplayed);
    
    const numberOfSelected = Object.values(selectedOptions).filter(Boolean).length;

    const singleSelect = useCallback((base) => {
        setSelectedOptions([base]);
        setIsDropdownDisplayed(false);
        
    })

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown}>
                {numberOfSelected > 0
                    ? `${numberOfSelected} fruits selected`
                    : "Select Your Fruits"}
            </button>
            {isDropdownDisplayed && (
                <ul className="dropdown-item">
                    {items.map(item => (
                        <li key={item}>
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