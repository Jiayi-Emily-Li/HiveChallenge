import {useCallback, useState} from "react";
import "./SingleDropdownMenu.css";

function SingleDropdownMenu({bases, onSelect}) {
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const toggleDropdown = () => setIsDropdownDisplayed(!isDropdownDisplayed);
    
    //const numberOfSelected = Object.values(selectedOptions).filter(Boolean).length;

    const singleSelect = useCallback((base) => {
        setSelectedOptions([base]);
        setIsDropdownDisplayed(false);
        onSelect && onSelect([base]);
    },[onSelect]);

    // const multiSelect = useCallback((fruit) => {
    //     if(selectedOptions.includes(fruit)){
    //         setSelectedOptions(prev => prev.filter(item => item !== fruit));
    //     }
    //     else{
    //         setSelectedOptions(prev => [...prev, fruit]);
    //     }
    //     onSelect(selected);
    // }, [selected, onSelect]);

    // const selectAll = useCallBack(() => {
    //     setSelectedOptions(fruits);
    // }, [fruits]);

    // const deselectAll = useCallBack(() => {
    //     setSelectedOptions([]);
    // }, []);

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown}>
                {selectedOptions.length
                    ? selectedOptions.join(', ')
                    : "Select Your Base"}
            </button>
            {isDropdownDisplayed && (
                <ul className="dropdown-item">
                    
                    {bases.map(base => (
                        <li key={base}>
                            <div onClick={() => singleSelect(base)} className="base-container">
                                <span>{base}</span>

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

export default SingleDropdownMenu;