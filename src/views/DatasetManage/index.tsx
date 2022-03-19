import { useState } from 'react';
import { Layout, Menu, Dropdown, Breadcrumb, Card, List } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DownOutlined,
  HomeOutlined,
  PictureOutlined,
  CodepenCircleOutlined,
  CloudSyncOutlined,
  ShopFilled,
  SketchCircleFilled
} from '@ant-design/icons';
import {
  AlgorithmButton,
  DataInput,
  AddButton,
  SearchButton,
  HeaderStyle,
  LayoutStyle,
  SiderStyle,
  ContentStyle,
  CardStyle,
  PaginationStyle
}
  from './style';
const { Meta } = Card;
const TopHeader = (props) => {
  const p = props;
  function changeCollapsed() {
    p.setstate(!p.state);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        111
      </Menu.Item>
      <Menu.Item>
        222
      </Menu.Item>
      <Menu.Item danger>exit</Menu.Item>
    </Menu>
  );
  return (
    <HeaderStyle>
      {
        p.state ? <MenuUnfoldOutlined onClick={() => changeCollapsed()} /> : <MenuFoldOutlined onClick={() => changeCollapsed()} />
      }
      <Breadcrumb >
        <Breadcrumb.Item>
          <a href="">数据集</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href=''>数据集列表</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <UserOutlined />Hover<DownOutlined />
        </a>
      </Dropdown>
    </HeaderStyle>
  );
};

const SideMenu = (props) => {
  const p = props;
  return (
    <SiderStyle trigger={null} collapsible collapsed={p.state}>
      <div className="logo" >深度学习平台</div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          首页
        </Menu.Item>
        <Menu.Item key="2" icon={<PictureOutlined />}>
          数据集
        </Menu.Item>
        <Menu.Item key="3" icon={<CodepenCircleOutlined />}>
          训练
        </Menu.Item>
        <Menu.Item key="4" icon={<CloudSyncOutlined />}>
          在线化服务
        </Menu.Item>
        <Menu.Item key="5" icon={<ShopFilled />}>
          自助算法任务
        </Menu.Item>
        <Menu.Item key="6" icon={<SketchCircleFilled />}>
          k8s监控台
        </Menu.Item>
      </Menu>
    </SiderStyle>
  );
};

const MidContent = () => {
  const menu = (
    <Menu >
      <Menu.Item key="1" >
        算法一
      </Menu.Item>
      <Menu.Item key="2" >
        算法二
      </Menu.Item>
      <Menu.Item key="3">
        算法三
      </Menu.Item>
    </Menu>
  );
  const initialState = [
    {
      imgurl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '车辆检测测试数据集',
      description: '车辆检测'
    },
    {
      imgurl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '车辆检测',
      description: '车辆检测'
    },
    {
      imgurl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '测试数据集-1',
      description: '1'
    },
    {
      imgurl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '猫狗测试数据集',
      description: '图像聚类算法提升标注效率演示'
    },
    {
      imgurl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '人脸检测',
      description: '人脸检测'
    },
    {
      imgurl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '行人检测',
      description: '行人检测'
    },
    {
      imgurl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '美食',
      description: '判断是否是美食图片'
    },
    {
      imgurl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '猫狗分类',
      description: '猫狗分类'
    },
    {
      imgurl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '猫狗分类',
      description: '猫狗分类'
    },
    {
      imgurl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '猫狗分类',
      description: '猫狗分类'
    },
    {
      imgurl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '猫狗分类',
      description: '猫狗分类'
    },
    {
      imgurl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: '猫狗分类',
      description: '猫狗分类'
    }
  ];
  const [data, setdata] = useState(initialState);
  const SelectHeader = () => {
    return (
      <>
        <Dropdown overlay={menu}>
          <AlgorithmButton className='selectbtn'>
            请选择算法类型 <DownOutlined />
          </AlgorithmButton>
        </Dropdown>
        <DataInput placeholder="请输入创建者名称" />
        <DataInput placeholder="请输入数据集名称" />
        <SearchButton type='primary' className='searchbtn'>搜索</SearchButton>
        <AddButton type='primary' className='addbtn'>新增数据集</AddButton>
      </>
    );
  };
  const ImgCard = (props) => {
    const data = props;
    return (
      <CardStyle
        className='imgcard'
        hoverable
        style={{ width: 250 }}
        cover={<img alt="example" src={data.props.imgurl} />}
      >
        <Meta title={data.props.title} description={data.props.description} />
        <a href='https://baidu.com'>查看详情</a>
      </CardStyle>
    );
  };
  return (
    <ContentStyle>
      <List
        header={SelectHeader()}
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={data => (
          <List.Item>
            <ImgCard props={data}></ImgCard>
          </List.Item>
        )
        }
      />
      <PaginationStyle
        total={9}
        pageSize={8}
        showQuickJumper
        showTotal={total => `共 ${total} 条`}
      />
    </ContentStyle>
  );
};

export default function DatasetMange() {
  const [state, setstate] = useState(false);

  return (
    <>
      <LayoutStyle>
        <SideMenu state={state} ></SideMenu>
        <Layout>
          <TopHeader setstate={setstate} state={state} ></TopHeader>
          <MidContent></MidContent>
        </Layout>
      </LayoutStyle>
    </>
  );
}
