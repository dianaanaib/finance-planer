import React, { useEffect, useState } from 'react'
import { getAllBankStatements } from './service'
import List from './components/List'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import AppHeader from './components/AppHeader'
import { Card, Button, Row, Col, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

import './App.css'
import "antd/dist/antd.css";

function App() {
  const [data, setData] = useState(null)
  const [categoryFilter, setCategoryFilter] = useState(null)

  useEffect(async () => {
    const result = await getAllBankStatements()
    const parsedResult = result.map(i => {
      return { ...i.bankStatement, amount: parseFloat(i.bankStatement.amount), category: i.category }
    })
    setData(parsedResult)
  }, [])

  if (data === null) {
    return <div>Loading...</div>
  }

  return (
    <div className='appContainer'>
      <Row gutter={[25, 25]}>
        <Col span={24}>
          <AppHeader />
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <PieChart data={data} setCategoryFilter={setCategoryFilter} />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <LineChart data={data} />
          </Card>
        </Col>
        <Col span={24}>
          <Card extra={
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          } className='transactionsList' bordered={false}>
            <List data={data} categoryFilter={categoryFilter} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
