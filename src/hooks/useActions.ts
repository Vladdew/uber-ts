import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../store/actions";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(userActionCreators, dispatch);
};
