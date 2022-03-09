import React from 'react';
import { Column } from '@ant-design/plots';
import { assignColorByCategory } from '../../utils/colorAssign'

const DemoColumn = React.memo(({ data: planeData }) => {
    let data = []

    planeData.forEach(i => {
        return data.push({ category: i.category, date: i.date, payment: i.amount })
    })

    const config = {
        data,
        xField: 'date',
        yField: 'payment',
        seriesField: 'category',
        color: ({ category }) => {
            return assignColorByCategory(category)
        },
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

    return <Column {...config} />
});

export default DemoColumn