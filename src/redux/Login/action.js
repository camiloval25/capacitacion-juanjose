import {
  validateEmptyFields,
  validatePasswordLength,
} from "../../library/utils/regularValidations";
import Service from "../../services";
import { resetNavigationTo } from "../../navigation/RootNavigator";
import { toggleLoading } from "../Modals/action";

//Constantes - Le dicen al Reducer qué debe hacer.
export const USER_SIGNIN = "login/successSignIn";
export const MODIFY_PHONENUMBER = "user/updatePhoneNumber";

export const userSignIn = (form) => {
  return async (dispatch) => {
    try {
      const hasEmptyFields = validateEmptyFields(form);
      if (hasEmptyFields) {
        return dispatch(toggleError());
      }

      const hasWrongLength = validatePasswordLength(form.password);
      if (hasWrongLength) {
        return dispatch(toggleError());
      }

      dispatch(toggleLoading());
      const userInformation = await Service("users/signin", "POST", null, form);
      dispatch({ type: USER_SIGNIN, payload: userInformation });
      return resetNavigationTo("Dashboard");
    } catch (error) {
      dispatch(toggleError());
    }
  };
};

export const updateUserPhoneNumber = (phoneNumber) => ({
  type: MODIFY_PHONENUMBER,
  payload: phoneNumber,
});
