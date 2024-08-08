import { Card, CardContent, Typography } from "@mui/material";

const StatisticCard = ({ title, value, change }) => (
    <Card className="h-full shadow-lg">
        <CardContent>
            <Typography variant="h6" component="h2" className="mb-2">
                {title}
            </Typography>
            <Typography variant="h4" component="p" className="mb-1">
                {value}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {change}
            </Typography>
        </CardContent>
    </Card>
);

export default StatisticCard;