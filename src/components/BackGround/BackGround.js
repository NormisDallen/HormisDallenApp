import { Feather } from '@expo/vector-icons'
import React, { useRef, useState } from 'react'
import { StyleSheet, View, ImageBackground, Animated, Dimensions, Pressable, TouchableOpacity } from 'react-native'
import { theme } from '../../theme';
import { Appbar, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';



const { width } = Dimensions.get("screen");
//avatar width
const AVATAR_WIDTH = (width / 3);


const Background = ({ previous }) => {
  const navigation = useNavigation();



  return (
    <ImageBackground
      // Image from https://unsplash.com/photos/EYnirI5zPT0
      source={{ uri: 'https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612' }}
      style={{ width: '100%', opacity: 0.7 }}>
      <Appbar.Header style={{
        backgroundColor: 'transparent',
        width: '100%',
        elevation: 0,
        height: theme.dimensions.height/4
      }}>
        {previous ?

          <Appbar.BackAction onPress={navigation.goBack}
            color={theme.colors.primary}
            style={{
              position: 'absolute',
              top: 5,
              left: 5
            }}
            size={28}
          />
          : null}

        <Appbar.Content 

        color={theme.colors.backdrop}
            style={{
              position: 'absolute',
              top: 5,
              left:AVATAR_WIDTH-5
            }}
         />


          <View
           style={{ 
            position: 'absolute',
            top: theme.dimensions.height/5,
            right: 20,
            borderWidth:3,
            borderRadius:50,
            borderColor:theme.colors.text,
            backgroundColor:"black",
            zIndex:50
            }}
          >
               <Avatar.Image
          source={{ uri: "https://t3.ftcdn.net/jpg/02/95/58/22/360_F_295582214_IJrBXV3TJeNavfozclGX88TMVESBMWAV.webp" }}
           
          size={90}
        />

          </View>
       
        
       
      </Appbar.Header>
    </ImageBackground>


  )
}

export default Background

const styles = StyleSheet.create({

})
