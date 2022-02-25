import React, { useState } from 'react';
import { Tabs } from 'antd';

export default function TopTabs() {
  const [currentTab, setCurrentTab] = useState<string>('0');
  const { TabPane } = Tabs;
  const tabList = [
    { key: '0', tabName: '社区' },
    { key: '1', tabName: '算法服务' },
    { key: '2', tabName: '个人中心' }
  ];

  const onClick = (key: string) => {
    setCurrentTab(key);
    console.info(currentTab);
  };

  return (
    <>
      <Tabs onTabClick={onClick}>
        {tabList.map(item => (
          <TabPane tab={item.tabName} key={item.key}></TabPane>
        ))}
      </Tabs>
    </>
  );
}
