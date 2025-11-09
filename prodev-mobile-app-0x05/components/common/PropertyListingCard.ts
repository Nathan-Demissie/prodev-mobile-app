import { View, Text, ImageBackground } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { PropertyListingProps } from "@/interfaces";
import { styles } from "@/styles/_propertyCardStyle";

const PropertyListingCard: React.FC<PropertyListingProps> = ({
  propertyName,
  rate,
  currency,
  amount,
  location,
  favorite,
}) => {
  return (
    <ImageBackground
      source={require("@/assets/images/mansion.png")}
      style={styles.cardBackground}
      imageStyle={styles.cardImage}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.propertyName}>{propertyName}</Text>
        {favorite ? (
          <EvilIcons name="heart" size={24} color="red" />
        ) : (
          <EvilIcons name="heart" size={24} color="white" />
        )}
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.locationText}>
          {location.city}, {location.country}
        </Text>
        <Text style={styles.priceText}>
          {currency} {amount}/night
        </Text>
        <View style={styles.ratingGroup}>
          <FontAwesome name="star" size={16} color="gold" />
          <Text style={styles.ratingText}>{rate}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PropertyListingCard;
