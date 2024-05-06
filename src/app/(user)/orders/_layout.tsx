import { Stack } from 'expo-router'

const MenuStack = () => (
  <Stack>
    <Stack.Screen name="index" options={{ title: 'Orders' }} />
  </Stack>
)

export default MenuStack
