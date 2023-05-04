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
            />
        </View>
    )
}

export default ShoppingCartScreen

const styles = StyleSheet.create({})
