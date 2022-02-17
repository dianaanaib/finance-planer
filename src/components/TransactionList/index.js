import React from 'react'
import { Col, List, Row, Tag } from 'antd'
import { assignColorByCategory } from '../../utils/colorAssign'

import './index.css'

const TransactionList = ({ data, categoryFilter }) => {
  const list = (categoryFilter) ? data.filter(i => i.category === categoryFilter) : data

  if (Array.isArray(list)) {
    data.sort((a, b) => {
      return new Date(b?.date) - new Date(a?.date)
    })
  }

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto'
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => {
          const { date, name: orderName, amount, category } = item || {}
          return <List.Item className="ant-list-item-no-flex">
            <Row>
              <Col span={4}>{date}</Col>
              <Col span={4}>{orderName}</Col>
              <Col span={1}><Tag color={assignColorByCategory(category)}>{category}</Tag></Col>
              <Col style={{ textAlign: "right", color: amount > 0 ? "#389e0d" : "#f5222d" }} span={15}>
                {(amount > 0)
                  ? `+${amount}`
                  : amount
                }
              </Col>
            </Row>
          </List.Item>
        }}
      />
    </div >
  )
}

export default TransactionList