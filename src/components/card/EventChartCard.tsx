import React from 'react';
import {Stack,useTheme} from "@mui/material";
import {Chart} from "@/util";
import type {ApexOptions} from "apexcharts";
import {useThemeAction} from "@/hooks/useThemeAction";


function EventChartCard() {
    const theme = useTheme();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { setTheme, theme: themes } = useThemeAction();


    const chart1Options: ApexOptions = {
        chart: {
            background: themes === 'AlphaTwelve' ? theme.palette.common.white as unknown as string  : theme.palette.info as unknown  as string,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            stacked: true,
        },
        title: {

            text: 'Event Registrations per month',
            style: {
                fontSize:  '14px',
                fontWeight:  'bold',
                fontFamily:  undefined,
                color:  themes === 'AlphaTwelve' ? theme.palette.info as unknown as string  : theme.palette.common.white as string,
            },
        },
        dataLabels: {
            enabled: false,
        },

        theme: {
            mode: theme.palette.mode,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 1,
                columnWidth: '40%',
            },
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['transparent'],
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", "Dec"],
        fill: {
            opacity: 1,
            colors: [theme.colors.secondary.main, '#94c894'],
        },
        colors: ['#94c894'],
        legend: {
            show: false,
            position: 'top',
        },
        grid: {
            strokeDashArray: 6,
            borderColor: theme.palette.divider,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: themes === 'AlphaTwelve' ? theme.palette.info as unknown as string  : theme.palette.common.white as string,
                },
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: themes === 'AlphaTwelve' ? theme.palette.info as unknown as string  : theme.palette.common.white as string,
                },
            },
        },
    };
    const chart1Data = [
        {
            name: 'Total',
            data: [50, 60,40, 70, 900, 800, 300,400,20,50,90,60],
        },
    ];

    return (
        <Stack>
            <Chart
                options={chart1Options}
                series={chart1Data}
                type="bar"
                height={300}
            />
        </Stack>
    );
}

export default EventChartCard;