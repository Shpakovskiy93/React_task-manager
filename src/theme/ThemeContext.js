import React from "react";
import theme from './index';

const  ThemeContext = React.createContext({
    theme: theme.light,
    isDarkMode: false,
    toggleTheme: () => {}, 
});
ThemeContext.displayName = 'ThemeContext';

export {ThemeContext};