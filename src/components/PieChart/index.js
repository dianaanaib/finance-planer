import React, { useState, useEffect } from 'react'
import { Pie } from '@ant-design/plots'
import './index.css'

const PieChart = () => {
  const data = [
    {
      type: '1',
      value: 27,
    },
    {
      type: '2',
      value: 25,
    },
    {
      type: '3',
      value: 18,
    },
    {
      type: '4',
      value: 15,
    },
    {
      type: '5',
      value: 10,
    },
    {
      type: '6',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}'
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


