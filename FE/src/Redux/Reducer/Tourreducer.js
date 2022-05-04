import { TOUR_LIST_FAIL, TOUR_LIST_REQUEST, TOUR_LIST_SUCCESS } from "../Constants/Tourconstants";

export const tourlistreducer = (state = { products:[] },action ) =>{
    switch(action.type) {
        case TOUR_LIST_REQUEST:
            return {loading : true,products:[] }
            case TOUR_LIST_SUCCESS:
                return{loading:false,products:action.payload };
                case TOUR_LIST_FAIL:
                    return{loading:false,error:action.payload};
            break;

        default:
            return state;
    }
}