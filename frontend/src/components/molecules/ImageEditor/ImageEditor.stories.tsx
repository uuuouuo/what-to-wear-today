import React from 'react';

import ImageEditor from './ImageEditor';

export default {
  title: 'Molecules/ImageEditor',
  component: ImageEditor,
};

export const Default = () => {
  const file = 'images/icon/Logo.png';
  return <ImageEditor file={file} />;
};
