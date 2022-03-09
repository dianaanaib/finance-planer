import React, { useEffect, useState } from 'react'
import { getAllBankStatements, getAllUploadedFiles } from './service'
import TransactionList from './components/TransactionList'
import FileList from './components/FileList'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import ColumnChart from './components/ColumnChart'
import StackedAreaChart from './components/StackedAreaChart'
import AppHeader from './components/AppHeader'
import { Card, Row, Col, Tooltip } from 'antd'
import UploadButton from './components/UploadButton'
import TableActions from './components/TableActions'
import AsyncStorage from '@react-native-async-storage/async-storage'

import './App.css'
import "antd/dist/antd.css"

function App() {
  const [data, setData] = useState(null)
  const [fileData, setFileData] = useState(null)
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [chartType, setChartType] = useState('outcome')
  const [isPieChartTooltipVisible, setIsPieChartTooltipVisible] = useState(false)
  const [isLineChartTooltipVisible, setIsLineChartTooltipVisible] = useState(false)
  const [isColumnChartTooltipVisible, setIsColumnChartTooltipVisible] = useState(false)
  const [isStackedAreaChartTooltipVisible, setIsStackedAreaChartTooltipVisible] = useState(false)
  const [isChosenList, setIsChosenList] = useState('transactions')
  const isIncomeChartType = (chartType === 'income')

  const [activeCharts, setActiveCharts] = useState(['pie', 'line'])
  const getActiveCharts = async () => {
    try {
      return await AsyncStorage.getItem('chartsState');
    } catch (error) {
      console.log('error fetching active charts', error);
    };
  };

  const changeActiveCharts = async (charts) => {
    console.log('chartsInFunc', charts)
    try {
      await AsyncStorage.setItem('chartsState', charts);
    } catch (error) {
      console.log('error changing active charts', error);
    };
  };

  useEffect(async () => {
    getActiveCharts()
      .then(res => {
        if (res) {
          const responceArray = res.split(',')
          setActiveCharts(responceArray);
        }
      })
      .catch(err => {
        console.log('error setting state', err);
      });
  }, [])

  const onChartClick = (chartName) => {
    let newState
    if (!activeCharts.find(chart => chart === chartName)) {
      newState = [...activeCharts, chartName]
      setActiveCharts(newState);
      changeActiveCharts(newState);
    } else {
      newState = setActiveCharts(activeCharts.filter(chart => chart !== chartName));
      changeActiveCharts(newState);
    }
  };

  useEffect(async () => {
    const result = await getAllBankStatements()
    const parsedResult = result.map(i => {
      return { ...i.bankStatement, amount: parseFloat(i.bankStatement.amount), category: i.category }
    })
    setData(parsedResult)
  }, [])

  useEffect(async () => {
    const result = await getAllUploadedFiles()
    setFileData(result)
  }, [])

  if (isPieChartTooltipVisible) {
    setTimeout(() => {
      setIsPieChartTooltipVisible(false)
    }, 1000);
  }

  if (isLineChartTooltipVisible) {
    setTimeout(() => {
      setIsLineChartTooltipVisible(false)
    }, 1000);
  }

  if (isColumnChartTooltipVisible) {
    setTimeout(() => {
      setIsLineChartTooltipVisible(false)
    }, 1000);
  }

  if (isStackedAreaChartTooltipVisible) {
    setTimeout(() => {
      setIsLineChartTooltipVisible(false)
    }, 1000);
  }

  if (data === null) {
    return <div>Loading...</div>
  }

  let pieChartTimer = 0
  let lineChartTime = 0

  const isCardVisible = (chartName) => Boolean(activeCharts?.find(chart => chart === chartName))

  return (
    <div className='appContainer'>
      <Row gutter={[25, 25]}>
        <Col span={24}>
          <AppHeader onChartClick={onChartClick} activeCharts={activeCharts} chartType={chartType} setChartType={setChartType} />
        </Col>
        <Col
          style={
            isCardVisible('pie') ? { display: 'block' } : { display: 'none' }
          }
          span={12}
        >
          <Tooltip
            visible={isPieChartTooltipVisible}
            onMouseEnter={() => {
              pieChartTimer = setTimeout(() => {
                setIsPieChartTooltipVisible(true)
              }, 1000)
            }}
            onMouseLeave={() => { setIsPieChartTooltipVisible(false); clearTimeout(pieChartTimer) }}
            placement="topRight"
            color={(isIncomeChartType) ? '#63DAAB' : '#6395F9'}
            title={(isIncomeChartType) ? 'Income Pie Chart' : 'Outcome Pie Chart'}
          >
            <Card bordered={false}>
              <PieChart
                pieType={chartType}
                data={data}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
              />
            </Card>
          </Tooltip>
        </Col>
        <Col
          style={
            isCardVisible('line') ? { display: 'block' } : { display: 'none' }
          }
          span={12}>
          <Tooltip
            visible={isLineChartTooltipVisible}
            onMouseEnter={() => {
              lineChartTime = setTimeout(() => {
                setIsLineChartTooltipVisible(true)
              }, 1000)
            }}
            onMouseLeave={() => { setIsLineChartTooltipVisible(false); clearTimeout(lineChartTime) }}
            placement="topRight" color='#6395F9' title='Outcome Line Chart'
          >
            <Card bordered={false}>
              <LineChart data={data} />
            </Card>
          </Tooltip>
        </Col>

        <Col
          style={
            isCardVisible('column') ? { display: 'block' } : { display: 'none' }
          }
          span={12}>
          <Tooltip
            visible={isColumnChartTooltipVisible}
            onMouseEnter={() => {
              lineChartTime = setTimeout(() => {
                setIsColumnChartTooltipVisible(true)
              }, 1000)
            }}
            onMouseLeave={() => { setIsColumnChartTooltipVisible(false); clearTimeout(lineChartTime) }}
            placement="topRight" color='#6395F9' title='Outcome Column Chart'
          >
            <Card bordered={false}>
              <ColumnChart data={data} />
            </Card>
          </Tooltip>
        </Col>

        <Col
          style={
            isCardVisible('stackedArea') ? { display: 'block' } : { display: 'none' }
          }
          span={12}>
          <Tooltip
            visible={isStackedAreaChartTooltipVisible}
            onMouseEnter={() => {
              lineChartTime = setTimeout(() => {
                setIsStackedAreaChartTooltipVisible(true)
              }, 1000)
            }}
            onMouseLeave={() => { setIsStackedAreaChartTooltipVisible(false); clearTimeout(lineChartTime) }}
            placement="topRight" color='#6395F9' title='Outcome Stacked Area Chart'
          >
            <Card bordered={false}>
              <StackedAreaChart data={data} />
            </Card>
          </Tooltip>
        </Col>

        <Col span={24}>
          <Card
            title={
              <TableActions
                setIsChosenList={setIsChosenList}
              />
            }
            extra={<UploadButton />}
            className='transactionsList'
            bordered={false}
          >
            {
              (isChosenList === 'uploadedFiles')
                ? <FileList data={fileData} />
                : <TransactionList data={data} categoryFilter={categoryFilter} />
            }
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
