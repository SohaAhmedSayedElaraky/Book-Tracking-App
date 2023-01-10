import { ActionTypeEnum } from "../action-types/action-type-enum";
import { Action } from "../actions/actions"

const initialState: any[] = [];

const reducer = (state = initialState, action: Action): {} => {
    switch (action.type) {
        case ActionTypeEnum.GETALL:
            if (state.length === 0) {
                return [...state, ...action.payload];
            } else {
                state = []
                return [...state, ...action.payload];
            }
            
        default:
            return state
    }
}

export default reducer