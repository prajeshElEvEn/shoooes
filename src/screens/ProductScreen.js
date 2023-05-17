import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const ProductScreen = ({
    products
}) => {
    const navigation = useNavigation()
    return (
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => navigation.navigate("Product Details")}
                >
                    <Image source={{
                        uri: item.image
                    }}
                        style={styles.image}
                    />
                </TouchableOpacity>
            )}
            numColumns={2}
        />
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    itemContainer: {
        width: "50%",
        padding: 1
    },
    image: {
        width: "100%",
        aspectRatio: 1
    }
})
