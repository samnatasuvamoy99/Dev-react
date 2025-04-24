import { createContext , useContext } from "react";
    export const ThemeContext= createContext({
         themeMode:"light",
         darkTheme: () =>{},
         lightTheme: () =>{},

    })

    export const ThemeProvider =ThemeContext.Provider

     // function ko return  kerne ke liya jo obj  he uska features.......
    export default function useTheme(){
          return useContext(ThemeContext)
    }
