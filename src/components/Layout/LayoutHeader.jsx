import React from 'react'
const { Header, Sider, Content } = Layout;
import { Button, Layout, Menu, theme } from 'antd';
import { Dropdown } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import './layout.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {collapseMenu} from '../../store/reducers/tab'

export default function LayoutHeader() {
   const dispatch = useDispatch()

const collapse = useSelector((state) => state.tab.isCollapse)

    const items = [
        {
            key: '1',
            label: '个人中心',
        },
        {
            key: '2',
            label: '退出',
        }
    ]
    const setCollapse = () => {
        dispatch(collapseMenu())
    }
    return (
        <Header className='header-container'>
            <Button
                type="text"
                icon={<MenuFoldOutlined />}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff'
                }}
                onClick={setCollapse}
            />
            <Dropdown menu={{ items }}>
                <Avatar size={36} icon={<UserOutlined />} />
            </Dropdown>

        </Header>
    )
}
