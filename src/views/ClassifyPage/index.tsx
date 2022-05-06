import React, { useMemo, useRef, useState } from 'react';
import {
  Upload,
  message,
  Modal,
  Collapse,
  Tabs,
  Drawer,
  Button,
  Input,
  Tag,
  Pagination
} from 'antd';
import {
  UploadOutlined,
  DownloadOutlined,
  PlusOutlined
} from '@ant-design/icons';
import Loading from '@/components/Loading';
import { imageTags, attrList } from './testData/data';
import { getBase64 } from './util';
import testImage from '@/assets/images/y1.jpg';

import {
  UIListHeader,
  UploadWrap,
  UIpreviewImg,
  UploadButton,
  UIUrlInput,
  ClearButton,
  UIExportButton,
  UILineWrap,
  UIdisplayImg,
  UIChartsWrap,
  UICollapse,
  UIListBodyStyle,
  UIListItemStyle,
  UIAttriButeTag,
  UIImageTabs,
  UIImgWrap,
  UIImgItem,
  UIImgPageWrap,
  UIImgCol,
  UIHover,
  UIHoverText,
  UIPaginationWrap,
  UISubmitButton,
  UITextAreaWrap,
  UITextAreaStyle,
  UITestImgWrap,
  UITestImg,
  UIDrawerText,
  UIExampleArea,
  UIRightArea,
  UILeftArea,
  UIMidBody
} from './style';
import { getAttrLabels } from '@/utils/valid';

const { Panel } = Collapse;
const { TabPane } = Tabs;
const { TextArea } = Input;

