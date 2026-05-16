import { Button, Grid } from '@mui/material';
import ActivityList from './ActivityList';
import ActivityFilers from './ActivityFilers';
import { useActivities } from '../../../lib/hooks/useActivities';

const ActivityDashboard = () => {
    const {isFetchingNextPage, fetchNextPage, hasNextPage} = useActivities();

    return (
        <Grid container spacing={3}>
            <Grid size={8}>
                <ActivityList />
                <Button
                    onClick={() => fetchNextPage()}
                    sx={{my: 2, float: 'right'}}
                    variant="contained"
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    Laod more
                </Button>
            </Grid>
            <Grid size={4}>
                <ActivityFilers />
            </Grid>
        </Grid>
    )
}
export default ActivityDashboard