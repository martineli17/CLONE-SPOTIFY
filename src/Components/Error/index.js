import React from 'react';
import { withSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../../Store/Ducks/Error/ErrorReducer';

function Error({ enqueueSnackbar, closeSnackbar }) {
    const error = useSelector(store => store.Error);
    const dispatch = useDispatch();
    const action = key => (
        <span style={{cursor: "pointer"}} onClick={() => closeSnackbar(key)}>X</span>
    );
    if (error.contains) {
        enqueueSnackbar(error.message, {
            variant: "error",
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'center',
            },
            autoHideDuration: 5000,
            action
        });
        dispatch(Creators.ReadError());
    }
    return (null);
}

export default withSnackbar(Error);