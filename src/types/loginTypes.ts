import { SxProps, Theme } from "@mui/material/styles"

export interface LoginData {
    email: string
    password: string
    remember: boolean
}

export interface LoginStyles {
    form: SxProps<Theme>
    checkBox: SxProps<Theme>
}