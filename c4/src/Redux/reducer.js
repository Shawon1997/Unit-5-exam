import { LOGIN } from "./action"
const init ={token : ""}



export const reducer = (store = init, { type, payload }) => {
    switch (type) {
        case LOGIN:
            return { ...store, token: payload }
        default:
            return store
    }
    
}