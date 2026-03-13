import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

// 从 Layout 中解构出 Sider
const { Sider } = Layout;
export default function LayoutMenu({ collapsed }) {
  return (
    <Sider trigger={null} collapsible collapsed={false}>
        <h3 className='app-name'>后台管理系统</h3>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
          style={{ height: '100%' }}
        />
      </Sider>
  )
}
