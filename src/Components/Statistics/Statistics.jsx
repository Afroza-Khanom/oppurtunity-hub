import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";


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
            <header className='headertag-container'>
                <h1>Statistics</h1>
            </header>
            
             <div style={{
            paddingBottom: '56.25%', /* 16:9 */
            position: 'relative',
            height: 0
          }} >
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%'
                }}>
                    <ResponsiveContainer >
                <AreaChart
                    width={1000}
                    height={400}
                    data={marksArray}
                >
                    {/* <Area dataKey="marks"></Area> */}
                    <Area stroke='#8884d8' dataKey="marks"></Area>
                    <XAxis dataKey="name" />
                    <YAxis></YAxis>
                    <Tooltip/>
                </AreaChart>
                </ResponsiveContainer>
            </div>
          </div>
        </div>
       
        
    );
};

export default Statistics;