import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { SelectLangPropsI } from '../../interfaces/navBarInterface';

const CustomSwitch = withStyles({
    switchBase: {
        color: '#2135BE',
        '&$checked': {
            color: '#2135BE',
            opacity: 1,
        },
        '&$checked + $track': {
            backgroundColor: 'white',
            opacity: 1,
            border: '1px solid #A9B1EA',
        },
        '& + $track': {
            backgroundColor: 'white',
            opacity: 1,
            border: '1px solid #A9B1EA',
        },
    },
    checked: {},
    track: {},
})(Switch);

const StyledLabel = styled.span`
    font-size: 1rem;
    color: ${({ color }) => color};

    @media (max-width: 768px) {
        color: white;
    }
`;

const SelectLang: FC<SelectLangPropsI> = ({ langList, onToggleLanguage, themeMode }: SelectLangPropsI) => {
    const [value, setValue] = useState(true);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked);
        onToggleLanguage(event.target.checked);
    };

    return (
        <div>
            <StyledLabel color={themeMode.primaryTextColor}>{langList.rus}</StyledLabel>
            <CustomSwitch checked={value} onChange={handleChange} />
            <StyledLabel color={themeMode.primaryTextColor}>{langList.eng}</StyledLabel>
        </div>
    );
};

export default SelectLang;
