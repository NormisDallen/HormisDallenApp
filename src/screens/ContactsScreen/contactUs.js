import React, { useState } from 'react'
import { View, Text, ScrollView,Linking } from 'react-native'
import {  FAB, Card } from 'react-native-paper'
//import Call from 'react-native-phone-call'
export default function ContactUs({navigation}) {
              
  
    const Phone= '0751547654'
    const Gmail= 'nabatanzigorret143@gmail.com'
    const Whatsap ="0751547654"
    return (
        <>
            <ScrollView >

            
               
                
               

                <View >
                    <Card style={{width:'50vh',elevation:5, backgroundColor:"whitesmoke", height:200, marginLeft:20,alignContent:'center',marginTop:30,backgroundColor:'white'}}>
                        <Card.Actions>
                            <View>
                                <Text style={{marginTop:49,padding:20,marginRight:20}}>
                                 Contact us using the folllowing channels<br/><br/>
                                Gmail us on nabatanzigorret143@gmail.com<br/><br/>
                                    tel 0751547654, 0708546887
                                </Text>
                               
                            </View>
                        </Card.Actions>
                    </Card>
                </View>
               <br/>
                
                <View style={{marginLeft:30,marginTop:20,display:'flex',flexDirection:'column',justifyContent:'space-around'}}> 
                    
                   <View style={{marginBottom:30}}>
                    <FAB 
                    onPress={()=>{Linking.openURL(`tel:${ Phone}}`)}}
                    label="Contact Us Now"
                    icon='phone'
                    color="white"
                    style={{position:'absolute',marginRight:3}}
                    />
                    </View>
              <br/>
                    <View style={{marginTop:20,marginBottom:30}}>
                    <FAB 
                    
                    label="Whatsap Us Now"
                    onPress={()=>{Linking.openURL(`tel:${ Whatsap}}`)}}
                    icon='plus'
                    color="white"
                    uppercase='false'
                    style={{position:'absolute',marginRight:10}}
                    />
                    </View>
                       <br/>
                    <View style={{marginTop:20}}>
                    <FAB 
                    uppercase='false'
                    label="Gmail Us Now"
                    onPress={()=>{Linking.openURL(`mail:${ Gmail}}`)}}
                    icon='email'
                    color="white"
                    style={{position:'absolute',marginRight:10, width:150}}
                    />
                    </View>
                </View>
                <br/>
                <View>
                <br/>
                </View>


                   
            </ScrollView>



            
        </>
    )
}


