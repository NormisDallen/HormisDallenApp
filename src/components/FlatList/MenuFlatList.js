import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import { constantstyles } from '../../Constants/styles'
import { theme } from '../../theme';


const MenuFlatList = ({ imageStyles, pressableStyles, menu }) => {

     const navigation = useNavigation()

    return (
        <FlatList
            data={menu}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            renderItem={({ item, index }) => {
                return (
                    <Pressable

                        onPress={()=>navigation.navigate("MenuList", 
                        {
                            screen:item.navigate
                            
                        }
                        )}
                        style={[pressableStyles]}

                    >

                        <Image
                            source={{ uri: item.recentImage }}
                            style={[imageStyles]}
                        />
                        {/*menu words*/}
                        <View style={[{marginVertical:5, marginHorizontal:5}]}>
                            <View style={[constantstyles.resideViews,]}>
                                <Text style={{ color: `${theme.colors.primary }`, fontWeight: "500", fontSize: 12 }}>{item.title}</Text>

                            </View>

                        </View>
                        {/*menu words */}
                    </Pressable>
                )
            }}
        />
    )
}

export default MenuFlatList

const styles = StyleSheet.create({})
