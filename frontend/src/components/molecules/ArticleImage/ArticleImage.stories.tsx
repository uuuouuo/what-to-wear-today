import React from 'react';
import { PhotoType } from '@/types/photo';

import ArticleImage from './ArticleImage';

export default {
  title: 'molecules/ArticleImage',
  component: ArticleImage,
};

export const Default = () => {
  const images: PhotoType[] = [
    {
      no: 1,
      imgUrl: '/images/profileIMG/sample.jpg',
      feedNo: 1,
    },
    {
      no: 2,
      imgUrl:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      feedNo: 1,
    },
    {
      no: 3,
      imgUrl:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
      feedNo: 1,
    },
    {
      no: 4,
      imgUrl:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      feedNo: 1,
    },
  ];

  return <ArticleImage images={images} />;
};
