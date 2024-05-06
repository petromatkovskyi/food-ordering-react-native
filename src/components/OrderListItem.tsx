import { Order } from '@/types'
import dayjs from 'dayjs'
import { useSegments } from 'expo-router'
import { Link } from 'expo-router'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

type PropType = {
  order: Order
}

const OrderListItem = ({ order }: PropType) => {
  const segments = useSegments()

  const hourAgo = `${dayjs().hour() - dayjs(order.created_at).hour()}:${
    dayjs().minute() - dayjs(order.created_at).minute()
  }`

  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable style={styles.container}>
        <View>
          <Text style={styles.title}>Order #{order.id}</Text>
          <Text style={styles.time}>{dayjs(order.created_at).fromNow()}</Text>
        </View>
        <Text style={styles.status}>{order.status}</Text>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  time: {
    color: 'gray',
    fontSize: 15,
  },
  status: {
    fontWeight: '500',
    fontSize: 16,
  },
})

export default OrderListItem
