// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolViewProps, SymbolWeight } from "expo-symbols";
import { ComponentProps } from "react";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

type IconMapping = Record<
  SymbolViewProps["name"],
  ComponentProps<typeof MaterialIcons>["name"]
>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  "house.fill": "home",
  house: "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
  "square.grid.2x2": "apps",
  "square.grid.2x2.fill": "apps",
  "chart.pie": "pie-chart",
  "chart.pie.fill": "pie-chart",
  "chart.bar.fill": "bar-chart",
  "chart.bar": "bar-chart",
  "plus.circle.fill": "add-circle",
  plus: "add",
  "creditcard.fill": "credit-card",
  creditcard: "credit-card",
  "wallet.pass": "account-balance-wallet",
  "wallet.pass.fill": "account-balance-wallet",
  "person.fill": "person",
  person: "person-outline",
  "person.circle": "account-circle",
  "person.circle.fill": "account-circle",
  "doc.text.fill": "receipt",
  "doc.text": "description",
  "sun.max.fill": "wb-sunny",
  "moon.fill": "dark-mode",
  "car.fill": "directions-car",
  "bell.fill": "notifications",
  "cup.and.saucer.fill": "local-cafe",
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  );
}
