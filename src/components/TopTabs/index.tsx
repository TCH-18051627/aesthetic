import React, { useState } from 'react';
import { Tabs, Menu, Dropdown } from 'antd';
import { TabsWrap, CommunityTab, AlgorithmTab, PersonalTab } from './style';

export default function TopTabs() {
  const [currentTab, setCurrentTab] = useState<string>('0');
  const { TabPane } = Tabs;
  const menu = (
    <Menu>
      <Menu.Item>图像美学评价</Menu.Item>
      <Menu.Item>美学图像生成</Menu.Item>
      <Menu.Item>图像美学增强</Menu.Item>
      <Menu.Item>图像美学分类</Menu.Item>
    </Menu>
  );

  const onClick = (key: string) => {
    setCurrentTab(key);
    console.info(currentTab);
  };

  const DropdownList = (
    <Dropdown overlay={menu} placement="bottomCenter">
      <AlgorithmTab>算法服务</AlgorithmTab>
    </Dropdown>
  );

  const tabList = [
    { key: '0', tabNode: <CommunityTab>社区</CommunityTab> },
    { key: '1', tabNode: DropdownList },
    { key: '2', tabNode: <PersonalTab>个人中心</PersonalTab> }
  ];

  return (
    <TabsWrap>
      <Tabs onTabClick={onClick}>
        {tabList.map(item => (
          <TabPane tab={item.tabNode} key={item.key}></TabPane>
        ))}
      </Tabs>
    </TabsWrap>
  );
}
