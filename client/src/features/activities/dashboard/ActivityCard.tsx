import { Button, CardActions, Chip, Typography, Card, CardContent, Box } from '@mui/material';
import { useActivities } from '../../../lib/hooks/useActivities';

type Props = {
  activity: Activity;
  selectActivity: (id: string) => void;
}

const ActivityCard = ({ activity, selectActivity }: Props) => {

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
            onClick={() => selectActivity(activity.id)}
            size="medium"
            variant="contained">
            View
          </Button>
          <Button color="error"
            onClick={() => deleteActivity.mutate(activity.id)}
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