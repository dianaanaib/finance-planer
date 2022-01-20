import React from 'react'
import { assignColorByCategory } from '../../utils/colorAssign'
import { Line } from '@ant-design/plots'
import './index.css'

const LineChart = ({ data: planeData }) => {
  let data = []

  planeData.forEach(i => {
    return data.push({ category: i.category, date: i.bankStatement.date, payments: (i.bankStatement.amount) })
  })

  const config = {
    data,
    xField: 'date',
    yField: 'payments',
    seriesField: 'category',
    yAxis: {
      label: {
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      }
    },
    color: ({ category }) => {
      return assignColorByCategory(category)
    },
    point: {
      shape: ({ category }) => {
        return category === '3' ? 'square' : 'circle'
      }
    }
  }

  return <Line {...config} />
};

export default LineChart
