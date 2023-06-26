
import { ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


export default function Dashboard() {
    return (
        <div className='font-poppins flex'>
            <div className='flex flex-col'>
                <Chart />
                <div className="flex gap-2">
                    <LearnerStatCard value={80} statType={"Average Grade"} />
                    <LearnerStatCard value={13} statType={"APS"} />
                    <LearnerStatCard value={82} statType={"Class Average"} />
                </div>
            </div>
            {/* <Table /> */}
        </div>
    )
}

// Dashboard child components:
const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
        {
            label: 'Attendance',
            data: [30, 100, 25, 50, 55, 91],
            borderColor: "#27272a",
            backgroundColor: "#a1a1aa",
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15
        },
        {
            label: 'Tests',
            data: [60, 34, 25, 25, 55, 91],
            borderColor: "#27272a",
            backgroundColor: "#f43f5e",
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15
        },
        {
            label: 'Assignments',
            data: [30, 100, 25, 50, 55, 91],
            borderColor: "#27272a",
            backgroundColor: "#a1a1aa",
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15
        },
        {
            label: 'Examination',
            data: [60, 34, 25, 25, 55, 91],
            borderColor: "#27272a",
            backgroundColor: "#a1a1aa",
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15
        },
    ]
};

function Chart() {

    return (
        <>
            <div className='container mx-auto shadow-lg'>
                <Line data={data} />
            </div>
        </>
    )
}


const Table = () => {
    const timeTable = () => {
        let data = [
            {
                time: "10:00",
                subject: "Physical Sciences",
            },
            {
                time: "10:00",
                subject: "Physical Sciences",
            },
            {
                time: "10:00",
                subject: "Physical Sciences",
            },
            {
                time: "10:00",
                subject: "Physical Sciences",
            },
            {
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },{
                time: "10:00",
                subject: "Physical Sciences",
            },

        ]

        return data.map(subject => {
            return (
                <tr>
                    <td className='border border-late-300'>8:00</td>
                    <td className="border border-slate-300 p-4">Mathematics</td>
                    <td className="border border-slate-300 p-4">Life Orientation</td>
                    <td className="border border-slate-300 p-4">Life Orientation</td>
                    <td className="border border-slate-300 p-4">Life Orientation</td>
                    <td className="border border-slate-300 p-4">Life Orientation</td>
                </tr>
            )
        })
    }
    return (
        <div className='overflow-y-scroll w-2/5'>
            <table className="border-collapse border border-slate-400 w-1/4">
                <caption className="caption-top underline font-bold text-neutral-600">
                    Time Table.
                </caption>
                <thead>
                    <tr>
                        <th className="border border-slate-300"></th>
                        <th className="border border-slate-300">Monday</th>
                        <th className="border border-slate-300">Tuesday</th>
                        <th className="border border-slate-300">Wednesday</th>
                        <th className="border border-slate-300">Thursday</th>
                        <th className="border border-slate-300">Friday</th>
                    </tr>
                </thead>
                <tbody>
                    {timeTable()}
                </tbody>
            </table>
        </div>
    )
}

const LearnerStatCard = (Stuff: { value: number, statType: string }) => {
    return (
        <div className="
            rounded-lg
            h-60 p-8
            flex flex-col-reverse items-center justify-around text-center
            bg-white-300 
            shadow-lg hover:shadow-indigo-400 hover:shadown-inner transition-all ease-in-out duration-150
            w-60 
            mx-auto
            py-8
            ">
            <h2 className="font-poppins text-lg">{Stuff?.statType}</h2>
            {
                Stuff?.value > 80 ?
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                        </svg>

                        <p className="text-5xl font-extrabold font-mono">{`${Stuff?.value}%`}</p>
                    </div>
                    :
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                        </svg>
                        <p className="text-5xl font-extrabold font-mono">{`${Stuff?.value}%`}</p>
                    </div>
            }
        </div>
    )
}