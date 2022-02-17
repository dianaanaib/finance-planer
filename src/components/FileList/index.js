import React from 'react'
import { Col, List, Row } from 'antd'

const FileList = ({ data }) => {
	console.log('data', data)
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
					return <List.Item className="ant-list-item-no-flex">
						<Row>
							<Col>{item}</Col>
						</Row>
					</List.Item>
				}}
			/>
		</div >
	)
}

export default FileList