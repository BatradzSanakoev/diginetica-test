import React from 'react';

export default function SidebarBrands() {
    const resetCheckbox = () => {
        const checkboxes = Array.prototype.slice.call(document.querySelectorAll('.sidebar__checkbox'));
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) checkbox.checked = !checkbox.checked; 
        });
    };

    return (
        <div className='sidebar__brands'>
            <div className='sidebar__brands-headrow'>
                <h3 className='sidebar__header'>Бренды</h3>
                <p className='sidebar__brands-reset' onClick={resetCheckbox}>Очистить</p>
            </div>
            <label className='sidebar__label'><input type='checkbox' className='sidebar__checkbox' />Бренд <span className='sidebar__span'>(ххх)</span></label>
            <label className='sidebar__label'><input type='checkbox' className='sidebar__checkbox' />Бренд <span className='sidebar__span'>(ххх)</span></label>
            <label className='sidebar__label'><input type='checkbox' className='sidebar__checkbox' />Бренд <span className='sidebar__span'>(ххх)</span></label>
        </div>
    )
}