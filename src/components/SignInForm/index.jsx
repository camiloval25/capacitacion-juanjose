import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleError } from "../../redux/Login/action";
import Loading from "../../modals/Loading";
import Error from "../../modals/Error";
import { userSignIn } from "../../redux/Login/action";
import { Input, Button } from "../../theme/controls";

const SignInForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.login.signInModals);

  const [form, setForm] = useState({
    identification: "1017244704",
    password: "12345655",
  });

  const handleFormSignIn = (key) => (e) => {
    setForm({ ...form, [key]: e.nativeEvent.text });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Input
        value={form.identification}
        placeholder="Cédula"
        onChange={handleFormSignIn("identification")}
      />
      <Input
        value={form.password}
        placeholder="Contraseña"
        onChange={handleFormSignIn("password")}
        maxLength={7}
      />

      <Button title="Sign In" onPress={() => dispatch(userSignIn(form))} />
    </SafeAreaView>
  );
};

export default SignInForm;
