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
            <StatisticCard title="Deaths" value="0" change="0.0 last 7 days" />
        </Grid>
        <Grid
            className="bg-gray-100 mt-5 rounded-lg shadow-xl border-2 border-gray-300"
            item
            xs={2}
            md={12}
        >
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12] }]}
                series={[
                    { data: [0, 5, 2, 6, 3, 9.3] },
                    { data: [6, 3, 7, 9.5, 4, 2] },
                    { data: [12, 9, 7, 2.1, 10, 1] },
                    { data: [4, 3, 6, 4.5, 9.2, 12] },
                ]}
                height={300}
                margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                grid={{ horizontal: true }}
            />
        </Grid>
    </Grid>
);

export default StatisticsSection;
