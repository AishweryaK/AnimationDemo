import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Animated from 'react-native-reanimated';


function App() {
  return (
    <SafeAreaView>

    
    <Animated.View style={styles.animation}>

    </Animated.View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  animation : {
    backgroundColor: "pink",
    width:100,
    height:100,
  }
});

export default App;
