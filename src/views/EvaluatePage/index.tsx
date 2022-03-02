import React, { useEffect, useState } from 'react';
import { List, Upload, message, Modal } from 'antd';
import EChartsReact from 'echarts-for-react';
import { UploadOutlined } from '@ant-design/icons';
import { imgScore } from './testData/data';
import { ImageScoreType } from './interface';
import { createBarOption, createLineOption } from './utils/createOption';
import {
  UploadWrap,
  UIpreviewImg,
  UploadButton,
  UIUrlInput,
  ClearButton,
  UIdisplayImg,
  UIChartsWrap
} from './style';

export default function EvaluatePage() {
  const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };
  const [ImageUrl, setImageUrl] = useState(
    'http://vueshop.glbuys.com/userfiles/head/590472285.jpeg'
  );

  // 遮罩层的开关state
  const [previewVisible, setpreviewVisible] = useState(false);
  // 遮罩层打开后显示的图片
  const [previewImage, setpreviewImage] = useState('');
  // 遮罩层打开后显示的标题
  const [previewTitle, setpreviewTitle] = useState('');
  // 上传图片左侧弹出的列表 默认number[]
  const [fileList, setFileList] = useState([]);
  // 上传中...加载状态.....
  const [upImgloading, setUpImgloading] = useState(false);

  // 判断上传图片拦截方法
  const handleChange = ({ file, fileList }: any) => {
    // { file, fileList }
    // 看官方文档 第一个 file 获取上传文件信息
    // 第二个 fileList 获取的是当前上传成功的图片对象

    // 判断图片格式是否为jpeg
    const isJpgOrPng = file.type === 'image/jpeg' || 'image/png';
    if (!isJpgOrPng) {
      message.error('文件格式不正确!');
      return isJpgOrPng;
    }

    // 判断图片大小是否小于等于50k
    // 1默认为bit 最小单位
    // 1k = 1b * 1024 b
    // 1m = 1k * 1024 k
    const isLt50K = file.size <= 50 * 1024;
    if (!isLt50K) {
      message.error('文件大小不得超过50k!');
      return isLt50K;
    }

    // 这里才是有趣的地方
    // 当上方拦截器都未触发 则执行此判断
    if (isJpgOrPng && isLt50K) {
      // 首先清空 编辑 或者 详情 传递过来的数据图片地址
      setImageUrl('');
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
          'http://vueshop.glbuys.com/userfiles/head/' +
          file.response.data.msbox;
        // 这里如果表单形式 可以用form回填
        console.info(url);
      }
    }
  };

  //   点击上传时触发事件函数
  const handlePreview = async (file: any) => {
    //       点击获取本地弹窗 并且获取本地待上传的文件路径
    if (!file.url && !file.preview) {
      // * 个人理解 这里是调用本地弹窗获取本地图片路径 并且上传到file 原型链中
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

  const UploadHeader = () => {
    return (
      <UploadWrap>
        <>
          <Upload
            name="headfile"
            // 图片上传服务器地址
            action="http://vueshop.glbuys.com/api/user/myinfo/formdatahead?token=1ec949a15fb709370f"
            // 图片上传类型
            // listType="picture-card"
            // 上传列表
            fileList={fileList}
            // 默认列表只能上传一条 多余的进行覆盖
            maxCount={1}
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
              // 清空路由传递来的图片路径
              setImageUrl('');
              // 清空上传图片列表数据
              setFileList([]);
            }}
          >
            清空
          </ClearButton>

          <UIUrlInput placeholder="输入图像链接"></UIUrlInput>
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

  return (
    <>
      <List
        header={UploadHeader()}
        bordered
        dataSource={imgScore}
        renderItem={(item: ImageScoreType) => (
          <List.Item>
            <UIdisplayImg src={item.imageUrl} />
            <UIChartsWrap>
              <EChartsReact
                option={createLineOption({
                  xData: Object.keys(item.aestheticScores),
                  yData: Object.values(item.aestheticScores)
                })}
              />
            </UIChartsWrap>
            <UIChartsWrap>
              <EChartsReact
                option={createBarOption({
                  yData: Object.values(item.aestheticDistributions)
                })}
              />
            </UIChartsWrap>
          </List.Item>
        )}
      />
    </>
  );
}
