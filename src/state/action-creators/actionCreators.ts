import { Dispatch } from "redux"
import { ActionTypeEnum } from "../action-types/action-type-enum"
import { Action } from "../actions/actions"

export function getAllBooks(payload: []) {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypeEnum.GETALL,
            payload
        })
    }

    
}

export const updateBookCategory = (payload: {} , shelfName: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: shelfName,
            payload: payload
        })
    }
}

export function getSearchedBooks(payload: []) {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypeEnum.SEARCHEDBOOKs,
            payload
        })
    }
}