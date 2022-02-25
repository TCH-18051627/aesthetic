// import React from 'react';
import { Button } from 'antd';
import Header from '@/components/Header';
import { HomePageWrap } from './style';

export default function HomePage() {
  // const [title, setTitle] = useState<string>('美学评价平台');
  // const onClick = (v: any) => {
  //   setTitle('美学分析');
  // };

  return (
    <HomePageWrap>
      <Header></Header>
      <Button>antd-button</Button>
    </HomePageWrap>
  );
}
