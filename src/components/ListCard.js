import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const ListCard = ({ cartItem }) => {
    const increaseQuantity = () => { }
    const decreaseQuantity = () => { }

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: cartItem.product.image
                }}
                style={styles.image}
            />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>
                    {cartItem.product.name}
                </Text>
                <Text style={styles.size}>Size {cartItem.size}</Text>
                <View style={styles.footer}>
                    <View style={styles.footerLeft}>
                        <Feather
                            onPress={increaseQuantity}
                            name="minus-circle"
                            size={24}
                            color="black"
                        />
                        <Text style={styles.quantity}>
                            {cartItem.quantity}
                        </Text>
                        <Feather
                            onPress={decreaseQuantity}
                            name="plus-circle"
                            size={24}
                            color="black"
                        />
                    </View>
                    <Text style={styles.price}>
                        $ {cartItem.product.price * cartItem.quantity}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ListCard

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
    },
    contentContainer: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: "40%",
        aspectRatio: 1
    },
    name: {
        fontWeight: "500",
        fontSize: 18,
    },
    size: {
        fontSize: 16,
        color: "gray",
    },
    quantity: {
        marginHorizontal: 10,
        fontWeight: "bold",
        color: "gray",
    },
    footer: {
        marginTop: "auto",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    footerLeft: {
        marginTop: "auto",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
    },
    itemTotal: {
        fontSize: 16,
        marginLeft: "auto",
        fontWeight: "500",
    },
})
