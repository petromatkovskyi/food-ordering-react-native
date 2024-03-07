import { defaultPizzaImage } from '@components/ProductListItem'
import products from '@assets/data/products'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Image, StyleSheet, Text, View } from 'react-native'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams()
  const product = products.find((prod) => prod.id.toString() === id)

  if (!product) {
    return <Text>Product not found</Text>
  }

  return (
    <View>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
      <Text>{id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  image: {},
})

export default ProductDetailsScreen
