import * as Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import SideBarConfig from '../../config/index'
import React from 'react';
import { useSelector } from 'react-redux';


// 从 Layout 中解构出 Sider
const { Sider } = Layout;

// 处理 config 组件

/**将 icon 字符串转成组件 */
const iconToElement = (icon) => React.createElement(Icon[icon])
const items = SideBarConfig.map(i => {
  // 没有子菜单
  const chil = {
    key: i.path,
    icon: iconToElement(i.icon),
    label: i.label
  }
  // 有子菜单的情况
  if (i.children) {
    chil.children = i.children.map(c => {
      return {
        key: c.path,
        icon: iconToElement(c.icon),
        label: c.label
      }
    })
  }
  return chil
})

export default function LayoutMenu() {
const collapse = useSelector((state) => state.tab.isCollapse)

  return (
    <Sider trigger={null} collapsible collapsed={collapse}>
      <h3 className='app-name'>{collapse ? '后台' : '后台管理系统'}</h3>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
        style={{ height: '100%' }}
      />
    </Sider>
  )
}
