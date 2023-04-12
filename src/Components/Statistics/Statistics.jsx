import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";


const Statistics = () => {
    const marksArray = [
        {
            id:1,
            name: 'Assignment 1',
            marks : 48,
            
        },
        {
            id:2,
            name: 'Assignment 2',
            marks : 45,
        },
        {
            id:3,
            name: 'Assignment 3',
            marks : 29,
        },
        {
            id:4,
            name: 'Assignment 4',
            marks : 53,
        },
        {
            id:5,
            name: 'Assignment 5',
            marks : 26,
        },
        {
            id:6,
            name: 'Assignment 6',
            marks : 29,
        },
        {
            id:7,
            name: 'Assignment 7',
            marks : 30,
        },
        {
            id:8,
            name: 'Assignment 8',
            marks : 33,
        }
    ];

    return (
        <div>
            <AreaChart
                width={1000}
                height={300}
                data={marksArray}
            >
                {/* <Area dataKey="marks"></Area> */}
                <Area stroke='#8884d8' dataKey="marks"></Area>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip/>
            </AreaChart>
        </div>
    );
};

export default Statistics;