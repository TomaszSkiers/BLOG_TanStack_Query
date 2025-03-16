import {PaletteOptions} from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Palette {
        highlight: {
            main: string
        },
        muted: {
            main: string
        }
    }
    interface PaletteOptions {
        highlight?: {
            main: string
        }
        muted?: {
            main: string
        }
    }
}
