import { StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState, useContext } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view'
import DiscoverScreen from './../screens/DiscoverScreen';
import NewsScreen from './../screens/NewsScreen';
import TopNavigation from './TopNavigation';
import { NewsContext } from '../others/Context';
const InshortTabs = () => {
    const layout = useWindowDimensions()
    const { index, setIndex } = useContext(NewsContext)
    const [routes] = useState([
        { key: 'first', title: 'Dimention' },
        { key: 'second', title: 'News' },

    ])
    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen,
    });
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => <TopNavigation
                index={index}
                setIndex={setIndex}
            />
            }
        />
    )
}

export default InshortTabs

const styles = StyleSheet.create({})