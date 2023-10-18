import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <GluestackUIProvider config={config.theme}>
      <Stack
        screenOptions={{
          header: () => null,
          headerShown: false,
          contentStyle: {
            backgroundColor: "#111827",
            height: "100vh",
          },
        }}
      />
    </GluestackUIProvider>
  );
}
