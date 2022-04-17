import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

import InshortTabs from './Components/InshortTabs'
import DiscoverScreen from './screens/DiscoverScreen'

const App = () => {
  return (
    <View style={{...styles.container , backgroundColor: "#282C35"}}>

      <InshortTabs />
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
})