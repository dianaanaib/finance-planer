import { FallOutlined, FundViewOutlined, RiseOutlined } from '@ant-design/icons'

const ChartToolbar = ({ chartType, setChartType }) => {

	return (
		<div className='chartToolbar'>
			{
				(chartType === 'outcome')
					? <FallOutlined
						className='fallOutlined'
						style={{ fontSize: '20px', color: '#1890ff' }}
						onClick={() => setChartType('income')} />
					: <RiseOutlined
						className='riseOutlined'
						style={{ fontSize: '20px', color: '#4cb68b' }}
						onClick={() => setChartType('outcome')}
					/>
			}
			<FundViewOutlined className='fundViewOutlined' style={{ fontSize: '20px' }} />
		</div>
	)
}

export default ChartToolbar