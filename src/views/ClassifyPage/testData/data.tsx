import image1 from '@/assets/images/image1.jpg';
import image2 from '@/assets/images/image2.jpg';
import image3 from '@/assets/images/image3.jpg';
import image4 from '@/assets/images/image4.jpg';
import image5 from '@/assets/images/image5.jpg';
import image6 from '@/assets/images/image6.jpg';

export const imgScore = [
  {
    imageId: 'image4',
    imageUrl: image4,
    aestheticScores: {
      NIMA: 6.5,
      ALamp: 5.2,
      MP_Adam: 6.3
    },
    aestheticDistributions: [0, 0, 0.1, 0.1, 0.1, 0.4, 0.3, 0, 0, 0],
    aestheticAttributes: [
      { label: 'BalancingElements', color: '#4472c4' },
      { label: 'ColorHarmony', color: '#c55a11' },
      { label: 'Content', color: '#ed7d31' },
      { label: 'Object', color: '#2f5597' }
    ]
  },
  {
    imageId: 'image5',
    imageUrl: image5,
    aestheticScores: {
      NIMA: 7.0,
      ALamp: 5.1,
      MP_Adam: 6.6
    },
    aestheticDistributions: [0, 0.1, 0.1, 0.1, 0, 0.4, 0.2, 0.1, 0, 0],
    aestheticAttributes: [
      { label: 'light', color: '#4472c4' },
      { label: 'RuleOfThirds', color: '#c55a11' },
      { label: 'Content', color: '#ed7d31' }
    ]
  },
  {
    imageId: 'image6',
    imageUrl: image6,
    aestheticScores: {
      NIMA: 6.1,
      ALamp: 4.7,
      MP_Adam: 5.8
    },
    aestheticDistributions: [0, 0.1, 0.2, 0.1, 0.3, 0.2, 0.1, 0, 0, 0],
    aestheticAttributes: [
      { label: 'light', color: '#4472c4' },
      { label: 'ColorHarmony', color: '#c55a11' },
      { label: 'Content', color: '#ed7d31' },
      { label: 'Object', color: '#2f5597' }
    ]
  }
];

export const attrList = [
  {
    Label: 'light',
    attrId: '0',
    imageList: [image1, image2, image3, image4, image5, image6]
  },
  {
    Label: 'Content',
    attrId: '1',
    imageList: [image2, image4, image5, image1, image3, image6]
  },
  {
    Label: 'Object',
    attrId: '2',
    imageList: [image1, image3, image5, image6, image4, image2]
  }
];
