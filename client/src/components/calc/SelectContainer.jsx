import React, {  useState } from 'react'
import { useCalcContext } from '../../contexts/CalcContext/CalcContextProvider';

const SelectContainer = ({ selectItem }) => {

    const [option, setOption] = useState('select');
    const {setCalcParams} = useCalcContext();

    const optionHandler = (e) => {
        setOption(e.target.value);
        setCalcParams(selectItem.id, e.target.value);
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