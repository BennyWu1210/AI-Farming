import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, animation: 'none' }}/>
      <Stack.Screen name="study" options={{ headerShown: false, animation: 'none' }}/>
      <Stack.Screen name="farm" options={{ headerShown: false, animation: 'none' }}/>
    </Stack>
  );
}
