import React from 'react';
import { Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Card from '../Card/Card';
import PagePic from '../../images/group.png';

export default function Cards() {
    const classes = useStyles();

    return (
        <div className='cards'>
            <div className='cards__sort'>
                <div className='cards__sort-text-block'>
                    <p className='cards__sort-text'>
                        Сортировать по:
                        <span className='cards__sort-selected'>популярности</span>
                        <span className='cards__sort-unselected'>сначала дешевые</span>
                        <span className='cards__sort-unselected'>сначала дорогие</span>
                    </p>
                </div>
                <div className='cards__sort-select-block'>
                    <p className='cards__sort-text cards__sort-text_select'>показывать по</p>
                    <Select className='cards__sort-select' defaultValue={24} variant='outlined' classes={{
                        root: classes.root,
                        select: classes.select,
                        outlined: classes.outlined,
                        selectMenu: classes.selectMenu
                    }}>
                        <option value={12}>12</option>
                        <option value={24}>24</option>
                        <option value={36}>36</option>
                    </Select>
                </div>
            </div>
            <div className='cards__clarifications'>
                <p className='cards__clarification'>Уточнение</p>
                <p className='cards__clarification'>Уточнение</p>
                <p className='cards__clarification'>Уточнение</p>
                <p className='cards__clarification'>Уточнение</p>
            </div>
            <div className='cards__grid'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='cards__pages'>
                <span className='cards__pages-num'>2</span>
                <span className='cards__pages-num cards__pages-num_current'>3</span>
                <span className='cards__pages-fs'>...</span>
                <span className='cards__pages-num'>13</span>
                <img className='cards__pages-pic' alt='page-pic' src={PagePic} />
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        padding: 0,
        height: 33,
        display: 'flex',
        alignItems: 'center'
    },
    select: {
        fontSize: 14,
        lineHeight: 19,
        padding: 0
    },
    outlined: {
        padding: 0,
        margin: 0
    },
    selectMenu: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 5,
        paddingRight: 0
    }
});