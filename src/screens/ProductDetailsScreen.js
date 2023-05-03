import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const ProductDetailsScreen = ({ products }) => {
    const { width } = useWindowDimensions()
    const product = products[0]

    const addToCart = () => {
        console.warn("Added to cart")
    }

    return (
        <View>
            <ScrollView>

                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image
                            source={{
                                uri: item
                            }}
                            style={[styles.image, { width }]}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />
                <View style={styles.body}>
                    <Text style={styles.title}>
                        {product.name}
                    </Text>
                    <Text style={styles.price}>
                        $ {product.price}
                    </Text>
                    <Text style={styles.description}>
                        {product.description}
                    </Text>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.button}
                onPress={addToCart}
            >
                <Feather name="shopping-cart" size={24} color="#fff" />
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    image: {
        // width: { width },
        aspectRatio: 1
    },
    body: {
        padding: 20,
        gap: 20,
        alignItems: "flex-start"
    },
    title: {
        fontSize: 24,
        fontWeight: 600
    },
    price: {
        fontSize: 18,
        fontWeight: 500,
        // borderColor: "#e47911",
        color: "#ffae00",
        backgroundColor: "#ffe3ad",
        // borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    description: {
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 30
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
