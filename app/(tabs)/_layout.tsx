import { Tabs } from "expo-router";
import React from "react";

import { CustomTabBar } from "@/components/custom-tab-bar";
import { ThemeToggle } from "@/components/theme-toggle";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={() => <CustomTabBar />}
      screenOptions={{
        headerShown: true,
        headerRight: () => <ThemeToggle />,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: "Transaction",
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
        }}
      />
    </Tabs>
  );
}
