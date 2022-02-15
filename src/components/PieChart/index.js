import React, { useState, useEffect } from 'react'
import { Pie } from '@ant-design/plots'
import { assignColorByCategory } from '../../utils/colorAssign'
import './index.css'

const PieChart = React.memo(({ data: plainData, setCategoryFilter }) => {
  let data = []
  let outcome = []
  let income = []

  const plainCategories = plainData.map(i => i.category)
  const uniqueCategories = [...new Set(plainCategories)]

  uniqueCategories.map(i => data.push({ type: i, value: 0, outcomeSum: 0, incomeSum: 0 }))

  plainData.forEach(item => {
    (item.amount < 0)
      ? outcome.push(item.amount)
      : income.push(item.amount)
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
    plainData.forEach(transaction => {
      if (transaction.category === chartData.type) {
        (transaction.amount < 0)
          ? increaseChartDataSumState(transaction.amount, 'outcome', chartData)
          : increaseChartDataSumState(transaction.amount, 'income', chartData)
      }
    })

    chartData.value = 100 * chartData.outcomeSum / outcomeSum
  })

  const renderStatistic = (containerWidth, text, style) => {
    const textStyleStr = `width:${containerWidth}px;`

    return `<div style="${textStyleStr}}">${text}</div>`
  }

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    color: ({ type }) => {
      return assignColorByCategory(type)
    },
    radius: 1,
    innerRadius: 0.64,
    label: {
      type: 'outer',
      content: '{percentage}'
    },
    statistic: {
      title: {
        offsetY: -4,
        customHtml: (container, view, datum) => {
          const { width } = container.getBoundingClientRect()

          const text = (datum && datum.type) ? datum.type : 'Gesamt'
          return renderStatistic(width, text)
        }
      },
      content: {
        offsetY: 4,
        style: {
          fontSize: '32px'
        },
        customHtml: (container, view, datum) => {
          const { width } = container.getBoundingClientRect()
          const roundToTwoDecPlaces = (number) => number.toFixed(2)

          const text = (datum && datum.outcomeSum)
            ? `${roundToTwoDecPlaces(datum.outcomeSum)}€`
            : `${roundToTwoDecPlaces(outcomeSum)}€`
          return renderStatistic(width, text)
        }
      }
    },
    interactions: [
      {
        type: 'tooltip', enable: false
      },
      {
        type: 'pie-legend-active'
      },
      {
        type: 'element-selected',
        cfg: {
          start: [{
            trigger: 'element:click', action: (event) => {
              const category = event?.event?.data?.data?.type
              setCategoryFilter(category)
            }
          }]
        }
      },
      {
        type: 'pie-statistic-active'
      },
      {
        type: 'element-active'
      }
    ]
  }

  return <Pie {...config} />
})

export default PieChart
