import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { Container, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

type Props = {
    openForm: () => void;
}

const NavBar = ({openForm}: Props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
            }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <MenuItem sx={{ display: 'flex', gap: 1 }}>
                                <LocalActivityIcon fontSize="large" />
                                <Typography variant="h5" fontWeight='bold'>
                                    Eventra
                                </Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <MenuItem sx={{ display: 'flex', gap: 1 }}>
                                <Typography fontSize='1rem' textTransform='uppercase' fontWeight='bold'>
                                    Activities
                                </Typography>
                            </MenuItem>
                            <MenuItem sx={{ display: 'flex', gap: 1 }}>
                                <Typography fontSize='1rem' textTransform='uppercase' fontWeight='bold'>
                                    About</Typography>
                            </MenuItem>
                            <MenuItem sx={{ display: 'flex', gap: 1 }}>
                                <Typography fontSize='1rem' textTransform='uppercase' fontWeight='bold'>
                                    Contact
                                </Typography>
                            </MenuItem>
                        </Box>
                        <Button
                         onClick={openForm}
                          size="large" 
                          variant="contained" 
                          color="warning"
                         >
                            Create Activity
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
export default NavBar