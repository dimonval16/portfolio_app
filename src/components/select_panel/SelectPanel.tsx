import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { SelectPanelPropsI } from '../../interfaces/navBarInterface';
import SwitchComponent from './SwitchComponent';

const StyledLabel = styled.span`
    font-size: 1rem;
    color: ${({ color }) => color};

    @media (max-width: 768px) {
        color: white;
    }
`;

const SelectPanel: FC<SelectPanelPropsI> = ({ labelLeft, labelRight, onTogglePanel, themeMode }: SelectPanelPropsI) => {
    const [value, setValue] = useState(true);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked);
        onTogglePanel(event.target.checked);
    };

    return (
        <div>
            <StyledLabel color={themeMode.primaryTextColor}>{labelLeft}</StyledLabel>
            <SwitchComponent themeMode={themeMode} handleSwitchChange={handleChange} switchValue={value} />
            <StyledLabel color={themeMode.primaryTextColor}>{labelRight}</StyledLabel>
        </div>
    );
};

export default SelectPanel;
