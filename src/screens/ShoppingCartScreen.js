import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListCard from '../components/ListCard'

const ShoppingCartScreen = ({ cart }) => {
    return (
        <View>
            <FlatList
                data={cart}
                renderItem={({ item }) => (
                    <ListCard cartItem={item} />
                )}
                ListFooterComponent={() => (
                    <View style={styles.totalContainer}>
                        <View style={styles.row}>
                            <Text>
                                Subtotal
                            </Text>
                            <Text>
                                41000 US$
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default ShoppingCartScreen

const styles = StyleSheet.create({
    totalContainer: {

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})
