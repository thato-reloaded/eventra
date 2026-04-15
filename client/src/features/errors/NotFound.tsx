import { SearchOff } from "@mui/icons-material";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function NotFound() {
    return (
        <Paper sx={{
            height: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 6
        }}
        >
            <SearchOff sx={{ fontSize: 100 }} color="primary" />
            <Typography gutterBottom variant="h3">
                Oopsie! That page could not be found.
            </Typography>
            <Button fullWidth component={Link} to='/activities'>
                Return to Homepage
            </Button>
        </Paper>
    )
}