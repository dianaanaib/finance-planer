import React, { useEffect, useState } from 'react'
import { getAllBankStatements, getAllUploadedFiles } from './service'
import TransactionList from './components/TransactionList'
import FileList from './components/FileList'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import AppHeader from './components/AppHeader'
import { Card, Row, Col, Tooltip } from 'antd'
import UploadButton from './components/UploadButton'
import TableActions from './components/TableActions'

import './App.css'
import "antd/dist/antd.css"

function App() {
  const [data, setData] = useState(null)
  const [fileData, setFileData] = useState(null)
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [chartType, setChartType] = useState('outcome')
  const [isPieChartTooltipVisible, setIsPieChartTooltipVisible] = useState(false)
  const [isLineChartTooltipVisible, setIsLineChartTooltipVisible] = useState(false)
  const [isChosenList, setIsChosenList] = useState('transactions')
  const isIncomeChartType = (chartType === 'income')

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

  if (data === null) {
    return <div>Loading...</div>
  }

  let pieChartTimer = 0
  let lineChartTime = 0

  return (
    <div className='appContainer'>
      <Row gutter={[25, 25]}>
        <Col span={24}>
          <AppHeader chartType={chartType} setChartType={setChartType} />
        </Col>
        <Col span={12}>
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
        <Col span={12}>
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
