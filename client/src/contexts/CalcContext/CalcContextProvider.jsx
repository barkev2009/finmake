import React, { useCallback, useRef, useState } from "react";
import { SELECT_BLOCKS } from "../../const";
import { defineResult } from "./CalcContext";

const Context = React.createContext(null);
export const CalcContextProvider = ({ children, ...props }) => {
    const context = useCreateCalcContext(props);
    return <Context.Provider value={context}>{children}</Context.Provider>
}

export function useCalcContext() {
    const context = React.useContext(Context);
    if (!context) {
        throw new Error('Use calc context within provider!')
    }
    return context;
}

export const useCreateCalcContext = function (props) {
    const calcParams = useRef({});
    SELECT_BLOCKS.forEach(item => Object.assign(calcParams.current, { [item.id]: 'select' }));

    const calcResult = useRef(0);

    const setCalcParams = useCallback(
        (id, code) => {
            calcParams.current[id] = code;
            calcResult.current = defineResult(calcParams.current);
            console.log(calcResult.current);
        }
    )
    return {
        calcResult,
        setCalcParams
    }
}