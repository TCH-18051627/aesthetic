import styled from 'styled-components';
import { Button, Input, Layout, Card, Pagination } from 'antd';

const { Header, Sider, Content } = Layout;

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
  margin-left:100px ;
`;

export const HeaderStyle = styled(Header)`
  padding: 0px 16px ;
  background: rgb(88, 157, 248); 
  .anticon-menu-unfold,.anticon-menu-fold{
    color:white;
    float:left;
    margin-top:25px;
  }
  .ant-breadcrumb{
    width: 150px;
    height:64px;
    line-height:64px;
    float: left;
    margin-left:10px;
  }
  .ant-dropdown-trigger{
    color:white;
    float: right;
  }
`;

export const LayoutStyle = styled(Layout)`
  height:100%;
`;

export const SiderStyle = styled(Sider)`
  .logo{
    height: 64px;
    line-height: 64px;
    background-color:white;
    font-size: 14px;
    text-align: center;
    overflow:hidden;
  }
  ul{
    height:100%;
  }
  ul svg{
    color:rgb(106, 151, 188)
  }
`;

export const ContentStyle = styled(Content)`
  background-color:white;
  padding:30px 50px;
`;

export const CardStyle = styled(Card)`
  .ant-card-body{
    padding: 20px;
    position: relative;
  }
  .ant-card-body a{
    position: absolute;
    top: 30%;
    right: 10px;
  }  
  img{
    padding: 20px 20px 0px 20px ;
    height: 240px;
    }
`;

export const PaginationStyle = styled(Pagination)`
  margin-left: 35%; 
`;
