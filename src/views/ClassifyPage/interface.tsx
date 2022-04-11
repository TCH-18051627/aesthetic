import React from 'react';

export interface AestheticScoreType {
  NIMA: number;
  ALamp: number;
  MP_Adam: number;
}

export interface AttributesLabelType {
  label: string;
  color?: string;
}

export interface AttrImgListType {
  label: string;
  attrId: string;
  imageList: string[];
}
