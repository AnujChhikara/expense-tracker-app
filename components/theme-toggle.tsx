import { TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useTheme } from '@/contexts/theme-context';

// Helper to get icon colors matching Tailwind theme
const getIconColor = (isDark: boolean) => {
  return isDark ? "#F5F5F5" : "#1A1A1A";
};

export function ThemeToggle() {
  const { colorScheme, toggleTheme } = useTheme();
  const isDark = colorScheme === 'dark';

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      className="w-11 h-11 rounded-xl bg-card justify-center items-center"
      accessibilityLabel="Toggle theme"
      accessibilityRole="button">
      <IconSymbol
        name={isDark ? 'sun.max.fill' : 'moon.fill'}
        size={24}
        color={getIconColor(isDark)}
      />
    </TouchableOpacity>
  );
}

