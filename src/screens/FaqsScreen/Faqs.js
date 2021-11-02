import React from 'react'
import { View, Text,FlatList,SafeAreaView,ScrollView,Image,StyleSheet } from 'react-native'
import { Card } from 'react-native-paper';
import AppBar from '../../components/AppBar/AppBar'
import { Arrayimages } from '../../Constants/fakeimages';
import { theme } from '../../theme';

export default function Faqs() {
    const data = [
        {
            id:'1',
            image: Arrayimages.image2,
            title: "Are the notes free?",
            info:`
        To access the notes select your 
        class and make sure that you
        have subscribed to acces the notes.
        All payment methods are provided
        and you will receive a confirmation
        receipt of your payments
            `
        },
        {
            id:'2',
            image: Arrayimages.image1,
            title: "Fees Structure",
            info:`
        Kindly contact us about the adjustments
        in the fees structure.
             `
        },
        {
            id:'3',
            image: Arrayimages.image1,
            title: 
            `
Does the school provide online learning?`,
            info:`
        We provide online learning using 
        zoom and google meet join using
        our school link.
         
            `
        },
        {
            id:'4',
            image: Arrayimages.image1,
            title: `
How do i apply?`,
            info:`
        Check in the under more for the
        application forms and apply accordingly.
            `
        },
    ]

    

     
    return (
        <>
        <ScrollView>

        {/**<View style={{borderBottomWidth:2,borderBottomColor:'green'}}>
           <AppBar title="Frequently Asked Questions" />
        </View> */}
 <br/>
      
           <SafeAreaView>
           <FlatList
                    
                    keyExtractor={item=>(item.id)}
                       data={data}
                    renderItem={({item})=><>
                    <View style={{width:"50vh", color:'white', marginTop:10, justifyContent:'space-around',marginLeft:20}}>

                        <Card style={{backgroundColor:theme.colors.primary,width:300,height:200 ,marginBottom:10,justifyContent:'space-around'}}>
                            <Card.Actions style={{display:'flex',flexDirection:'row',}}>
                                <View>
                                
                      <Text style={styles.text2}>{item.title}</Text>
                      <Text style={styles.text} >{item.info}</Text>
                      
                                </View>
                    
                            </Card.Actions>
                        </Card>
                    
                    </View>
                    
                    </>
                }
                />
           </SafeAreaView>
           <br/>
           <View style={styles.footer}>
            <Text style={styles.text3}>All inquires are related to the school<br/>
            for more inquiries reach us on our contacts page</Text>
        </View>
        
        </ScrollView>

        
        
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    footer:{
        display:'flex',
        backgroundColor:theme.colors.primary,
        borderRadius:100,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        marginBottom:5,
        width:'100%',
        height:100,
        color:theme.colors.primary

    },
    text:{
    
        color:'white'

    },
    text3:{
        marginLeft:30,
        marginTop:10,
        padding:10,
        color:theme.colors.text
    },
    text2:{
        marginLeft:20,
        textAlign:'center',
       marginTop:20,
        color:'black',
        fontWeight:'bold'

    }
})