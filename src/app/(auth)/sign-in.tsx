import Button from '@/components/Button'
import Colors from '@/constants/Colors'
import { Link, Stack } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [psw, setPsw] = useState('')

  const onSubmit = () => {}

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Sign in' }} />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        style={styles.input}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput value={psw} onChangeText={setPsw} style={styles.input} />
      <Button text="Sign in" onPress={onSubmit} />
      <Link href="/sign-up" style={styles.textButton}>
        Create an account
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
})

export default SignInScreen
