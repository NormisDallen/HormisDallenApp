import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import { constantstyles } from '../../Constants/styles'
import { theme } from '../../theme'

const CardsTop = ({cards}) => {
    //navigation
    const navigation = useNavigation()
    return (
        
         <ScrollView horizontal showsHorizontalScrollIndicator={false} 
         contentContainerStyle={[constantstyles.centerContent, constantstyles.flexStyles]}>
             {
                 cards.map((card, index) =>
                     <Pressable key={index} style={[{
                         width: 100, height: 34, elevation: 0, borderRadius: 10, marginHorizontal: 4,
                         marginTop: 2,
                         marginBottom: 10,
                         borderWidth: 1,
                         borderColor: theme.colors.primary
                     }, constantstyles.centerContent]}
                     onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        navigation.navigate('CardScreen', {


                            screen:card?.name,
                          name:card?.name,
                          Component:card?.Component
                          
                        });
                      }}
                     >
                         <View style={[constantstyles.resideViews, constantstyles.centerContent]}>
                             <Text style={[{ marginTop: 3, }, constantstyles.centerContent]}>{card.card}</Text>
                         </View>
                     </Pressable>)
             }
         </ScrollView>
         
    )
}

export default CardsTop

const styles = StyleSheet.create({})
