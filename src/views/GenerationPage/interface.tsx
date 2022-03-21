import React from 'react';

export interface AestheticScoreType {
  NIMA: number;
  ALamp: number;
  MP_Adam: number;
}

export interface ImageScoreType {
  imageId: string;
  imageUrl: string;
  aestheticScores: AestheticScoreType;
  aestheticDistributions: number[];
}
