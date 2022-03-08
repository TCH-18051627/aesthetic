import React from 'react';

export interface AestheticScoreType {
  NIMA: number;
  ALamp: number;
  MP_Adam: number;
}

export interface AttributesLabelType {
  label: string;
  color: string;
}

export interface ImageAttributesType {
  imageId: string;
  imageUrl: string;
  aestheticScores: AestheticScoreType;
  aestheticDistributions: number[];
  aestheticAttributes: AttributesLabelType[];
}

export interface AttrImgListType {
  Label: string;
  attrId: string;
  imageList: string[];
}
