import React, { useEffect, useState } from 'react';
import {
  List,
  Card,
  Upload,
  message,
  Modal,
  Collapse,
  Tabs,
  Pagination
} from 'antd';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';
import { imgScore, attrList } from './testData/data';
import { ImageAttributesType } from './interface';
import { getBase64 } from './util';
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
  UIPaginationWrap
} from './style';
import { random } from 'lodash';
import { getLabelColor } from '@/utils/valid';

const { Panel } = Collapse;
const { TabPane } = Tabs;

export default function ClassifyPage() {
  // 遮罩层的开关state
  const [previewVisible, setpreviewVisible] = useState<boolean>(false);
  // 遮罩层打开后显示的图片
  const [previewImage, setpreviewImage] = useState<string>('');
  // 遮罩层打开后显示的标题
  const [previewTitle, setpreviewTitle] = useState<string>('');
  // 上传图片左侧弹出的列表 默认number[]
  const [fileList, setFileList] = useState([]);
  // 上传后回显至下方的图像分类列表
  const [classifyImgList, setClassifyImgList] = useState([]);
  // 上传中...加载状态.....
  const [upImgloading, setUpImgloading] = useState<boolean>(false);

  // 图片数据分页初始index
  const [preIndex, setPreIndex] = useState<number>(0);
  // 图片数据分页结尾index
  const [nextIndex, setNextIndex] = useState<number>(15);

  // 判断上传图片拦截方法
  const handleChange = ({ file, fileList }: any) => {
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

    // 判断图片大小是否小于等于50k
    // 1默认为bit 最小单位
    // 1k = 1b * 624 b
    // 1m = 1k * 624 k
    const isLt50K = file.size <= 50 * 624;
    if (!isLt50K) {
      message.error('文件大小不得超过50k!');
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
        return;
      }
      // 如果上传状态为done
      if (file.status === 'done') {
        // 则上传按钮加载完成
        setUpImgloading(false);
        // 获取上传图片头部url + 图片路径地址
        const url =
          'http://rap2api.taobao.org/app/mock/280998/api/uploadClassifyImage/' +
          file.response.data.imgList?.[0].url;
        // 这里如果表单形式 可以用form回填
        console.info(url);
        setClassifyImgList(file.response.data.imgList);
      }
    }
  };

  //   点击上传时触发事件函数
  const handlePreview = async (file: any) => {
    // 点击获取本地弹窗 并且获取本地待上传的文件路径
    if (!file.url && !file.preview) {
      // 这里是调用本地弹窗获取本地图片路径 并且上传到file 原型链中
      // 预览的图片 调用异步方法 getBase64 获取到文件详情
      file.preview = await getBase64(file.originFileObj);
    }

    // state存放当前上传图片的地址 或者 图片的预览地址
    setpreviewImage(file.url || file.preview);
    // 是否显示模态框
    setpreviewVisible(true);
    // 模态框标题名字
    setpreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    );
  };

  const handlePageChange = (value: number) => {
    if (value <= 1) {
      setPreIndex(0);
      setNextIndex(15);
    } else {
      setPreIndex((value - 1) * 15);
      setNextIndex((value - 1) * 15 + 15);
    }
  };

  const UploadHeader = () => {
    return (
      <UploadWrap>
        <>
          <Upload
            name="headfile"
            // 图片上传服务器地址
            action="http://rap2api.taobao.org/app/mock/280998/api/uploadClassifyImage"
            // 图片上传类型
            // listType="picture-card"
            // 上传列表
            fileList={fileList}
            // 点击触发遮罩层方法 更新遮罩层 图片以及标题
            onPreview={handlePreview}
            // 点击触发上传图片方法 判断格式 以及 文件大小 并且 更新上传图片
            onChange={handleChange}
            // 本地弹窗获取本地图片时 可获取的后缀
            accept=".jpg,.jpeg,.png"
            // 可选中多条数据上传
            multiple={true}
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

          <UIExportButton icon={<DownloadOutlined />}>
            导出为Excel
          </UIExportButton>
        </>
        <Modal
          // 模态框是否显示
          visible={previewVisible}
          // 模态框标题
          title={previewTitle}
          // 模态框页脚
          footer={null}
          // 模态框点击右上角关闭模态框
          onCancel={() => setpreviewVisible(false)}
        >
          {/* 模态框打开后显示当前点击的图片 */}
          <UIpreviewImg alt="example" src={previewImage} />
        </Modal>
      </UploadWrap>
    );
  };

  const ImageTabList = () => {
    return (
      <UIImageTabs type="card" size="large">
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
                        <UIHoverText className="text">hover效果</UIHoverText>
                      </UIHover>
                    </UIImgWrap>
                  ))}
              </UIImgCol>
              <UIPaginationWrap>
                <Pagination
                  size="small"
                  defaultCurrent={1}
                  defaultPageSize={15}
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
      <UICollapse>
        <Panel header="查看每种属性样例" key="1">
          <List
            bordered
            dataSource={imgScore}
            style={UIListBodyStyle}
            grid={{ gutter: 16, column: 3 }}
            renderItem={(item: ImageAttributesType) => (
              <List.Item key={item.imageId} style={UIListItemStyle}>
                <Card>
                  <UILineWrap>
                    <UIdisplayImg src={item.imageUrl} />
                    <UIChartsWrap>
                      {item.aestheticAttributes.map(attr => (
                        <UIAttriButeTag key={attr.label} color={attr.color}>
                          {attr.label}
                        </UIAttriButeTag>
                      ))}
                    </UIChartsWrap>
                  </UILineWrap>
                </Card>
              </List.Item>
            )}
          />
        </Panel>
      </UICollapse>
      <UICollapse>
        <Panel header="图像分类结果" key="2">
          <List
            bordered
            dataSource={classifyImgList}
            style={UIListBodyStyle}
            grid={{ gutter: 16, column: 3 }}
            renderItem={(item: ImageAttributesType) => (
              <List.Item key={item.imageId} style={UIListItemStyle}>
                <Card>
                  <UILineWrap>
                    <UIdisplayImg src={item.imageUrl} />
                    <UIChartsWrap>
                      {item.aestheticAttributes.map(attr => (
                        <UIAttriButeTag
                          key={Math.random().toString(36).slice(-6)}
                          color={getLabelColor(attr.label)}
                        >
                          {attr.label}
                        </UIAttriButeTag>
                      ))}
                    </UIChartsWrap>
                  </UILineWrap>
                </Card>
              </List.Item>
            )}
          />
        </Panel>
      </UICollapse>
      {ImageTabList()}
    </>
  );
}
