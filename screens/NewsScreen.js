import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from './../others/Context';

const NewsScreen = () => {
    
    const {
        news: { articles },
    } = useContext(NewsContext)

    console.log(articles)
    return (
        <View>
            <Text>NewsScreen</Text>
        </View>
    )
}

export default NewsScreen

const styles = StyleSheet.create({})