import React, { FC } from 'react';
import styled from 'styled-components';
import burgerS from './BurgerButton.module.scss';
import { StyledBurgerI, BurgerButtonPropsI } from '../../interfaces/burgerMenuInterface';

const StyledBurger = styled.div<StyledBurgerI>`
    div {
        background-color: ${({ open }) => (open ? '#fff' : '#333')};
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

const BurgerButton: FC<BurgerButtonPropsI> = ({ onSetOpen, open }: BurgerButtonPropsI) => {
    return (
        <StyledBurger className={burgerS.styledBurger} open={open} onClick={onSetOpen}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default BurgerButton;
