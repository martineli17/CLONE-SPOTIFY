import React from 'react';
import { makeStyles, Backdrop, CircularProgress } from '@material-ui/core';

export default function Loading({ status }) {
    const LoadingConfig = makeStyles((theme) => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: 'green',
        },
    }));
    const LoadingClass = LoadingConfig();
    return (
        <>
            <Backdrop open={status} className={LoadingClass.backdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}
