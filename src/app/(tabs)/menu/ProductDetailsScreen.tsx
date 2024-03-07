import { defaultPizzaImage } from '@components/ProductListItem'
import products from '@assets/data/products'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Image, Text, View } from 'react-native'
import { styles, sizes } from './[id]'

export const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams()
  const product = products.find((prod) => prod.id.toString() === id)

  if (!product) {
    return <Text>Product not found</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
      <Text>Select sizes</Text>

      <View>
        {sizes.map((size) => (
          <Text key={size}>{size}</Text>
        ))}
      </View>

      <Text style={styles.price}>{product.price}</Text>
    </View>
  )
}
