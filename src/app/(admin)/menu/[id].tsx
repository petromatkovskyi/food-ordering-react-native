import { defaultPizzaImage } from '@components/ProductListItem'
import products from '@assets/data/products'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { PizzaSize } from '@/types'
import Button from '@components/Button'
import { useCart } from '@/providers/CartProvider'
import { Link } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams()
  const { addItem } = useCart()

  const router = useRouter()

  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M')

  const product = products.find((prod) => prod.id.toString() === id)

  const addToCart = () => {
    if (!product) return
    addItem(product, selectedSize)
    router.push('/cart')
  }

  if (!product) {
    return <Text>Product not found</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Menu',
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Name: {product.name}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default ProductDetailsScreen
