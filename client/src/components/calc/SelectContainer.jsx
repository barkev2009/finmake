import React, { useEffect, useState } from 'react'
import { setCalcParams } from '../../store/calcSlice';
import { useDispatch, useSelector } from 'react-redux';

const SelectContainer = ({ selectItem }) => {

    const [option, setOption] = useState('select');
    const taxSystem = useSelector(state => state.calc.params.tax_system);
    const [items, setItems] = useState(selectItem.items);
    const dispatch = useDispatch();
    
    const optionHandler = (value) => {
        setOption(value);
        dispatch(setCalcParams({ id: selectItem.id, value }));
    }

    useEffect(
        () => {
            if (taxSystem === 'dohod' && selectItem.id === 'num_documents') {
                setItems([selectItem.items[0]]);
                optionHandler('select');
            } else if (items.length === 1) {
                setItems(selectItem.items);
            }
        }, [taxSystem]
    );

    return (
        <div className='select_container'>
            <label htmlFor={selectItem.id}>{selectItem.name}</label>
            <div>
                <select onChange={e => optionHandler(e.target.value)} name={selectItem.id} id={selectItem.id} defaultValue={'select'}>
                    {[{ id: 'select', name: 'Выберите пункт ...' }, ...items].map(
                        item => <option key={item.id} value={item.id}>{item.name}</option>
                    )}
                </select>
            </div>
        </div>
    )
}

export default SelectContainer