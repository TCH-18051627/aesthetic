import styled from 'styled-components';
import { Button, Input, Layout, Card, Pagination } from 'antd';

const { Header, Sider, Content } = Layout;

export const UIHeaderWrap = styled.div`
  display: flex;
`;

export const AlgorithmButton = styled(Button)`
  float: left;
  width: 250px;
`;

export const DataInput = styled(Input)`
  width: 300px;
  margin: 0 10px;
`;

export const SearchButton = styled(Button)`
  margin: 0 40px;
`;

export const AddButton = styled(Button)`
  width: 200px;
  margin-left: 100px;
`;

export const ContentStyle = styled(Content)`
  background-color: white;
  padding: 0 50px;
`;

export const CardStyle = styled(Card)`
  .ant-card-body {
    padding: 20px;
    position: relative;
  }
  .ant-card-body a {
    position: absolute;
    top: 30%;
    right: 10px;
  }
  img {
    padding: 20px 20px 0px 20px;
    height: 240px;
  }
`;

export const PaginationStyle = styled(Pagination)`
  margin-left: 35%;
`;
