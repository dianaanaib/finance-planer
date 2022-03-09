import React from 'react';
import { assignColorByCategory } from '../../utils/colorAssign'
import { Area } from '@ant-design/plots';

const DemoArea = React.memo(({ data: planeData }) => {
	let data = []

	planeData.forEach(i => {
		return data.push({ category: i.category, date: i.date, payment: i.amount })
	})

	const config = {
		data,
		xField: 'date',
		yField: 'payment',
		seriesField: 'category',
		slider: {
			start: 0.1,
			end: 0.9,
		},
		color: ({ category }) => {
			return assignColorByCategory(category)
		},
	};

	return <Area {...config} />;
});

export default DemoArea