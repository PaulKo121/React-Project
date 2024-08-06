import React from 'react';

const Dashboard = (props) => {
    return (
        <>
            <h1>Dashboard</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>溫度</th>
                        <th>濕度</th>
                        <th>最後更新時間</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item,index) => (
                        <tr key={index}>
                            <td>{item.temperature}</td>
                            <td>{item.humidity}</td>
                            <td>{item.timestamp}</td>
                        </tr>
                    ))}                    
                </tbody>
            </table>
        </>
        // <>
        //     <h1>Dashboard</h1>
        //     <table border='1'>
        //         <thead>
        //             <tr>
        //                 <th>Hour</th>
        //                 <th>Temperature</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {props.data.map((item, index) => (
        //                 <tr key={index}>
        //                     <td>Hour {index}</td>
        //                     <td>{item.temperature}</td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </>
    );
};

export default Dashboard;