import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../store/actions";
import * as userActionCreators from "../store/actionCreators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { ...userActions, ...userActionCreators },
    dispatch
  );
};
