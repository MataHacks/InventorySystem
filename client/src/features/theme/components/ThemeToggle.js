import React from 'react';
import {Switch} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

const ThemeToggle = () => {
    const dispatch = useDispatch()
    const style = useSelector((state) => state.theme.style)

    return (
        <Switch checked={ style === 'dark' }
            onChange={ (event, checked) => {
            checked ? dispatch({ type: 'theme/setType', payload:'dark'})
                : dispatch({ type: 'theme/setType', payload:'light' })
        }}/>
    );
};

export default ThemeToggle;
