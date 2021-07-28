import React from "react";
import { useRoute } from "@react-navigation/native";
import { Text, SafeAreaView } from "react-native";

const Dashboard = () => {
  const { params } = useRoute();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>{`UserId: ${params.id}`}</Text>
      <Text>{`Bienvenido ${params.firstName} de nuevo!`}</Text>
    </SafeAreaView>
  );
};

export default Dashboard;
