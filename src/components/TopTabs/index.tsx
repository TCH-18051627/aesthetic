import React, { useState } from 'react';
import { Tabs, Menu, Dropdown } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import {
  TabsWrap,
  CommunityTab,
  AlgorithmTab,
  UserCenterTab,
  CommunityIcon,
  UserCenterIcon,
  AlgorithmIcon,
  MenuIcon
} from './style';
import { MenuInfo } from './interface';

export default function TopTabs() {
  const initPath = window.location.href.split('/').pop();
  const navigate = useNavigate();
  const [state, setState] = useState(initPath);
  const { TabPane } = Tabs;

  const onTabChanged = (key?: string) => {
    setState(key);
    key !== 'evaluate' && navigate(key || '');
  };

  const onMenuClick = (props?: MenuInfo) => {
    const info = props;
    setState(info?.key);
    navigate(info?.key || '');
  };

  const algorithmList = [
    { key: 'evaluate', title: '图像美学评价' },
    { key: 'generation', title: '美学图像生成' },
    { key: 'enhance', title: '图像美学增强' },
    { key: 'classify', title: '图像美学分类' }
  ];
  const menu = (
    <Menu onClick={onMenuClick}>
      {algorithmList.map(item => (
        <Menu.Item key={item.key}>
          <Link to={item.key}>
            <MenuIcon className={`iconfont icon-${item.key}`} />
            {item.title}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  const DropdownList = (
    <Dropdown overlay={menu} placement="bottomCenter">
      <AlgorithmTab>
        <AlgorithmIcon className="iconfont icon-suanfa2" />
        算法服务
      </AlgorithmTab>
    </Dropdown>
  );

  const tabList = [
    {
      key: 'community',
      tabNode: (
        <CommunityTab>
          <CommunityIcon className="iconfont icon-shequ" />
          社区
        </CommunityTab>
      )
    },
    { key: 'evaluate', tabNode: DropdownList },
    {
      key: 'user',
      tabNode: (
        <UserCenterTab>
          <UserCenterIcon className="iconfont icon-gerenzhongxin2" />
          个人中心
        </UserCenterTab>
      )
    }
  ];

  return (
    <TabsWrap>
      <Tabs onChange={onTabChanged}>
        {tabList.map(item => (
          <TabPane tab={item.tabNode} key={item.key}>
            {item.key !== 'evaluate' && <Link to={item.key}></Link>}
          </TabPane>
        ))}
      </Tabs>
    </TabsWrap>
  );
}
