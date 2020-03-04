import { TYPE_CATEGORIES ,ACTION_SET_DATA} from "../../../actions";
const initialData = {
    categories: []
}
export default (state = initialData, action) => {
    if (action.objectType == TYPE_CATEGORIES) {
        switch (action.type) {
            case ACTION_SET_DATA:
                return { categories: action.actionData }
            default:
                return state;
        }
    }
    return state;
}