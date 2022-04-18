import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

import InshortTabs from './Components/InshortTabs'
import Context from './others/Context'

function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282C35" }}>
      <InshortTabs />
    </View>
  )
}

export default () => {
  return (<Context>
    <App />
  </Context>)
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
})