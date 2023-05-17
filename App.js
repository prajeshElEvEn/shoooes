import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import products from './src/data/products';
import cart from './src/data/cart';
import ProductScreen from './src/screens/ProductScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation
        products={products}
        cart={cart}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
