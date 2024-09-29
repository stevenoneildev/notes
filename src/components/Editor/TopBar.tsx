import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const StyledTopBar = styled.div`    
    padding-top: 1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 0.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const StyledText = styled.text`
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
`

const TopBar: React.FC = () => {
    const handleRefresh = () => {
        window.location.reload();
    };
    return (
        <StyledTopBar>
            <StyledText>New note</StyledText>
            <Button iconType="pencil" onClick={handleRefresh} />
        </StyledTopBar>
    );
};

export default TopBar;