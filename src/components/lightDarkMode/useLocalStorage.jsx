import { useEffect, useState } from "react";
import './theme.css';

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
        } catch (err) {
            console.log(err);
            currentValue = defaultValue;
        }

        return currentValue;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

// INITIAL LOAD
// The initializer function for useState runs once during the initial render to set the initial state value. 
// This value is either from localStorage or defaultValue.

// SUBSEQUENT RENDERS
// useState is not re-invoked during subsequent renders of the component.
// The state value is updated by setTheme, 
// and this updated value is used by useLocalStorage when it runs its effect hook during the re-render. 
// This is how the theme is updated and reflected in localStorage.