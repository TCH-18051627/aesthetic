import styled from 'styled-components';
import { List, Button, Input, Checkbox, Collapse, Tag } from 'antd';

export const UIListHeader = styled(List)`
  border-bottom: none;
  border-radius: 2px 2px 0 0;
`;

export const UICollapse = styled(Collapse)`
  margin-top: -1px;
  border-radius: 0 0 2px 2px;
`;

export const UIListBodyStyle = { border: 'none', padding: '0' };

export const UIAttriButeTag = styled(Tag)`
  display: flex;
  justify-content: center;
  color: #fff;
  padding-top: 8px;
  font-size: 32px;
  line-height: 32px;
  height: 60px;
  width: 280px;
  border: 2px solid #3d5d96;
  border-radius: 8px;
`;

export const UploadWrap = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

export const UploadButton = styled(Button)``;

export const ClearButton = styled(Button)`
  margin: 0 10px;
`;

export const UIExportButton = styled(Button)`
  margin: 0 100px;
`;

export const UIpreviewImg = styled.img`
  width: 100%;
`;

export const UIUrlInput = styled(Input)`
  margin-left: 100px;
  width: 260px;
`;

export const UIdisplayImg = styled.img`
  width: 360px;
  margin-left: 15px;
`;

export const UIChartsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 30px;
  width: 700px;
  height: 270px;
  border: none;
  flex-flow: wrap;
`;

export const UILineWrap = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const UICheckbox = styled(Checkbox)`
  align-items: center;
`;

export const UIDownloadButton = styled(Button)`
  margin: 0 20px;
`;
