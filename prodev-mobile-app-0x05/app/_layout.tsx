import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Root landing screen */}
      <Stack.Screen name="index" />
      {/* Tab group lives under (home) */}
      <Stack.Screen name="(home)" options={{ headerShown: false }} />
      {/* Auth screens */}
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}
