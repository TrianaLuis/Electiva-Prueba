import {StyleSheet, Text, View, TextInput, Button, Alert,} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo"
        placeholderTextColor="#999"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#999"
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button
          title="INICIAR SESIÓN"
          onPress={() => Alert.alert("¡Has iniciado sesión!")}
          color="#6200EE"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F9F9F9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#FFF",
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: "hidden",
  },
});
