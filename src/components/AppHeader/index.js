import { PageHeader, Tag, Avatar } from 'antd';
import './index.css';
import DropdownMenu from './dropdownMenu';
import RoundedIconButtons from './roundedIconButtons';
import ChartToolbar from './chartToolbar'

const AppHeader = ({ chartType, setChartType, onChartClick, activeCharts }) => {


  return (
    <>
      <PageHeader
        className='pageHeader'
        title="Finance Space"
        subTitle="Unearthly Reliability"
        tags={<Tag color="#63DAAB">Running</Tag>}
        extra={[
          <div>
            <Avatar src="https://joeschmoe.io/api/v1/random" />

            Bob Marley

            <DropdownMenu key="more" className='dropdown' />
          </div>
        ]}
      >
      </PageHeader>
      <div className='underHeadContainer'>
        <RoundedIconButtons />
        <ChartToolbar activeCharts={activeCharts} onChartClick={onChartClick} chartType={chartType} setChartType={setChartType} />
      </div>
    </>
  )
}

export default AppHeader