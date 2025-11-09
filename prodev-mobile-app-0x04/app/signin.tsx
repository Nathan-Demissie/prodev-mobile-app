import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "@/styles/_joinstyle";

export default function SigninScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign In</Text>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} placeholder="Enter your email" />
        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput style={styles.passwordControl} placeholder="Enter your password" secureTextEntry />
        </View>
      </View>
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
