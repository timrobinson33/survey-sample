import { Radar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export default function ResultsRadar() {

    const radarData = {
        labels:['Financial Advice and Planning','Core Knowledge','Curiosity','Data and Technology'],
        datasets: [
            {
                label: 'Ability',
                data: [4.5, 4.3, 1.6, 3.3],
                backgroundColor: 'rgba(255, 128, 128, 0.2)',
                borderColor: 'rgba(255, 0, 0, 1)',
            },
            {
                label: 'Importance',
                data: [4.1, 1.9, 3.6, 2.6],
                backgroundColor: 'rgba(128, 128, 255, 0.2)',
                borderColor: 'rgba(0, 0, 255, 1)',
            },
        ]
    }
    const radarOptions = {
        scales: {
            r: { min: 0, max: 5 }
        }
    }

    return (
        <div>
            <div style={{ width: "600px", height: "600px" }}>
                <Radar options={radarOptions} data={radarData} />
            </div>
        </div>
    )
}
