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
import { CloseButton } from 'react-bootstrap';
import { reduce } from 'lodash';

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
                label: 'ABILITY',
                data: [4.5, 4.3, 1.6, 3.3],
                backgroundColor: 'rgba(173, 93, 58, 0.1)',
                borderColor: 'rgba(173, 93, 58, 1)',
                color: '#000',
            },
            {
                label: 'IMPORTANCE',
                data: [4.1, 1.9, 3.6, 2.6],
                backgroundColor: 'rgba(96, 141, 162, 0.1)',
                borderColor: 'rgba(96, 141, 162, 1)',
                color: '#000',
            },
        ]
    }
    const radarOptions = {
        scales: {
            r: { min: 0, max: 5 }
        },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    color: '#676767',
                    boxWidth: 9,
                    boxHeight: 9,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: {
                        size: 12,
                        family: "'Open Sans', sans-serif",
                        weight: 600,
                    }
                }
            }
        }
    }

    return (
        <div class="res-radar-wrapper">
            <div class="res-radar-inner">
                <Radar options={radarOptions} data={radarData} />
            </div>
        </div>
    )
}
