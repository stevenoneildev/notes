import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { IconPath } from "./Icon";

interface ButtonProps {
    iconType?: keyof typeof IconPath;
    iconSize?: string;
    iconColor?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    line-height: 1;
    color: hsla(0, 16%, 8%, 1);
    background-color: hsla(0, 16%, 96%, 1);
    border-radius: 0.25rem;
    border: 1px solid hsla(0, 16%, 72%, 1);
    min-height: 2rem;
    min-width: 2rem;
    cursor: pointer;
    &:hover {
        border-color: hsla(0, 16%, 64%, 1);
        background-color: hsla(0, 16%, 92%, 1);
    };
    &:active {
        border-color: hsla(0, 16%, 56%, 1);
        background-color: hsla(0, 16%, 88%, 1);
    };
    svg {
        margin: 0;
    }
`

const Button: React.FC<ButtonProps> = ({
    iconType,
    iconSize = '1rem',
    iconColor = 'hsla(0, 16%, 8%, 1)',
    onClick
}) => {
    return (
        <StyledButton
          onClick={onClick}
        >
            {iconType && (
                <Icon type={iconType as keyof typeof IconPath} size={iconSize} color={iconColor} />
            )}
        </StyledButton>
      );
};

export default Button;