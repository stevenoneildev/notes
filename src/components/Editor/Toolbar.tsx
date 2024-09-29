import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

interface ToolbarProps {
  onBold: () => void;
  onItalic: () => void;
  onUnderline: () => void;
  onOrderedList: () => void;
  onUnorderedList: () => void;
  onIndent: () => void;
  onOutdent: () => void;
}

const StyledToolbar = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    padding-top: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 1.5rem;
    // position: fixed;
    // top: auto;
    // left: 0rem;
    // right: 0rem;
    // bottom: 0rem;
    // z-index: 999;
`



const Toolbar: React.FC<ToolbarProps> = ({ onBold, onItalic, onUnderline, onOrderedList, onUnorderedList, onIndent, onOutdent }) => {
  return (
    <StyledToolbar>
        <Button iconType="bold" onClick={onBold} />
        <Button iconType="italic" onClick={onItalic} />
        <Button iconType="underline" onClick={onUnderline} />
        <Button iconType="orderedList" onClick={onOrderedList} />
        <Button iconType="unorderedList" onClick={onUnorderedList} />
        <Button iconType="indent" onClick={onIndent} />
        <Button iconType="outdent" onClick={onOutdent} />
    </StyledToolbar>
  );
};

export default Toolbar;