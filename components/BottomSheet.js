// The purpose of this component was meant to be a menu that was going to pop
// at the bottom of the screen. unfortunately, it holds concepts which are too
// advanced for me yet, so I decided to keep out of the main file `App.js`
//
// I leave it here as a reminder of my efforts...

import { Dimensions, StyleSheet, View, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const BottomSheet = () => {
   const translateY = useSharedValue(0);

   const gesture = Gesture.Pan().onUpdate((event) => {
      translateY.value = event.translationY;
   })

   const rBottomSheetStyle = useAnimatedStyle(() => {
      return {
         transform: [{translateY: translateY.value}]
      }
   })

   return (
      <GestureDetector gesture={gesture}>
         <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
            <Pressable style={styles.top}><Icon style={styles.footerIcon} name='chevron-up-outline'/></Pressable>
         </Animated.View>
      </GestureDetector>
   ) ;
}

const styles = StyleSheet.create({
   bottomSheetContainer: {
      alignItems: "stretch",
      height: SCREEN_HEIGHT,
      width: '100%',
      backgroundColor: '#B7EFD4',
      position: 'absolute',
      top: SCREEN_HEIGHT / 1.5,
      borderTopEndRadius: 25,
      borderTopStartRadius: 25,
   },
   top:{
      backgroundColor: '#9ed3ba',
      display: "flex",
      alignItems: "center",
      height: 25,
      borderTopEndRadius: 25,
      borderTopStartRadius: 25,
   },
   footerIcon: {
      transform: [{ translateY: -2}],
      fontSize: 28,
      color: 'rgb(100, 100, 100)',
   }
})

export default BottomSheet;
