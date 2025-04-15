import { SxProps, Theme } from '@mui/material'

export interface SingleCardProps {
    title: string
    introduction: string
    fullcontent: string
}

export interface SingleCardStyles {
    card: SxProps<Theme>
    container: SxProps<Theme>
    title: SxProps<Theme>
    introduction: SxProps<Theme>
    fullContent: SxProps<Theme>
    image: SxProps<Theme>
}