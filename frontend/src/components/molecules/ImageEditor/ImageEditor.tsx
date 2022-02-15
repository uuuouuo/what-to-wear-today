import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
// @ts-ignore
import { ImageEditor as ImageEditorType, EditorProps } from '@toast-ui/react-image-editor';
import { ImageEditorWithForwardedProps } from './ImageEditorWrapper';

interface ImageEditorPropsWithHandlers extends EditorProps {
  file: string;
}

const TuiImageEditor = dynamic<ImageEditorWithForwardedProps>(
  () => import('./ImageEditorWrapper'),
  {
    ssr: false,
  },
);
const ImageEditorWithForwardedRef = React.forwardRef<
  ImageEditorType | undefined,
  ImageEditorPropsWithHandlers
>((props, ref) => (
  <TuiImageEditor {...props} forwardedRef={ref as React.MutableRefObject<ImageEditorType>} />
));

interface Props extends ImageEditorType {
  file: string;
}

const ImageEditor: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <ImageEditorWithForwardedRef {...props} />
    </div>
  );
};
export default ImageEditor;
