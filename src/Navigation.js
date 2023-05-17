import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ProductScreen from './screens/ProductScreen'

const Stack = createNativeStackNavigator()

const Navigation = ({
    products,
    cart
}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Products">
                    {
                        (props) => <ProductScreen
                            {...props}
                            products={products}
                        />
                    }
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
