import { Grid } from '@mui/material';
import ActivityList from './ActivityList';
import ActivityFilers from './ActivityFilers';

const ActivityDashboard = () => {

    return (
        <Grid container spacing={3}>
            <Grid size={8}>
                <ActivityList />
            </Grid>
            <Grid size={4}>
                <ActivityFilers />
            </Grid>
        </Grid>
    )
}
export default ActivityDashboard