import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "@/styles/_join";

export default function Signin() {
  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign in</Text>
        <Text style={styles.subText}>Welcome back! Please enter your details</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} placeholder="Enter your email" />
        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput style={styles.passwordControl} placeholder="Enter your password" secureTextEntry />
        </View>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
