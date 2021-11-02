import React from 'react'
import { StyleSheet, Text, View, Pressable,SafeAreaView,StatusBar } from 'react-native';
import { theme } from "../../theme"
import { constantstyles } from '../../Constants/constanstStyles'
import { FAB } from 'react-native-paper';
import AppBar from '../../components/AppBar/AppBar';
const Notification = () => {
    return (
        <>
        
<StatusBar  backgroundColor={theme.colors.primary}/>
        <View>
            <AppBar title="Messages"/>
        </View>
        <SafeAreaView style={[constantstyles.container, { backgroundColor: `${theme.colors.text}`, marginTop:50 }]}>
            <Pressable style={[styles.pressableStyles, constantstyles.resideViews]}>
                {/*time */}
                <View style={[constantstyles.absoluteStyles, { top: 3, right: 5 }]}>
                    <Text style={{ color: theme.colors.placeholder, fontSize: 9, marginBottom: 3 }}>

                        22/08/2021

                    </Text>
                </View>
                {/*time */}
                <View>
                    <Text>There are no notifications yet </Text>
                </View>
               
            </Pressable>
        </SafeAreaView>
        
        
        <View style={{display:'flex',marginTop:20,marginRight:10,padding:10, alignItems:'flex-end'}}>
                    <FAB 
                    style={{width:50}}
                   icon="delete"
                    color='white'
                    uppercase={false}
                    
                    />
                </View>
        </>
    )
}

export default Notification

const styles = StyleSheet.create({
    pressableStyles: {
        backgroundColor: `${theme.colors.text}`,
        elevation: 3,
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 0,
        borderRadius: 10
    },

})
