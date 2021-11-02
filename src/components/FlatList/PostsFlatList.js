import React from 'react'
import { StyleSheet, Text, View , FlatList, Pressable, Image} from 'react-native'
import { theme } from '../../theme'

const StatusFlatList = ({flatListStyle, showName, vertical, horizontal}) => {
    const images = [
        {
            id:1,
            recentImage:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
        },
        {
            id:2,
            recentImage:"https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            
        },
        {
            id:3,
            recentImage:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
        },
        {
            id:4,
            recentImage:"https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            
        },
        {
            id:5,
            recentImage:"https://images.pexels.com/photos/2951142/pexels-photo-2951142.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            id:6,
            recentImage:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
        },
        {
            id:7,
            recentImage:"https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            
        },
        {
            id:8,
            recentImage:"https://images.pexels.com/photos/2951142/pexels-photo-2951142.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
    ]
    return (
        <FlatList
             data={images}
              keyExtractor={item=>String(item.id)}
              contentContainerStyle={{paddingHorizontal:10}}
              renderItem={({item, index})=>{
                  return(
                         <Pressable 

                         >
                             <Image
                           source={{uri:item.recentImage}}
                           style={flatListStyle}
                          />
                          {
                              showName&&
                              <View>
                              <Text>Norman</Text>
                          </View>
                          }

                         </Pressable>
                  )
              }}
            />
    )
}

export default StatusFlatList

const styles = StyleSheet.create({})
