import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ListCard from '../components/ListCard'
import { Feather } from '@expo/vector-icons';

const ShoppingCartScreen = ({ cart }) => {
    const shoppingCartTotals = () => (
        <View style={styles.totalContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>
                    Subtotal
                </Text>
                <Text style={styles.text}>
                    41000 US$
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>
                    Shipping
                </Text>
                <Text style={styles.text}>
                    100 US$
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>
                    Total
                </Text>
                <Text style={styles.textBold}>
                    41100 US$
                </Text>
            </View>
        </View>
    )
    return (
        <>
            <FlatList
                data={cart}
                renderItem={({ item }) => (
                    <ListCard cartItem={item} />
                )}
                ListFooterComponent={shoppingCartTotals}
            />
            <TouchableOpacity
                style={styles.button}
            // onPress={addToCart}
            >
                <Text style={styles.buttonText}>
                    Checkout
                </Text>
                <Feather name="check-circle" size={24} color="#fff" />
            </TouchableOpacity>
        </>
    )
}

export default ShoppingCartScreen

const styles = StyleSheet.create({
    totalContainer: {
        margin: 20,
        paddingTop: 20,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
        gap: 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        color: 'gray',
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        position: "absolute",
        width: "90%",
        bottom: 20,
        alignSelf: "center",
        backgroundColor: "#000",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 18,
        borderRadius: 50
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 600
    }
})
