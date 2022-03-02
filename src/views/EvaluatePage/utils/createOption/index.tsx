import React from 'react';
import { LineChartsType, BarChartsType } from './interface';

export const createLineOption = (props: LineChartsType) => {
  const { xData, yData } = props;

  const option = {
    tooltip: {
      trigger: 'axis'
      // tooltip的触发方式：axis(坐标轴出发，主要在柱状等类目图中使用);item(点击数据项触发，主要用于散点图或者饼图)
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisPointer: {
        // 坐标轴指示器配置
        type: 'shadow'
        // 设置鼠标上移的时候显示垂直于x轴的阴影，还可以设置位line，那会显示垂直于x轴的直线
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'score',
        data: yData,
        type: 'line'
      }
    ]
  };

  return option;
};

export const createBarOption = (props: BarChartsType) => {
  const { xData = Array.from(Array(11).keys()).slice(1), yData } = props;

  const option = {
    tooltip: {
      trigger: 'axis'
      // tooltip的触发方式：axis(坐标轴出发，主要在柱状等类目图中使用);item(点击数据项触发，主要用于散点图或者饼图)
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisPointer: {
        // 坐标轴指示器配置
        type: 'shadow'
        // 设置鼠标上移的时候显示垂直于x轴的阴影，还可以设置位line，那会显示垂直于x轴的直线
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'score',
        data: yData,
        type: 'bar'
      }
    ]
  };

  return option;
};
