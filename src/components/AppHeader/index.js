import { PageHeader, Tag, Avatar } from 'antd';
import './index.css';
import DropdownMenu from './dropdownMenu';
import RoundedIconButtons from './roundedIconButtons';

const AppHeader = () => {


  return (
    <>
      <PageHeader
        className='pageHeader'
        title="Finance Space"
        subTitle="Unearthly reliability"
        tags={<Tag color="#6395F9">Running</Tag>}
        extra={[
          <div>
            <Avatar src="https://joeschmoe.io/api/v1/random" />

            Bob Marley

            <DropdownMenu key="more" className='dropdown' />
          </div>
        ]}
      >
      </PageHeader>
      <RoundedIconButtons />
    </>
  )
}

export default AppHeader