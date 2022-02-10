import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';
import Styled from './ImageEditor.styled';

// @ts-ignore
import TuiImageEditor from '@toast-ui/react-image-editor';
import 'tui-image-editor/dist/tui-image-editor.css';
interface Props {
  className?: string;
  file: string;
}

const ImageEditor: FunctionComponent<Props> = ({ className, file }) => {
  const myTheme = {
    // Theme object to extends default dark theme.
  };

  return (
<<<<<<< HEAD
=======
    <></>
>>>>>>> 78d02284670944daf3452964dd84f187d6fdd98e
    // <TuiImageEditor
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
<<<<<<< HEAD
    <div>dd</div>
=======
>>>>>>> 78d02284670944daf3452964dd84f187d6fdd98e
  );
};
export default ImageEditor;
