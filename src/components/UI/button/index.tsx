import React from 'react';

import { Button } from '@material-ui/core';

interface IProps{
    label: string;
    [x:string]: any;
}

export default function Btn({label, ...rest}: IProps){
    return(
        <Button {...rest}>
            {label}
        </Button>
    )
}