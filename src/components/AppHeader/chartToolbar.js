import { FallOutlined, FundViewOutlined, RiseOutlined } from '@ant-design/icons'

const ChartToolbar = ({ chartType, setChartType }) => {

    return (
        <div className='chartToolbar'>
            {
                (chartType === 'outcome')
                    ? <FallOutlined style={{ fontSize: '20px' }} onClick={() => setChartType('income')} />
                    : <RiseOutlined style={{ fontSize: '20px' }} onClick={() => setChartType('outcome')} />
            }
            <FundViewOutlined style={{ fontSize: '20px' }} />
        </div>
    )
}

export default ChartToolbar