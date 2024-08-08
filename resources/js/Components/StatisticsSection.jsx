import { BarChart, LineChart } from "@mui/x-charts";
import StatisticCard from "./StatisticCard";
import { Grid } from "@mui/material";

const StatisticsSection = () => (
    <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
            <StatisticCard
                title="Total active users"
                value="18,765"
                className="bg-blue-100"
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
            <StatisticCard title="Current download" value="4,876" change="" />
        </Grid>
        <Grid item xs={2} md={12}>
            <LineChart
                xAxis={[
                    {
                        scaleType: "band",
                        data: ["January", "February", "March"],
                    },
                ]}
                series={[
                    { data: [4, 3, 5] },
                    { data: [1, 6, 3] },
                    { data: [2, 5, 6] },
                ]}
                height={300}
            />
        </Grid>
    </Grid>
);

export default StatisticsSection;
