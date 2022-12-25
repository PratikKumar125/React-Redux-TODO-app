const initialState = ["Finish all these"]
export default (state = initialState, action) => {
    switch (action.type) {
        case "ADDTASK":
            if (action.payload === ""){
                return state;
            }
            if (state.includes(action.payload)){
                return state;
            }
            return [...state, action.payload]
            break;
        case "REMOVETASK":
            return state.filter((todo) => todo != action.payload)
        default:
            return state;
    }
}