export default function ClassifyPage() {
  // 遮罩层的开关state
  // const [previewVisible, setpreviewVisible] = useState<boolean>(false);
  // 预览图片及上传图片
  const [previewImage, setpreviewImage] = useState<string>('');
  // 上传图片左侧弹出的列表 默认number[]
  const [fileList, setFileList] = useState([]);
  // 上传后回显至样例模块的分类列表
  const [resList, setResList] = useState<string[]>(imageTags);
  // 上传后回显至页面的图像
  // 上传中...加载状态.....
  const [upImgloading, setUpImgloading] = useState<boolean>(false);

  // 图片数据分页初始index
  const [preIndex, setPreIndex] = useState<number>(0);
  // 图片数据分页结尾index
  const [nextIndex, setNextIndex] = useState<number>(10);
  // 当前页数
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [drawerVisible, setdrawerVisible] = useState<boolean>(false);

  const [imgTags, setImageTags] = useState(imageTags);
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const [tagInputVisible, setTagInputVisible] = useState<boolean>(false);
  const [tagInputValue, setTagInputValue] = useState<string>('');
  const tagRef = useRef();

  const placedImage = useMemo(() => {
    return !previewImage ? testImage : previewImage;
  }, [previewImage]);

  // 判断上传图片拦截方法
  const handleUploadChange = async ({ file, fileList }: any) => {
    // { file, fileList }
    // 看官方文档 第一个 file 获取上传文件信息
    // 第二个 fileList 获取的是当前上传成功的图片对象
    console.info('------------file--------------', file, fileList);

    // 判断图片格式是否为jpeg
    const isJpgOrPng = file.type === 'image/jpeg' || 'image/png';
    if (!isJpgOrPng) {
      message.error('文件格式不正确，仅支持jpg和png！');
      return isJpgOrPng;
    }

    // 判断图片大小是否小于等于1MB
    const isLt50K = file.size <= 1024 * 624 * 8;
    if (!isLt50K) {
      message.error('文件大小不得超过1MB!');
      return isLt50K;
    }

    // 当上方拦截器都未触发 则执行此判断
    if (isJpgOrPng && isLt50K) {
      // 其次更新上传图片列表 并重新渲染render()
      setFileList(fileList);

      // 如果上传状态为uploading
      if (file.status === 'uploading') {
        // 则上传按钮加载中.....
        setUpImgloading(true);
        if (!file.url && !file.preview) {
          // 这里是调用本地弹窗获取本地图片路径 并且上传到file 原型链中
          // 预览的图片 调用异步方法 getBase64 获取到文件详情
          file.preview = await getBase64(file.originFileObj);
        }
        // state存放当前上传图片的地址 或者 图片的预览地址
        setpreviewImage(file.url || file.preview);
        return;
      }
      // 如果上传状态为done
      if (file.status === 'done') {
        // 则上传按钮加载完成
        setUpImgloading(false);
        setResList(getAttrLabels(file.response.attrList));
      }
    }
  };

  //   点击上传时触发事件函数
  // const handlePreview = async (file: any) => {
  //   // 点击获取本地弹窗 并且获取本地待上传的文件路径
  //   if (!file.url && !file.preview) {
  //     // 这里是调用本地弹窗获取本地图片路径 并且上传到file 原型链中
  //     // 预览的图片 调用异步方法 getBase64 获取到文件详情
  //     file.preview = await getBase64(file.originFileObj);
  //   }

  //   // state存放当前上传图片的地址 或者 图片的预览地址
  //   setpreviewImage(file.url || file.preview);
  //   // 是否显示模态框
  //   setpreviewVisible(true);
  //   // 模态框标题名字
  //   setpreviewTitle(
  //     file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
  //   );
  // };

  const handlePageChange = (value: number) => {
    setCurrentPage(value);
    if (value <= 1) {
      setPreIndex(0);
      setNextIndex(10);
    } else {
      setPreIndex((value - 1) * 10);
      setNextIndex((value - 1) * 10 + 10);
    }
  };

  const handleTagTabsChange = () => {
    setCurrentPage(1);
    setPreIndex(0);
    setNextIndex(10);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...imgTags];
    newTags[editInputIndex] = editInputValue;

    setImageTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue('');
  };

  const handleInputConfirm = () => {
    let newImgTags;
    if (tagInputValue && imgTags.indexOf(tagInputValue) === -1) {
      newImgTags = [...imgTags, tagInputValue];
    }
    console.log(imgTags);
    setImageTags(newImgTags);
    setImageTags(imgTags);
    setTagInputVisible(false);
    setEditInputValue('');
  };

  const UploadHeader = () => {
    return (
      <UploadWrap>
        <>
          <Upload
            name="classify"
            // 图片上传服务器地址
            action="/uploadClassifyImage"
            // 图片上传类型
            // listType="picture-card"
            // 上传列表
            fileList={fileList}
            // 点击触发遮罩层方法 更新遮罩层 图片以及标题
            // onPreview={handlePreview}
            // 点击触发上传图片方法 判断格式 以及 文件大小 并且 更新上传图片
            onChange={handleUploadChange}
            // 本地弹窗获取本地图片时 可获取的后缀
            accept=".jpg,.jpeg,.png"
            // 不显示文件列表
            showUploadList={false}
          >
            <UploadButton icon={<UploadOutlined />}>上传图像</UploadButton>
          </Upload>
          {/* 点击清空内容 */}
          <ClearButton
            type="primary"
            onClick={() => {
              // 清空上传图片列表数据
              setFileList([]);
            }}
          >
            清空
          </ClearButton>

          <UIUrlInput placeholder="搜索具有某种属性的图像"></UIUrlInput>
          <ClearButton type="primary">搜索</ClearButton>
          <UIExportButton icon={<DownloadOutlined />}>
            导出为Excel
          </UIExportButton>
        </>
        {/* <Modal
          // 模态框是否显示
          visible={previewVisible}
          // 模态框标题
          title={previewTitle}
          // 模态框页脚
          footer={null}
          // 模态框点击右上角关闭模态框
          onCancel={() => setpreviewVisible(false)}
        >
          <UIpreviewImg alt="example" src={previewImage} />
        </Modal> */}
      </UploadWrap>
    );
  };

  const DrawerBlock = () => {
    return (
      <Drawer
        title="识别结果"
        placement="right"
        closable={false}
        onClose={() => {
          setdrawerVisible(false);
        }}
        visible={drawerVisible}
        getContainer={false}
        style={{ position: 'absolute', opacity: '0.7' }}
        maskStyle={{ backgroundColor: 'transparent' }}
        contentWrapperStyle={{ width: '200px' }}
      >
        {resList.map(attr => (
          <UIDrawerText key={attr}>{attr}</UIDrawerText>
        ))}
      </Drawer>
    );
  };

  const ImageTabList = () => {
    return (
      <UIImageTabs type="card" size="large" onChange={handleTagTabsChange}>
        {attrList.map(item => (
          <TabPane tab={item.label} key={item.attrId}>
            <UIImgPageWrap>
              <UIImgCol>
                {item.imageList
                  .slice(preIndex, Math.min(item.imageList.length, nextIndex))
                  .map(itemImg => (
                    <UIImgWrap key={itemImg.id}>
                      <UIImgItem src={itemImg.imgUrl} />
                      <UIHover>
                        <UIHoverText className="text">样例</UIHoverText>
                      </UIHover>
                    </UIImgWrap>
                  ))}
              </UIImgCol>
              <UIPaginationWrap>
                <Pagination
                  size="small"
                  current={currentPage}
                  defaultCurrent={1}
                  defaultPageSize={10}
                  onChange={handlePageChange}
                  total={item.imageList.length}
                  showSizeChanger
                  showQuickJumper
                  showTotal={total => `共 ${total} 张`}
                />
              </UIPaginationWrap>
            </UIImgPageWrap>
          </TabPane>
        ))}
      </UIImageTabs>
    );
  };

  return (
    <>
      <UIListHeader header={UploadHeader()} bordered dataSource={['1']} />
      <UIMidBody>
        <UILeftArea>
          <UIExampleArea>
            {upImgloading ? <Loading /> : <></>}
            <UITestImgWrap
              onClick={() => {
                setdrawerVisible(true);
              }}
            >
              <UITestImg src={placedImage} />
            </UITestImgWrap>
            {DrawerBlock()}
          </UIExampleArea>
        </UILeftArea>
        <UIRightArea>{ImageTabList()}</UIRightArea>
      </UIMidBody>
    </>
  );
}
