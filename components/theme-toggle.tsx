import { TouchableOpacity, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useTheme } from '@/contexts/theme-context';
import { Colors } from '@/constants/theme';

export function ThemeToggle() {
  const { colorScheme, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={styles.button}
      accessibilityLabel="Toggle theme"
      accessibilityRole="button">
      <IconSymbol
        name={colorScheme === 'dark' ? 'sun.max.fill' : 'moon.fill'}
        size={24}
        color={Colors[colorScheme].icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    marginRight: 8,
  },
});

