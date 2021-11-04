import React, { useState } from 'react'
import { View, Text, ScrollView,Linking,StyleSheet } from 'react-native'
import {  FAB, Card } from 'react-native-paper'
import { theme } from '../../theme'


export default function ContactUs({navigation}) {
              
  
    const Phone=' +256 393 513540'
    const Gmail= '     info@hormisdallenschools.com'
    // const Whatsap ="0751547654"
    return (
        <>
            <ScrollView >

            
               
                
               

                <View >
                    <Card style={styles.card}>
                        <Card.Actions>
                            <View>
                                <Text style={styles.text}>
                                 Contact us using the folllowing channels {'\n'}
                                 info@hormisdallenschools.com {'\n'}
                                    tel +256 0414 532567 {'\n'}
                                    Kamwokya, off Mawanda Road
                                </Text>
                               
                            </View>
                        </Card.Actions>
                    </Card>
                </View>
              
                <View >
                    <Card style={styles.card}>
                        <Card.Actions>
                            <View>
                                <Text style={styles.text}>
                                 Contact us using the folllowing channels  {'\n'}
                                 info@hormisdallenschools.com  {'\n'}
                                    tel +256 414 531393  {'\n'}
                                    Kyebando off Elisa Road
                                </Text>
                               
                            </View>
                        </Card.Actions>
                    </Card>
                </View>
                <View >
                    <Card style={styles.card}>
                        <Card.Actions>
                            <View>
                                <Text style={styles.text}>
                                 Contact us using the folllowing channels {'\n'}
                                 info@hormisdallenschools.com {'\n'}
                                    tel  +256 393 513540 {'\n'}
                                    Gayaza Town
                                </Text>
                               
                            </View>
                        </Card.Actions>
                    </Card>
                </View>
                
                <View style={styles.fabs}> 
                    
                   <View style={{marginBottom:50,alignItems:'center'}}>
                    <FAB 
                    onPress={()=>{Linking.openURL(`tel:${ Phone}}`)}}
                    label="Contact Us Now"
                    icon='phone'
                    color="white"
                    style={{position:'absolute',marginRight:3}}
                    />
                    </View>
            
                     {/* <View style={{marginTop:40,marginBottom:50}}>
                    <FAB 
                    
                    label="Gmail Us Now"
                    onPress={()=>{Linking.openURL(`mail:${ Gmail}}`)}}
                    icon='email'
                    color="white"
                    uppercase='false'
                    style={{position:'absolute',marginRight:10}}
                    />
                    </View>  */}
                   
                    {/* <View style={{marginTop:20}}>
                    <FAB 
                    uppercase='false'
                    label="Gmail Us Now"
                    onPress={()=>{Linking.openURL(`mail:${ Gmail}}`)}}
                    icon='email'
                    color="white"
                    style={{position:'absolute',marginRight:10, width:150}}
                    />
                    </View> */}
                </View>
              
                <View>
           
                </View>


                   
            </ScrollView>



            
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `${theme.colors.text}`
    },
    card: {
        flex: 1,
        width:'90%',
        elevation:5,
         backgroundColor:"whitesmoke",
         height:100,
          marginLeft:10,
          alignContent:'center',
          marginTop:30,
          backgroundColor:'white'

    },
    text: {
        marginTop:4,
        padding:5,
        marginRight:2,
        color:'black'
    },
    fabs: {
        marginLeft:10,
        marginTop:40,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignContent:'center'
    }
})