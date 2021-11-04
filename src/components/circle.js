import React from 'react'
import { View, Text } from 'react-native'
import { theme } from '../theme'
export default function Circle() {
    return (
        <View style={{
            width: 100,
             height: 100, 
             backgroundColor: `${theme.colors.primary}`,
              borderRadius: 150 / 2,
               marginLeft: -40, marginTop: 0,
               marginBottom:1,
            elevation: 5,
        }}/>

    )
}
