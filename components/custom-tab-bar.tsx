import { IconSymbol } from "@/components/ui/icon-symbol";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { usePathname, useRouter } from "expo-router";
import { Platform, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const tabs = [
  {
    name: "index",
    route: "/(tabs)/",
    icon: "house",
    iconFilled: "house.fill",
    label: "Home",
  },
  {
    name: "transaction",
    route: "/(tabs)/transaction",
    icon: "doc.text",
    iconFilled: "doc.text.fill",
    label: "Transaction",
  },
  {
    name: "add",
    route: "/(tabs)/add",
    icon: "plus",
    iconFilled: "plus",
    label: "Add",
  },
  {
    name: "analytics",
    route: "/(tabs)/analytics",
    icon: "chart.bar",
    iconFilled: "chart.bar.fill",
    label: "Analytics",
  },
  {
    name: "account",
    route: "/(tabs)/account",
    icon: "person",
    iconFilled: "person.fill",
    label: "Account",
  },
];

export function CustomTabBar() {
  const router = useRouter();
  const pathname = usePathname();

  const handlePress = (route: string, tabName: string) => {
    if (Platform.OS === "ios") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    router.push(route as any);
  };

  const isActive = (route: string) => {
    if (route === "/(tabs)/") {
      return pathname === "/(tabs)/" || pathname === "/";
    }
    return pathname === route;
  };

  return (
    <SafeAreaView
      edges={["bottom"]}
      className={`absolute bottom-0 left-0 right-0 flex-row justify-around items-start pt-5 px-4 h-[90px] bg-background`}
    >
      {tabs.map((tab) => {
        const active = isActive(tab.route);
        const isAddTab = tab.name === "add";
        const iconName = active ? tab.iconFilled : tab.icon;
        const iconColor = isAddTab
          ? "#FFFFFF"
          : active
          ? "text-primary"
          : "text-muted-foreground";

        if (isAddTab) {
          return (
            <TouchableOpacity
              key={tab.name}
              onPress={() => handlePress(tab.route, tab.name)}
              className="items-center justify-start -mt-5"
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={["#FFB6C1", "#87CEEB", "#40E0D0", "#90EE90"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="rounded-full items-center justify-center"
                style={{
                  width: 56,
                  height: 56,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,
                  elevation: 8,
                }}
              >
                <IconSymbol
                  size={24}
                  name={iconName as any}
                  color={iconColor}
                />
              </LinearGradient>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => handlePress(tab.route, tab.name)}
            className="flex-1 items-center justify-center pt-2"
            activeOpacity={0.7}
          >
            <IconSymbol size={24} name={iconName as any} color={iconColor} />
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}
