import image1 from '@/assets/images/y1.jpg';
import image2 from '@/assets/images/y2.jpg';
import image3 from '@/assets/images/y3.jpg';
import image4 from '@/assets/images/y4.jpg';
import image5 from '@/assets/images/y5.jpg';
import image6 from '@/assets/images/y6.jpg';
import image7 from '@/assets/images/y7.jpg';
import image8 from '@/assets/images/y8.jpg';
import image9 from '@/assets/images/y9.jpg';
import image10 from '@/assets/images/y10.jpg';
import image11 from '@/assets/images/y11.jpg';
import image12 from '@/assets/images/y12.jpg';
import image13 from '@/assets/images/y13.jpg';
import image14 from '@/assets/images/y14.jpg';
import image15 from '@/assets/images/y15.jpg';
import image16 from '@/assets/images/y16.jpg';
import image17 from '@/assets/images/y17.jpg';
import image18 from '@/assets/images/y18.jpg';
import image19 from '@/assets/images/y19.jpg';
import image20 from '@/assets/images/y20.jpg';
import non1 from '@/assets/images/n1.jpg';
import non2 from '@/assets/images/n2.jpg';
import non3 from '@/assets/images/n3.jpg';
import non4 from '@/assets/images/n4.jpg';
import non5 from '@/assets/images/n5.jpg';
import non6 from '@/assets/images/n6.jpg';
import non7 from '@/assets/images/n7.jpg';
import non8 from '@/assets/images/n8.jpg';
import non9 from '@/assets/images/n9.jpg';
import non10 from '@/assets/images/n10.jpg';
import non11 from '@/assets/images/n11.jpg';
import non12 from '@/assets/images/n12.jpg';
import non13 from '@/assets/images/n13.jpg';
import non14 from '@/assets/images/n14.jpg';
import non15 from '@/assets/images/n15.jpg';
import non16 from '@/assets/images/n16.jpg';
import non17 from '@/assets/images/n17.jpg';
import non18 from '@/assets/images/n18.jpg';
import non19 from '@/assets/images/n19.jpg';
import non20 from '@/assets/images/n20.jpg';

export const imageTags = ['Weed'];

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
    label: 'Weed',
    attrId: '0',
    imageList: [
      { imgUrl: image1, id: '0' },
      { imgUrl: image2, id: '1' },
      { imgUrl: image3, id: '2' },
      { imgUrl: image4, id: '3' },
      { imgUrl: image5, id: '4' },
      { imgUrl: image6, id: '5' },
      { imgUrl: image7, id: '6' },
      { imgUrl: image8, id: '7' },
      { imgUrl: image9, id: '8' },
      { imgUrl: image10, id: '9' },
      { imgUrl: image11, id: '10' },
      { imgUrl: image12, id: '11' },
      { imgUrl: image13, id: '12' },
      { imgUrl: image14, id: '13' },
      { imgUrl: image15, id: '14' },
      { imgUrl: image16, id: '15' },
      { imgUrl: image17, id: '16' },
      { imgUrl: image18, id: '17' },
      { imgUrl: image19, id: '18' },
      { imgUrl: image20, id: '19' }
    ]
  },
  {
    label: 'Non-Weed',
    attrId: '1',
    imageList: [
      { imgUrl: non1, id: '0' },
      { imgUrl: non2, id: '1' },
      { imgUrl: non3, id: '2' },
      { imgUrl: non4, id: '3' },
      { imgUrl: non5, id: '4' },
      { imgUrl: non6, id: '5' },
      { imgUrl: non7, id: '6' },
      { imgUrl: non8, id: '7' },
      { imgUrl: non9, id: '8' },
      { imgUrl: non10, id: '9' },
      { imgUrl: non11, id: '10' },
      { imgUrl: non12, id: '11' },
      { imgUrl: non13, id: '12' },
      { imgUrl: non14, id: '13' },
      { imgUrl: non15, id: '14' },
      { imgUrl: non16, id: '15' },
      { imgUrl: non17, id: '16' },
      { imgUrl: non18, id: '17' },
      { imgUrl: non19, id: '18' },
      { imgUrl: non20, id: '19' }
    ]
  }
  // {
  //   label: '风格标签纠错',
  //   attrId: '3',
  //   imageList: [],
  //   content: <div>

  //   </div>
  // }
];
