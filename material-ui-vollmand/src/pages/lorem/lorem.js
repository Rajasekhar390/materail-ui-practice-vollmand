import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLorems } from './loremSlice';

export default function Lorem() {
    const lorem = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLorems());
    }, []);
    return (
        <>
            <div className="App">{JSON.stringify(lorem)}</div>;</>
    )
}