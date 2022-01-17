import React, { useState, useEffect } from 'react'
import { List, Skeleton } from 'antd'
import './index.css'

const TransactionsList = () => {
    const dummy = [
        {
            title: 'Title 1',
            info: 'Info 1'
          },
          {
            title: 'Title 2',
            info: 'Info 2'
          },
          {
            title: 'Title 3',
            info: 'Info 3'
          },
          {
            title: 'Title 4',
            info: 'Info 4'
          }
    ]

    return (
        <List
            itemLayout="horizontal"
            dataSource={dummy}
            renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.info}
                  />
                </List.Item>
              )}
        />
    )
}

export default TransactionsList