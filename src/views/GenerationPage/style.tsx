import styled from 'styled-components';
import { Button, InputNumber, Dropdown, Card } from 'antd';

export const GenerateWrap = styled.div`
  display: flex;
  justify-content: center;
`;
// 选择下拉框是按钮
export const SelectButton = styled(Button)``;

// 选择生成类型框
export const TypeDropdown = styled(Dropdown)`
  margin: 0 20px;
  width: 150px;
`;
// 选择生成模型框
export const ModelDropdown = styled(Dropdown)`
  //margin-left: 0px;
  width: 150px;
`;

export const GenerateButton = styled(Button)`
  margin: 0 20px;
  width: 100px;
`;
// 生成图片数量
export const ImageInputNumber = styled(InputNumber)`
  margin-left: 60px;
  width: 260px;
`;

export const ImgCard = styled(Card)`
  width: 100%;
  text-align: center;
`;
