import { Menu, Dropdown, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const DropdownMenu = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank">
          Personalisierung
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank">
          Einstellungen
        </a>
      </Menu.Item>
      <Menu.Item style={{ color: 'red' }}>
        <a target="_blank">
          Abmelden
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown key="more" overlay={menu}>
      <Button
        style={{
          border: 'none'
        }}
      >
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: 'top',
          }}
        />
      </Button>
    </Dropdown>
  )
}

export default DropdownMenu