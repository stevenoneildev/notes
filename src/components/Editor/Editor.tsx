import React, { useRef } from 'react';
import Toolbar from './Toolbar';
import TopBar from './TopBar';
import styled from 'styled-components';

const StyledEditorContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const StyledEditor = styled.div`
    font-size: 1rem;
    line-height: 1.75rem;
    flex: 1;
    padding: 0.75rem 1.5rem;
    border-radius: 0rem;
    min-height: auto;
    border: none;
    overflow-y: auto;
    cursor: text;
    outline: none;
`

const Editor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  const format = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  const handleBold = () => {
    editorRef.current?.focus();
    format('bold');
  };

  const handleItalic = () => {
    editorRef.current?.focus();
    format('italic');
  };

  const handleUnderline = () => {
    editorRef.current?.focus();
    format('underline');
  };

  const handleOrderedList = () => {
    editorRef.current?.focus();
    format('insertOrderedList');
  };
  
  const handleUnorderedList = () => {
    editorRef.current?.focus();
    format('insertUnorderedList');
  };

  const handleIndent = () => {
    editorRef.current?.focus();
    format('indent');
  };
  
  const handleOutdent = () => {
    editorRef.current?.focus();
    format('outdent');
  };

  return (
    <>
    <StyledEditorContainer>
        <TopBar />
        <StyledEditor
            ref={editorRef}
            contentEditable
        ></StyledEditor>
        <Toolbar onBold={handleBold} onItalic={handleItalic} onUnderline={handleUnderline} onOrderedList={handleOrderedList} onUnorderedList={handleUnorderedList} onIndent={handleIndent} onOutdent={handleOutdent} />
    </StyledEditorContainer>
    </>
  );
};

export default Editor;