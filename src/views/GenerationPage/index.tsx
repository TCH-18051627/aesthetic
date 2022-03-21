import React from 'react';
import { List, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { imgSource } from '@/views/GenerationPage/testData/data';
import {
  GenerateWrap,
  SelectButton,
  ImageInputNumber,
  GenerateButton,
  TypeDropdown,
  ModelDropdown,
  ImgCard
} from './style';

export default function GenerationPage() {
  // 选择生成模型菜单
  const menu1 = (
    <Menu>
      <Menu.Item key="1">
        模型1
      </Menu.Item>
      <Menu.Item key="2">
        模型2
      </Menu.Item>
      <Menu.Item key="3">
        模型3
      </Menu.Item>
    </Menu>
  );
  // 选择美学类型菜单
  const menu2 = (
    <Menu>
      <Menu.Item key="1">
        美学类型1
      </Menu.Item>
      <Menu.Item key="2">
        美学类型2
      </Menu.Item>
      <Menu.Item key="3">
        美学类型3
      </Menu.Item>
    </Menu>
  );
  const style = {
    margin: '0px',
    padding: '0px',
    background: 'rgb(68, 114, 196)',
    color: 'white',
    fontSize: '20px',
    width: '100%'
  };
  const { Meta } = ImgCard;
  const GenerateHeader = () => {
    return (
      <GenerateWrap>
        <>
          <ModelDropdown overlay={menu1} placement={'topLeft'}>
            <SelectButton>
              选择生成模型 <DownOutlined/>
            </SelectButton>
          </ModelDropdown>
          <TypeDropdown overlay={menu2} placement={'topCenter'}>
            <SelectButton>
              选择美学类型 <DownOutlined/>
            </SelectButton>
          </TypeDropdown>
          <ImageInputNumber min={1} max={10} defaultValue={3}/>
          <GenerateButton type="primary">开始生成</GenerateButton>
        </>
      </GenerateWrap>
    );
  };

  return (
    <>
      <List
        header={GenerateHeader()}
        bordered
        grid={{
          gutter: 24,
          column: 6
        }}
        dataSource={imgSource}
        renderItem={item => (
          <List.Item key={item.imageId}>
            <ImgCard
              hoverable
              bordered
              cover={<img src={item.imageUrl}/>}
              bodyStyle={style}
            >
              <Meta description={item.imageScore} style={style}></Meta>
            </ImgCard>
          </List.Item>
        )}
      />
    </>
  );
}
