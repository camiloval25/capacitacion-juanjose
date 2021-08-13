import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPhoneNumber } from "../../redux/Login/action";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { id, firstName, phoneNumber } = useSelector(state => state.login.userLogged)
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>{`UserId: ${id}`}</Text>
      <Text>{`Bienvenido ${firstName} de nuevo!`}</Text>
      <Text>{`Mi número de celular es: ${phoneNumber}`}</Text>
      <TouchableOpacity onPress={() => dispatch(updateUserPhoneNumber("300300300"))}>
        <Text>Modificar Celular</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;
