import React, { FunctionComponent } from 'react';
import { ImageEditor as TuiImageEditor, EditorProps } from '@toast-ui/react-image-editor';

export interface ImageEditorWithForwardedProps extends EditorProps {
  props?: typeof EditorProps;
  forwardedRef?: React.MutableRefObject<TuiImageEditor>;
}

const ImageEditorWrapper: FunctionComponent<ImageEditorWithForwardedProps> = ({ props }) => {
  return <TuiImageEditor {...props} ref={props.forwardedRef} />;
};
export default ImageEditorWrapper;
