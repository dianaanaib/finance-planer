import React from 'react'
import { Pie } from '@ant-design/plots'
import './index.css'

const PieChart = ({ data: planeData }) => {
  let data = []
  const planeCategories = planeData.map(i => i.category)
  const uniqueCategories = [...new Set(planeCategories)]

  uniqueCategories.map(i => data.push({ type: i, value: 0, count: 0 }))

  console.log('ich', data)

  data.forEach(chartData => {
    const transactionsQuantity = Object.keys(planeData).length

    planeData.forEach(transaction => (transaction.category === chartData.type)
      ? chartData.count = chartData.count + 1
      : null
    )

    chartData.value = 100 * chartData.count / transactionsQuantity
  })

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{percentage}'
    },
    interactions: [
      {
        type: 'pie-legend-active'
      },
      {
        type: 'element-active'
      }
    ]
  }
  return <Pie {...config} />
}

export default PieChart


