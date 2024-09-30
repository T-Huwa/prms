import { BarChart, LineChart } from "@mui/x-charts";
import StatisticCard from "./StatisticCard";
import { Grid } from "@mui/material";

const StatisticsSection = () => (
    <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
            <StatisticCard
                title="Total active users"
                value="18,765"
                change="+2.6% last 7 days"
            />
        </Grid>
        <Grid item xs={12} md={3}>
            <StatisticCard
                title="Total Referrals"
                value="4,876"
                change="+0.2% last 7 days"
            />
        </Grid>
        <Grid item xs={12} md={3}>
            <StatisticCard
                title="Total requests"
                value="678"
                change="-0.1% last 7 days"
            />
        </Grid>
        <Grid item xs={12} md={3}>
            <StatisticCard
                title="Cancelled Requests"
                value="0"
                change="0.0 last 7 days"
            />
        </Grid>
        <Grid
            className="bg-white my-8 mx-12 justify-center w-full rounded-lg shadow-xl border-2 border-gray-300"
            item
        >
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                height={300}
            />
        </Grid>
    </Grid>
);

export default StatisticsSection;
