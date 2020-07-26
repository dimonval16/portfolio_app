import React, { FC, useState, ChangeEvent } from 'react';
import selectLangS from './SelectLang.module.scss';
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

const SelectLang: FC<SelectLangPropsI> = ({ langList, onToggleLanguage }: SelectLangPropsI) => {
    const [value, setValue] = useState(true);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked);
        onToggleLanguage(event.target.checked);
    };

    return (
        <div>
            <span className={selectLangS.langLabel}>{langList.rus}</span>
            <CustomSwitch checked={value} onChange={handleChange} />
            <span className={selectLangS.langLabel}>{langList.eng}</span>
        </div>
    );
};

export default SelectLang;
