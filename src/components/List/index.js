import React, { useState, useEffect } from 'react'
import { Col, List, Row } from 'antd'

import './index.css'

const TransactionsList = ({ data }) => {
  if (Array.isArray(data)) {
    data.sort((a, b) => {
      return new Date(b?.bankStatement?.date) - new Date(a?.bankStatement?.date)
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
        dataSource={data}
        renderItem={item => {
          const { bankStatement } = item || {}
          const { date, name: orderName, amount } = bankStatement || {}
          return <List.Item className="ant-list-item-no-flex">
            <Row>
              <Col span={4}>{date}</Col>
              <Col span={4}>{orderName}</Col>
              <Col style={{ textAlign: "right", color: amount > 0 ? "green" : "red" }} span={16}>{amount}</Col>
            </Row>
          </List.Item>
        }}
      />
    </div >
  )
}

export default TransactionsList