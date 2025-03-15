import { createContext, useState, ReactNode, useMemo } from "react"
import { darkTheme } from "../theme/darkTheme"
import { lightTheme } from "../theme/lightTheme"
import { ThemeProvider } from "@mui/material/styles"





type ThemeContextType = {
    toggleTheme: () => void
    isDarkMode: boolean
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProviderWrapper = ({children}: {children: ReactNode}) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

    const toggleTheme = () => {
        setIsDarkMode((prv) => !prv)
    }

    const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode])

    return (
        <ThemeContext.Provider value={{toggleTheme, isDarkMode}}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    )
}