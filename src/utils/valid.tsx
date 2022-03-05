export enum CurPageTypeEnum {
  USER = '个人中心',
  COMMUNITY = '社区',
  EVALUATE = '图像美学评价',
  GENERATION = '美学图像生成',
  ENHANCE = '图像美学增强',
  CLASSIFY = '图像美学分类'
}

export const getCurPageTitle = (curPath: string) => {
  const pageNameList = [
    { key: '/', title: '个人中心' },
    { key: '/user', title: '个人中心' },
    { key: '/community', title: '社区' },
    { key: '/evaluate', title: '图像美学评价' },
    { key: '/generation', title: '美学图像生成' },
    { key: '/enhance', title: '图像美学增强' },
    { key: '/classify', title: '图像美学分类' }
  ];

  const curIndex = pageNameList.findIndex(item => {
    return item.key === curPath;
  });

  return pageNameList[curIndex].title;
};
