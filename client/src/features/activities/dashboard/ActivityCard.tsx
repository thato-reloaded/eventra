import { Button, CardActions, Chip, Typography, Card, CardContent, Box } from '@mui/material';
import { useActivities } from '../../../lib/hooks/useActivities';
import { Link } from 'react-router';

type Props =  {
  activity: Activity;
}

const ActivityCard = ({ activity }: Props) => {
  const {deleteActivity} = useActivities();

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>{activity.date}</Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">{activity.city} / {activity.venue}</Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', paddingX: 2 }}>
        <Chip label={activity.category} variant='outlined' />
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button
            component={Link}
            to={`/activities/${activity.id}`}
            size="medium"
            variant="contained">
            View
          </Button>
          <Button color="error"
            onClick={() => {}}
            loading={deleteActivity.isPending}
            size="medium"
            variant="contained">
            Delete
          </Button>

        </Box>
      </CardActions>
    </Card>
  )
}
export default ActivityCard