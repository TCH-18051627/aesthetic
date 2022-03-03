import styled from 'styled-components';
import { Button, Input, Checkbox } from 'antd';

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
  width: 400px;
  height: 270px;
  border: none;
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
