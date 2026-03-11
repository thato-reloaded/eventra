import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomePage = () => {
  return (
    <Paper className="home"
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', alignContent: 'center', color: 'white', gap: 3 }}>
        <Group sx={{ height: 110, width: 110 }} />
        <Typography variant="h1" fontWeight='bold'>
          Eventra
        </Typography>
      </Box>
      <Typography variant="h2">
        Welcome to Eventra
      </Typography>
      <Button 
        component={Link} 
        to='/activities' 
        size='large' 
        variant="contained" 
        endIcon={<ArrowForwardIcon />}
        sx={{
          height: 80, 
          borderRadius: 4, 
          fontSize: '1.5rem', 
          backgroundColor: 'white', 
          color: 'primary.main',
          px: 3
        }}>
        View Activities
      </Button>
    </Paper>
  )
}
export default HomePage