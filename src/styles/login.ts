import { LoginStyles } from "../types/loginTypes"
import { Theme } from '@mui/material/styles'


export const getLoginStyles = (theme: Theme): LoginStyles => ({
    form: {
        maxWidth: 350,
        padding: 2,
        margin: 'auto',
        borderRadius: 1,
        background: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
    },
    checkBox: {
        m: 1,
    }
})