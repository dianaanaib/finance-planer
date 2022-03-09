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

const ChartToolbar = ({ chartType, setChartType, onChartClick, activeCharts }) => {

	console.log('activeCharts', activeCharts)
	const isActiveChart = (chartName) => Boolean(activeCharts?.find(chart => chart === chartName))

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
					<PieChartOutlined
						style={isActiveChart('pie') ? { color: '#53c7f5' } : { color: 'black' }}
						onClick={() => onChartClick('pie')} />
					<LineChartOutlined
						style={isActiveChart('line') ? { color: '#53c7f5' } : { color: 'black' }}
						onClick={() => onChartClick('line')} />
					<BarChartOutlined
						style={isActiveChart('column') ? { color: '#53c7f5' } : { color: 'black' }}
						onClick={() => onChartClick('column')} />
					<AreaChartOutlined
						style={isActiveChart('stackedArea') ? { color: '#53c7f5' } : { color: 'black' }}
						onClick={() => onChartClick('stackedArea')} />
				</div>
			</div>
		</div>
	)
}

export default ChartToolbar