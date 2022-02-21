import React from 'react'
import { Tooltip } from 'antd'
import {
	FallOutlined,
	FundViewOutlined,
	RiseOutlined,
	AreaChartOutlined,
	BarChartOutlined,
	PieChartOutlined,
	LineChartOutlined
} from '@ant-design/icons'

const ChartToolbar = ({ chartType, setChartType }) => {

	return (
		<div className='chartToolbar'>
			{
				(chartType === 'outcome')
					? <Tooltip title='Switch outcome to income' mouseEnterDelay={1.5} mouseLeaveDelay={0.3}>
						<FallOutlined
							className='fallOutlined'
							style={{ fontSize: '20px', color: '#1890ff' }}
							onClick={() => setChartType('income')} />
					</Tooltip>
					: <Tooltip title='Switch income to outcome' mouseEnterDelay={1.5} mouseLeaveDelay={0.3}>
						<RiseOutlined
							className='riseOutlined'
							style={{ fontSize: '20px', color: '#4cb68b' }}
							onClick={() => setChartType('outcome')}
						/>
					</Tooltip>

			}
			<div className='chartsMenuContainer'>
				<FundViewOutlined
					className='fundViewOutlined'
					style={{ fontSize: '20px' }}
				/>
				<div className='chartsGroup'>
					<PieChartOutlined /><LineChartOutlined /><BarChartOutlined /><AreaChartOutlined />
				</div>
			</div>
		</div>
	)
}

export default ChartToolbar