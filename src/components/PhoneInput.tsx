import * as React from 'react';
import {useState} from "react";
import InputMask from "react-input-mask";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './PhoneInput.css';
import {isIncludes} from "../utils/helper";
import {isValid} from "../utils/helper";

export interface Props {
    mask: string;
    searchArray: Array<number>;
    callbackFunc: (value: string) => void;
}

export function PhoneInput({ mask, searchArray, callbackFunc}: Props) {
    const [status, setStatus] = useState<string>('gray');

    return (
        <div className={'form'}>
            <Card>
                <CardContent>
                    <p className={'form_title'}>
                        Enter your phone number
                    </p>
                        <InputMask
                            mask = {mask}
                            className={`form_input_${status}`}
                            name={'number'}
                            onChange={(e) => {
                                const value = e.target.value;
                                isValid(value) ? setStatus('blue') : setStatus('red');
                                isIncludes(searchArray, value, callbackFunc) ? setStatus('blue') : setStatus('yellow'); }}
                            onBlur={() => setStatus('gray')}
                        />
                </CardContent>
            </Card>
        </div>
    );
}