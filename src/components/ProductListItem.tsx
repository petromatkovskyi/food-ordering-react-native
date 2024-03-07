import { Image, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import Colors from '../constants/Colors'
import { Product } from '../types'
import { Link } from 'expo-router'

export const defaultPizzaImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

type PropsType = {
  product: Product
}

const ProductListItem = ({ product }: PropsType) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{
            uri: product.image || defaultPizzaImage,
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    //not bigger than 50% of window
    maxWidth: (Dimensions.get('window').width * 50) / 100 - 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
})

export default ProductListItem
