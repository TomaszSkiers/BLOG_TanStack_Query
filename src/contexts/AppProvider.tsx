import { ReactNode } from "react"
import { ThemeProviderWrapper } from "./ThemeContext"


//TODO hera are all providers for App eg: themProvider, useQuery Provider 

export const AppProvider = ({children}: {children: ReactNode}) => {
    return (
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
    )
}