import image1 from '@/assets/images/image1.jpg';
import image2 from '@/assets/images/image2.jpg';
import image3 from '@/assets/images/image3.jpg';

export const imgScore = [
  {
    imageId: 'image1',
    imageUrl: image1,
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
    imageId: 'image2',
    imageUrl: image2,
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
    imageId: 'image3',
    imageUrl: image3,
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
