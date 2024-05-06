import OrderListItem from '@/components/OrderListItem'
import orders from '@assets/data/orders'
import { Stack } from 'expo-router'
import { FlatList, View } from 'react-native'

const OrdersScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Orders' }} />
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} key={item.id} />}
        contentContainerStyle={{
          gap: 10,
          padding: 10,
          flexDirection: 'column-reverse',
        }}
      />
    </View>
  )
}

export default OrdersScreen
