import { SxProps, Theme } from "@mui/material/styles"

export interface  HeaderStyles{
    container: SxProps<Theme>
    leftBox: SxProps<Theme>
    rightBox: SxProps<Theme>
    links: (isActive: boolean, theme: Theme) => SxProps<Theme>
    appBar: SxProps<Theme>
  }