import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = ({ data: planeData }) => {
    let data = []
    console.log('dataaaaaa', data)
    planeData.forEach(i => {
        return data.push({ category: i.category, date: i.date, payment: i.amount })
    })

    const config = {
        data,
        xField: 'date',
        yField: 'payment',
        xAxis: {
            label: {
                autoRotate: false,
            },
        },
        slider: {
            start: 0.1,
            end: 0.2,
        },
    };

    return <Column {...config} />;
};

export default DemoColumn