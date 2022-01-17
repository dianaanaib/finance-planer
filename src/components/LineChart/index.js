import React, { useState, useEffect } from 'react'
import { Line } from '@ant-design/plots'
import './index.css'

//import { uniq, findIndex } from '@antv/util';

const LineChart = () => {
  const [data, setData] = useState([]);

  //useEffect(() => {
    //asyncFetch()
  //}, [])

  //const asyncFetch = () => {
    //fetch('')
      //.then((response) => response.json())
      //.then((json) => setData(json))
      //.catch((error) => {
      //  console.log('fetch data failed', error);
      //})
  //}
  
  const COLOR_PLATE_10 = [
    '#5B8FF9',
    '#5AD8A6',
    '#5D7092',
    '#F6BD16',
    '#E8684A',
    '#6DC8EC',
    '#9270CA',
    '#FF9D4D',
    '#269A99',
    '#FF99C3',
  ]

  setData([
      {name: 'Label 1', date: '12.12.21', category: '1'},
      {name: 'Label 2', date: '13.12.21', category: '2'},
      {name: 'Label 3', date:'17.12.21', category: '3'},
      {name: 'Label 4', date:'17.12.21', category: '4'},
      {name: 'Label 5', date: '19.12.21', category: '5'}
    ])

  const config = {
    data,
    xField: 'name',
    yField: 'date',
    seriesField: 'category',
    yAxis: {
      label: {
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      }
    },
    color: COLOR_PLATE_10,
    point: {
      shape: ({ category }) => {
        return category === '3' ? 'square' : 'circle'
      }
    }
  }

  return <Line {...config} />
};

export default LineChart
