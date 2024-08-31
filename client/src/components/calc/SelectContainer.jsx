import React, { useState } from 'react'
import { setCalcParams } from '../../store/calcSlice';
import { useDispatch } from 'react-redux';

const SelectContainer = ({ selectItem }) => {

    const [option, setOption] = useState('select');
    const dispatch = useDispatch();
    const optionHandler = (e) => {
        setOption(e.target.value);
        dispatch(setCalcParams({ id: selectItem.id, value: e.target.value }));
    }

    return (
        <div>
            <label htmlFor={selectItem.id}>{selectItem.name}</label>
            <div>
                <select onChange={optionHandler} name={selectItem.id} id={selectItem.id} defaultValue={'select'}>
                    {[{ id: 'select', name: 'Выберите пункт ...' }, ...selectItem.items].map(
                        item => <option key={item.id} value={item.id}>{item.name}</option>
                    )}
                </select>
            </div>
        </div>
    )
}

export default SelectContainer