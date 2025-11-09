import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";

export default function Landing() {
  const router = useRouter();

  return (
    <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
      <View style={styles.logoContainer}>
        <Image source={HEROLOGO} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Find Your Dream Home</Text>
      </View>

      <View style={styles.titleSubTextContainer}>
        <Text style={styles.titleSubText}>Explore the best properties around the world</Text>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push("/(home)")}>
          <Text style={styles.buttonPrimaryText}>Enter App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push("/signin")}>
          <Text style={styles.buttonSecondaryText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
