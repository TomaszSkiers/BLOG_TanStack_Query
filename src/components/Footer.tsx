import { Box, Typography } from "@mui/material"




export const Footer = () => {


    return(
        <Box component='footer' py={2} textAlign='center' bgcolor='grey.200'>
            <Typography variant="body2">
            © {new Date().getFullYear()} My Blog
            </Typography>
        </Box>
    )
}