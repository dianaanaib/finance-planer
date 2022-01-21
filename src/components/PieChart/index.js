import React, { useState } from 'react'
import { Pie } from '@ant-design/plots'
import { assignColorByCategory } from '../../utils/colorAssign'
import './index.css'

const PieChart = ({ data: planeData }) => {
  const [selected, setSelected] = useState(null)

  let data = []
  let outcome = []
  let income = []

  console.log('data', data)
  const planeCategories = planeData.map(i => i.category)
  const uniqueCategories = [...new Set(planeCategories)]

  uniqueCategories.map(i => data.push({ type: i, value: 0, outcomeSum: 0, incomeSum: 0 }))

  planeData.forEach(item => {
    (item.bankStatement.amount < 0)
      ? outcome.push(item.bankStatement.amount)
      : income.push(item.bankStatement.amount)
  })

  const negativeOutcomeSum = outcome.reduce((a, b) => (a + b), 0)
  const outcomeSum = Math.abs(negativeOutcomeSum)

  const increaseChartDataSumState = (amount, status, chartData) => {
    const convertedAmount = Math.abs(amount)

    if (status === 'outcome') {
      return chartData.outcomeSum = chartData.outcomeSum + convertedAmount
    }
    return chartData.incomeSum = chartData.incomeSum + amount
  }

  data.forEach(chartData => {
    planeData.forEach(transaction => {
      if (transaction.category === chartData.type) {
        (transaction.bankStatement.amount < 0)
          ? increaseChartDataSumState(transaction.bankStatement.amount, 'outcome', chartData)
          : increaseChartDataSumState(transaction.bankStatement.amount, 'income', chartData)
      }
    })

    chartData.value = 100 * chartData.outcomeSum / outcomeSum
  })

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    color: ({ type }) => {
      return assignColorByCategory(type)
    },
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
        type: 'element-single-selected',
      },
      {
        type: 'element-active'
      }
    ]
  }

  return <Pie {...config} />
}

export default PieChart


