import React from "react";
import { Text, View, Modal, SafeAreaView } from "react-native";
import Loading from "../Loading";
import Error from "../Error";
import styles from "./styles";

const ModalWrapper = ({ loading, error, errorMessage }) => {
  return (
    <Modal visible={loading || error} transparent animationType="fade">
      <SafeAreaView style={styles.modalWrapper}>
        {loading && <Loading/>}
        {error && <Error errorMessage="Se ha producido un Error!"/>}
      </SafeAreaView>
    </Modal>
  );
};

export default ModalWrapper;
