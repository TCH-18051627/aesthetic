import styled from 'styled-components';
import { Button, Input } from 'antd';

export const UploadWrap = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

export const UploadButton = styled(Button)``;

export const ClearButton = styled(Button)`
  margin: 0 40px;
`;

export const UIpreviewImg = styled.img`
  width: 100%;
`;

export const UIUrlInput = styled(Input)`
  width: 260px;
`;

export const UIdisplayImg = styled.img`
  width: 360px;
`;

export const UIChartsWrap = styled.div`
  width: 30%;
  height: 270px;
  border: none;
`;
