export const addtask = (data) => {
    return (dispatch) => {
        dispatch({
            type: "ADDTASK",
            payload: data
        })
    }
}

export const removetask = (data) => {
    return (dispatch) => {
        dispatch({
            type : "REMOVETASK",
            payload : data
        })
    }
}