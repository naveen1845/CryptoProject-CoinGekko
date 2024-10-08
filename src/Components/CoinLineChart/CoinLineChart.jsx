import { Line, Bar } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
import Chart from "chart.js/auto";
import Alert from "../Alert/Alert";

function CoinLineChart({ historicData , currency , days, setDays, setChartInterval }){
    Chart.register(CategoryScale);

    const chartDays = [
        { 
            label: "24 Hrs",
            value: 1
        },
        { 
            label: "7 Days",
            value: 7
        },
        { 
            label: "30 Days",
            value: 30
        },
        { 
            label: "3 Months",
            value: 90
        },
        { 
            label: "1 Year",
            value: 365
        },
    ]

    function onChangeHandler(e){
        console.log(e.target.options[e.target.selectedIndex].value);
        const daysSelected = e.target.options[e.target.selectedIndex].value;
        if(daysSelected == 1) {
            setChartInterval('');
        } else {
            setChartInterval('daily');
        }
        setDays(e.target.options[e.target.selectedIndex].value);
    }

    if (!historicData) {
        return <Alert message={"No Chart Data available"} type={"warning"} />
    }


    return(
       
        <div className="flex flex-col items-center justify-center w-full">
                <div className="w-full h-[400px] p-5">
                <Line
                    data={{
                        labels: historicData.prices.map(coinPrice => {
                            let date = new Date(coinPrice[0]);
                            let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
                            return days == 1 ? time : date.toLocaleDateString() + " " + time;
                        }),
                        datasets: [
                        {
                            label: `Price (last ${days} ${days == 1 ? 'day' : 'days'}) in ${currency.toUpperCase()}`,
                            data: historicData.prices.map((coinPrice) => coinPrice[1]),
                            borderColor: 'rgba(75, 192, 192, 1)', 
                            backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                            fill: true,
                            borderWidth: 1,
                            pointStyle: false
                        },
                        ],
                    }}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true
                    }}
                />



            </div>

            <div className="w-full h-[400px] p-5">
            <Bar
                data={{
                    labels: historicData.total_volumes.map(coinVolumes => {
                        let date = new Date(coinVolumes[0]);
                        let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
                        return days == 1 ? time : date.toLocaleDateString() + " " + time;
                    }),
                    datasets: [
                    {
                        label: `Volume (last ${days} ${days == 1 ? 'day' : 'days'}) }`,
                        data: historicData.total_volumes.map((coinVolumes) => coinVolumes[1]),
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor:'rgba(255, 99, 132, 1)',
                        borderWidth: 0.5,
                    },
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    responsive: true
                }}
            />

            </div>
            <div>
                <select className="select select-bordered w-full max-w-xs" onChange={onChangeHandler}>
                        {chartDays.map((day, index) => {
                            return (
                                <option selected={days == day.value} key={index} value={day.value}>{day.label}</option>
                            )
                        })}
                </select>
            </div>
        </div>
    )
}

export default CoinLineChart;