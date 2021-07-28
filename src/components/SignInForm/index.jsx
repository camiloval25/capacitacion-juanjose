import React, { useState } from "react";
import { resetNavigationTo } from "../../navigation/RootNavigator";
import { SafeAreaView, Text } from "react-native";
import { Input, Button } from "../../theme/controls";
import Service from "../../services";
import { validateEmptyFields, validatePasswordLength } from "../../library/utils/regularValidations";

const SignInForm = () => {

  const [form, setForm] = useState({
    identification: "",
    password: "",
  });

  const handleFormSignIn = (key) => (e) => {
    setForm({ ...form, [key]: e.nativeEvent.text });
  };

  const submitForm = async () => {
    const hasEmptyFields = validateEmptyFields(form)
    if(hasEmptyFields){
      return alert("Por favor, complete todos los campos")
    }

    const hasWrongLength = validatePasswordLength(form.password);
    if(hasWrongLength){
      return alert("La contraseña debe contener mínimo 4 caracteres");
    }

    try {
      const userInformation = await Service("users/signin", "POST", null, form);
      resetNavigationTo("Dashboard", userInformation)
    } catch (error) {
      alert("Correo electrónico o contraseña incorrecta")
    }
  }

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
        maxLength={6}
      />

      <Button
        title="Sign In"
        onPress={submitForm}
      />
    </SafeAreaView>
  );
};

export default SignInForm;
