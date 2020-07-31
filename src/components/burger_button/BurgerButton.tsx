import React, { FC } from 'react';
import styled from 'styled-components';
import burgerS from './BurgerButton.module.scss';
import { StyledBurgerI, BurgerButtonPropsI } from '../../interfaces/burgerMenuInterfaces';

const StyledBurger = styled.div<StyledBurgerI>`
    div {
        background-color: ${({ open, themeColor }) => (open ? '#fff' : themeColor)};
        transform-origin: 1px;
        transition: all 0.2s linear;

        &:nth-child(1) {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }

        &:nth-child(2) {
            transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }

        &:nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;

const BurgerButton: FC<BurgerButtonPropsI> = ({ onSetOpen, open, themeColor }: BurgerButtonPropsI) => {
    return (
        <StyledBurger className={burgerS.styledBurger} open={open} onClick={onSetOpen} themeColor={themeColor}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default BurgerButton;
