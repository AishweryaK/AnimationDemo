import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue, withSpring, withTiming , } from 'react-native-reanimated';
import { Circle, Svg } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function App() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const r =useSharedValue(20);
  

  const handlePressRight =() => {
    translateX.value = translateX.value+30;
  }
  const handlePressDown =() => {
    translateY.value = translateY.value+30;
  }
  const handlePress = () => {
    r.value+=10;
  }

  const animatedStyles = useAnimatedStyle(() => ({
    
    transform: [
                {
                translateX: withSpring(translateX.value*2)
              },
              {
                translateY: withSpring(translateY.value*2)
              }
              ],
            }));

  const animatedProps = useAnimatedProps(()=> ({
    r: withTiming(r.value)
  }))          

  return (
    <SafeAreaView style={styles.container} >
      <Animated.View style={[styles.box, animatedStyles, {height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,}]}>

    </Animated.View>
    <TouchableOpacity onPress={handlePressRight} style={styles.button}>
      <Text style={styles.text}>
        Move right
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handlePressDown} style={styles.button}>
      <Text style={styles.text}>
        Move Down
      </Text>
    </TouchableOpacity>
    

    <TouchableOpacity onPress={handlePress} >
      {/* <Text style={styles.text}>
        Size increase
      </Text> */}
      <Svg style={styles.svg}>
      <AnimatedCircle cx="50%" cy="50%" fill="yellow"
      animatedProps={animatedProps} />
    </Svg>
    </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // alignItems:"center", 
    // justifyContent:"center"
  },
  button: {
    borderWidth:2,
    padding:10,
    marginTop:20, 
    marginHorizontal:150,
  }, 
  box: {backgroundColor:"pink",  
  borderRadius:50,
},
text : {
  textAlign:"center"
}, 
svg: {
  position:"absolute",
  height:200,
  width:"100%",
  // viewBox:"0 0 50 50"
}
});

export default App;
