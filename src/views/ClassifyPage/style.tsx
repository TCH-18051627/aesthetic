import styled from 'styled-components';
import {
  List,
  Button,
  Input,
  Checkbox,
  Collapse,
  Tag,
  Tabs,
  Layout
} from 'antd';

export const UIListHeader = styled(List)`
  border-bottom: none;
  border-radius: 2px 2px 0 0;
`;

export const UICollapse = styled(Collapse)`
  margin-top: -1px;
  border-radius: 0;
`;

export const UIListBodyStyle = { border: 'none', padding: '0' };

export const UIListItemStyle = { padding: '0', margin: '0' };

export const UIdisplayImg = styled.img`
  width: 240px;
  height: 220px;
`;

export const UIChartsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
  width: 200px;
  height: 220px;
  border: none;
  flex-flow: wrap;
`;

export const UIAttriButeTag = styled(Tag)`
  display: flex;
  justify-content: center;
  color: #fff;
  padding-top: 4px;
  font-size: 16px;
  line-height: 16px;
  height: 32px;
  width: 144px;
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

export const UIImageTabs = styled(Tabs)`
  border: 1px solid #d9d9d9;
  border-top: none;
  .ant-tabs-nav {
    margin: 0 0 4px 0;
  }
`;

export const UIImgPageWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const UIImgCol = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  :after {
    content: ' ';
    flex-grow: 99999;
  }
`;

export const UIImgWrap = styled.div`
  flex-grow: 1;
  margin: 2px;
  position: relative;
  overflow: hidden;

  :hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.4s;
  }
`;

export const UIImgItem = styled.img`
  height: 160px;
  min-width: 100%;
  object-fit: cover;
`;

export const UIHover = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.4s;

  :hover {
    background-color: #4d4d4d4c;
  }
  :hover .text {
    transition: all 0.4s;
    opacity: 1;
  }
`;

export const UIHoverText = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 30px;
  text-align: center;
  color: #fff;
  opacity: 0;
  /* height: 0; */
`;

export const UIPaginationWrap = styled.div`
  margin: 20px 0;
`;

export const UISubmitButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 2px;
`;

export const UITextAreaWrap = styled.div`
  padding: 8px;
`;

export const UITextAreaStyle = { height: '300px', width: '800px' };

export const UITestImgWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const UITestImg = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const UIDrawerText = styled.p`
  font-size: 18px;
`;

export const UIExampleArea = styled.div`
  position: relative;
  padding: 0px;
  overflow: hidden;
  text-align: center;
  background: #fafafa;
  border: 0px solid #ebedf0;
  border-radius: 2px;
`;

export const UIMidBody = styled.div`
  display: flex;
`;

export const UILeftArea = styled.div`
  width: 40%;
`;

export const UIRightArea = styled.div`
  width: 60%;
  position: relative;
  padding-left: 5px;
  overflow: hidden;
  text-align: center;
  background: #fafafa;
  border: 0px solid #ebedf0;
  border-radius: 2px;
`;
