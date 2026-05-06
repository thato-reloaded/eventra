import { useParams } from "react-router";
import { useProfile } from "../../lib/hooks/useProfile";
import { Box, Button, Divider, Typography } from "@mui/material";

export default function ProfileBio() {
    const { id } = useParams();
    const { profile } = useProfile(id);
  return (
    <Box>
        <Box display='flex' justifyContent='space-between'>
            <Typography variant="h5">About {profile?.displayName}</Typography>
            <Button onClick={() => { }}>
                Edit profile
            </Button>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{overflow: 'auto', maxheight: 350}}>
            <Typography variant="body1" sx={{whiteSpace: 'pre-wrap'}}>
                {profile?.bio || 'No bio added yet'}
            </Typography>
        </Box>
    </Box>
  )
}