import {useDispatch} from "react-redux";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import AllActionCreators from "../store/action-creators";

const useAction=()=>{
    const dispatch=useDispatch()
    return bindActionCreators(AllActionCreators,dispatch)
}
export default useAction