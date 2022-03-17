import React, { useMemo, useState } from 'react';
import { Spin } from 'antd';
import { UILoadingWrap } from './style';

export default function Loading() {
  return (
    <UILoadingWrap>
      <Spin size="large" />
    </UILoadingWrap>
  );
}
