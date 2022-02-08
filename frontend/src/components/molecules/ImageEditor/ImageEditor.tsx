import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';
import Styled from './ImageEditor.styled';

import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditorComponent from '@toast-ui/react-image-editor';

interface Props {
  className?: string;
  file: string;
}

const ImageEditor: FunctionComponent<Props> = ({ className, file }) => {
  const myTheme = {
    // Theme object to extends default dark theme.
  };

  return (
    <></>
    // <ImageEditorComponent
    //   includeUI={{
    //     loadImage: {
    //       path: file,
    //       name: 'SampleImage',
    //     },
    //     theme: myTheme,
    //     menu: ['shape', 'filter'],
    //     initMenu: 'filter',
    //     uiSize: {
    //       width: '1000px',
    //       height: '700px',
    //     },
    //     menuBarPosition: 'bottom',
    //   }}
    //   cssMaxHeight={document.documentElement.clientWidth}
    //   cssMaxWidth={document.documentElement.clientHeight}
    //   selectionStyle={{
    //     cornerSize: 50,
    //     rotatingPointOffset: 100,
    //   }}
    //   usageStatistics={true}
    // />
  );
};
export default ImageEditor;
