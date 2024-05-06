import { FlatList, StyleSheet, Text, View } from 'react-native'
import OrderListItem from '@/components/OrderListItem'
import { Stack, useLocalSearchParams } from 'expo-router'
import orders from '@assets/data/orders'
import OrderItemListItem from '@/components/OrderItemListItem'

const OrderDetailScreen = () => {
  const { id } = useLocalSearchParams()

  const order = orders.find((order) => order.id.toString() === id)

  if (!order) {
    return <Text style={styles.notFound}>Order not found</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order #${id}` }} />

      <FlatList
        data={order.order_items}
        renderItem={({ item }) => (
          <OrderItemListItem orderItem={item} key={item.order_id} />
        )}
        contentContainerStyle={styles.containerList}
        ListHeaderComponent={() => <OrderListItem order={order} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    gap: 10,
  },
  notFound: {
    fontSize: 20,
    fontWeight: '600',
    color: 'lightcoral',
  },
  containerList: {
    rowGap: 10,
  },
})

export default OrderDetailScreen
