import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { calculatorParamsActions } from '../../ducks/actions/calculatorParams.actions';
import { rateListActions } from '../../ducks/actions/rateList.actions';
import {
    rateListSelector,
    calculatorParamsSelector,
} from '../../ducks/selectors/rateList';

import { calculator } from 'src/helper';

export const useMortgages = () => {

    const dispatch = useDispatch();

    const { data: rates } = useSelector(rateListSelector);

    const calculatorParams = useSelector(calculatorParamsSelector);

    useEffect(() => {
        dispatch(rateListActions.trigger());
        dispatch(calculatorParamsActions.update(500000));
    }, []);

    const onTotalChange = (value) => {
        dispatch(calculatorParamsActions.update({ total: value }));
    };

    const onDepositChange = (value) => {
        dispatch(calculatorParamsActions.update({ deposit: value }));
    };

    const onTermChange = (value) => {
        dispatch(calculatorParamsActions.update({ term: value }));
    };

    return {
        rates,
        onTotalChange,
        onDepositChange,
        onTermChange,
        calculatorParams,
    };
};

// todo move to type.ts
interface IUseCalculator {
    payment?: number;
    interest?: number;
    setRate: (rate) => void;
    setType: (type) => void;
    rateOptions: any;
}

export const useCalculator = (rates, minRate): IUseCalculator => {
    const [rate, setRate] = useState(minRate);

    const rateOptions = rates.map((r) => {
        return {
            key: r.name,
            text: `${r.rate} - ${r.name}`,
            value: r.rate,
        };
    });
    rateOptions.unshift({
        key: `Interest Rate`,
        text: `Interest Rate`,
        value: rateOptions[0].value,
    });

    const [type, setType] = useState('monthly');

    // todo get values from calculatorParamsSelector. hard code here
    const term = '30y';

    const { total, deposit } = useSelector(calculatorParamsSelector);
    return {
        rateOptions,
        setRate,
        setType,
        ...calculator(total, deposit, rate, term, type),
    };
};
