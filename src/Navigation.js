import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ProductScreen from './screens/ProductScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import ShoppingCartScreen from './screens/ShoppingCartScreen'
import { Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';


const Stack = createNativeStackNavigator()

const Navigation = ({
    products,
    cart
}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Products"
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Shopping Cart")}
                                style={{ flexDirection: "row", gap: 10, }}
                            >
                                <Feather name="shopping-cart" size={24} color="black" />
                                <Text style={{ fontWeight: 'bold' }}>{cart.length}</Text>
                            </TouchableOpacity>
                        )
                    })}
                >
                    {
                        (props) => <ProductScreen
                            {...props}
                            products={products}
                        />
                    }
                </Stack.Screen>
                <Stack.Screen
                    name="Product Details"
                // options={{
                //     presentation: "modal"
                // }}
                >
                    {
                        (props) => <ProductDetailsScreen
                            {...props}
                            products={products}
                        />
                    }
                </Stack.Screen>
                <Stack.Screen name="Shopping Cart">
                    {
                        (props) => <ShoppingCartScreen
                            {...props}
                            cart={cart}
                        />
                    }
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
