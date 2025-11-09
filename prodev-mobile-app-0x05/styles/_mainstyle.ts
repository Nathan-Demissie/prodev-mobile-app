import { StyleSheet, Dimensions } from "react-native";

const COLORS = { white: "#fff" };
const SPACING = { small: 10, medium: 20, large: 40 };
const FONT_SIZE = { small: 18, medium: 24, large: 40 };
const BORDER_RADIUS = { large: 36 };
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImageContainer: { flex: 1, height },
  logoContainer: { padding: SPACING.large, alignItems: "center", marginTop: 74 },
  titleContainer: { marginTop: SPACING.large },
  titleText: { fontSize: FONT_SIZE.large, textAlign: "center", fontWeight: "800", color: COLORS.white },
  titleSubTextContainer: { marginTop: SPACING.medium },
  titleSubText: { fontWeight: "300", fontSize: FONT_SIZE.small, textAlign: "center", color: COLORS.white },
  buttonPrimary: { backgroundColor: COLORS.white, alignItems: "center", padding: SPACING.medium, borderRadius: BORDER_RADIUS.large, flex: 1 },
  buttonPrimaryText: { fontSize: FONT_SIZE.small, fontWeight: "300", textAlign: "center" },
  buttonSecondary: { alignItems: "center", padding: SPACING.medium, borderRadius: BORDER_RADIUS.large, borderWidth: 1, borderColor: COLORS.white, flex: 1 },
  buttonSecondaryText: { fontSize: FONT_SIZE.small, fontWeight: "300", textAlign: "center", color: COLORS.white },
  buttonGroup: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: SPACING.medium, paddingHorizontal: SPACING.medium },
  buttonGroupSubText: { flexDirection: "row", justifyContent: "center", alignItems: "center", gap: SPACING.small, marginTop: 19 },

  /* Home screen extras */
  searchGroup: { paddingHorizontal: 16, paddingVertical: 12 },
  searchFormGroup: { flexDirection: "row", alignItems: "center", gap: 12 },
  searchControlGroup: { flex: 1 },
  searchFormText: { fontSize: 16 },
  searchControl: { backgroundColor: "#fff", borderRadius: 12, paddingHorizontal: 12, height: 44 },
  searchButton: { width: 44, height: 44, borderRadius: 12, backgroundColor: "#34967C", alignItems: "center", justifyContent: "center" },

  filterGroup: { flexDirection: "row", alignItems: "center", gap: 16, paddingHorizontal: 16 },
  filterContainer: { width: 80, alignItems: "center", justifyContent: "center", gap: 6 },

  listingContainer: { paddingHorizontal: 16, paddingTop: 12 },
  paginationContainer: { alignItems: "center", paddingVertical: 16 },
  showMoreButton: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, backgroundColor: "#eee" },
  showMoreButtonText: { fontSize: 16 },
});

export { styles };
