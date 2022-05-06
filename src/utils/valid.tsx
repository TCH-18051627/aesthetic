import storage from 'good-storage';
import React from 'react';
// 使用local-storage存储历史搜索相关数据
// 需要长期存储的业务数据需要使用本地local-storage

export function save(item, key, compare, maxLen) {
  // 读出现有元素,如果没有存储过key,默认空数组[]
  const items = storage.get(key, []);
  // 将item插入items数组中
  insertArray(items, item, compare, maxLen);
  // 修改后，再存储到storage对应的key中,使得本地数据和内存中的数据保持一致
  storage.set(key, items);
  return items;
}

export function remove(key, compare) {
  const items = storage.get(key, []);
  deleteFromArray(items, compare);
  storage.set(key, items);
  return items;
}

export function load(key) {
  return storage.get(key, []);
}

export function clear(key) {
  storage.remove(key);
  return [];
}

export function saveAll(items, key) {
  // 每次重新打开页面经过初始化后将本地存储更新
  storage.set(key, items);
}

// 插入函数
function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare);
  if (index === 0) {
    return;
  }
  if (index > 0) {
    arr.splice(index, 1);
  }
  arr.unshift(val);
  if (maxLen && arr.length > maxLen) {
    arr.pop();
  }
}

// 删除函数
function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare);
  if (index > -1) {
    arr.splice(index, 1);
  }
}

export enum CurPageTypeEnum {
  USER = '个人中心',
  COMMUNITY = '社区',
  EVALUATE = '图像美学评价',
  GENERATION = '美学图像生成',
  ENHANCE = '图像美学增强',
  CLASSIFY = '图像美学分类'
}

export const pageNameList = [
  { key: '/', title: '个人中心' },
  { key: '/user', title: '个人中心' },
  { key: '/community', title: '社区' },
  { key: '/evaluate', title: '图像美学评价' },
  { key: '/generation', title: '美学图像生成' },
  { key: '/enhance', title: '图像美学增强' },
  { key: '/algorithm', title: '算法服务' },
  { key: '/dataset', title: '美学风格数据集管理' }
];

export const attrLabels = [
  'Complementary Colors',
  'Light On White',
  'Macro',
  'Negative Image',
  'Rule of Thirds',
  'Vanishing Point'
];

export const getCurPageTitle = (curPath: string) => {
  const curIndex = pageNameList.findIndex(item => {
    return item.key === curPath;
  });

  return pageNameList[curIndex].title;
};

export const getAttrLabels = (attrIdx: number[]) => {
  return attrIdx.map(idx => attrLabels[idx]);
};

export const lazyLoad = (
  Node: React.LazyExoticComponent<() => JSX.Element>
) => {
  return <Node />;
};

export enum LabelColorEnum {
  ComplementaryColors = '#4472c4',
  Duotones = '#c55a11',
  HighDynamicRange = '#ed7d31',
  ImageGrain = '#2f5597',
  LightOnWhite = '#2f978b',
  LongExposure = '#edc131',
  Macro = '#ed6331',
  MotionBlur = '#ed3163',
  NegativeImage = '#31ed98',
  RuleOfThirds = '#aeed31',
  ShallowDOF = '#ed5031',
  Silhouettes = '#7631ed',
  SoftFocus = '#ed3144',
  VanishingPoint = '#98ed31'
}

export const getLabelColor = (label: string) => {
  return LabelColorEnum[label];
};
