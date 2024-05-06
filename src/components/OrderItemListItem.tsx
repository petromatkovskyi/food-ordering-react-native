import Colors from '@/constants/Colors'
import { OrderItem } from '@/types'
import { View, Text, StyleSheet, Image } from 'react-native'
import { defaultPizzaImage } from './ProductListItem'

type PropsType = {
  orderItem: OrderItem
}

function OrderItemListItem({ orderItem }: PropsType) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: orderItem.products.image || defaultPizzaImage }}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.name}>{orderItem.products.name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.price}>${orderItem.products.price}</Text>
          <Text style={styles.size}>Size: {orderItem.size}</Text>
        </View>
      </View>
      <Text style={styles.quantity}>{orderItem.quantity}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 15,
    flex: 1,
  },
  image: {
    width: 75,
    aspectRatio: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    columnGap: 10,
  },
  price: {
    fontWeight: 'bold',
    color: Colors.light.tint,
    fontSize: 16,
  },
  size: {
    fontWeight: '500',
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 'auto',
  },
})

export default OrderItemListItem
