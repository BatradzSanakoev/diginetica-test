import React from 'react';
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: '#000000',
        marginTop: 15
    },
    track: {
        height: 4
    },
    rail: {
        height: 4,
        opacity: 1,
        borderRadius: 10
    },
    thumb: {
        width: 14,
        height: 14,
        color: '#ffffff',
        border: '3px solid #000000'
    }
});

export default function SidebarPrice() {
    const classes = useStyles();
    const [value, setValue] = React.useState([100000, 1000000]);

    const handleChange = (evt, newValue) => {
        setValue(newValue);
    };
    
    return (
        <div className='sidebar__price'>
            <h3 className='sidebar__header'>Цена, валюта</h3>
            <div className='sidebar__price-values'>
                <span className='sidebar__span'>от </span>
                <p className='sidebar__price-value'>{value[0]}</p>
                <span className='sidebar__span'>до</span>
                <p className='sidebar__price-value'>{value[1]}</p>
                <span className='sidebar__span'>Р</span>
            </div>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay='off'
                min={1}
                max={1100000}
                classes={classes}
            />
        </div>
    )
}