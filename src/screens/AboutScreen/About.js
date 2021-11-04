import React from 'react'
import { View, Text, FlatList, SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native'
import { Card, FAB, Divider } from 'react-native-paper';
import { theme } from '../../theme'
import { Arrayimages } from '../../Constants/fakeimages';
import { constantstyles } from '../../Constants/styles';


export default function About({ navigation }) {
    const data = [
        {
            id: '1',
            image: Arrayimages.image2,
            title: "School History",
            info: `  
                  
    HormisDallen was founded on 12th 
    February 1986 with a total number of 9
    pupils and 3 teachers by Mr Mukalazi 
    Kizito Hormisdasc who aimed at making a 
    contribution to the community by providing
    quality education that is commited to 
    meeting the evolution challenges of the 
    day.
       
        `
        },
      
        {
            id: '2',
            image: Arrayimages.image1,
            title: "School Location",
            info: `
        The school is privately owned and is
        found in  Kampala District off
         Mawanda road in Kamokya parish.
       Its' a mixed day, boarding nursery 
       and primary school.It is licenced and
       registered by the ministry of Education 
       and Sports of the Government of Uganda.  
      The school has expaned to include other
      branches Hormisdallen School Kyebando a
      off Elis  road, Hormisdallen School
      Gayaza off   Bugema road and Darline
      School Kitezi.

                
                `
        },


    ]




    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>

                    <View style={styles.all}>

                        <View style={styles.inner}>
                            <FAB color={theme.colors.text} style={styles.fab} icon='book' />
                            <Text style={styles.text} onPress={() => { navigation.navigate('About School') }}>History</Text>
                        </View>

                        <View style={styles.inner}>
                            <FAB color='white' style={styles.fab} icon='car' onPress={() => { navigation.navigate('School Transport') }} />
                            <Text style={styles.text} >Transport</Text>
                        </View>

                        <View style={styles.inner}>
                            <FAB color='white' style={styles.fab} icon='football' onPress={() => { navigation.navigate('Sports') }} />
                            <Text style={styles.text} >Sports</Text>
                        </View>

                        <View style={styles.inner}>
                            <FAB color='white' style={styles.fab} icon='phone' onPress={() => { navigation.navigate('Contact Us') }} />
                            <Text style={styles.text}>Contact Us</Text>
                        </View>


                    </View>


                    {/**<ScrollView style={styles.top}> */}




                    <View style={{ marginTop: 200, marginLeft: 8, alignContent: 'center' }}>

                    {/* mission */}

                        <View style={{ padding: 5,display:'flex',flexDirection:'column' }}>
                        <Text  style={styles.text3}>
                        Mission
                        </Text>

                    <View style={styles.inner2}>
                    <Text style={styles.info2}>
                    To Provide Education That Is Committed To Meeting The Evolutionary Challenges Of The Day
                    </Text>
                    </View>
                        </View>
                        
                        {/* vision */}

                        <View style={{ padding: 5,display:'flex',flexDirection:'column' }}>
                        <Text style={styles.text3}>
                        Vision
                        </Text>

                    <View style={styles.info3}>
                    <Text style={styles.info2}>
                    Education Has No Money Value
                    </Text>
                    </View>
                        </View>
                        
                    



                      {/**mission statement */}
                        <View style={{ padding: 5,display:'flex',flexDirection:'column' }}>
                            <Text style={styles.text3}>
                            Mission Statement
                            </Text>
                               
                                <View style={styles.inner2}>
                                    <Text style={styles.info2}>
                                        A Person Who Uses His/Her Full Potential To  {}
                                        Effectively Fend For Self And Effectively Contribute To The Development Of The Nation
                                    </Text>
                                </View>
                        
                        </View>
                    </View>

                    {/* card info */}
                    {
                        data.map((item, index)=>(<View key ={index}
                         style={{  color: 'white', marginVertical: 10,  marginRight: 1 , marginLeft:1}}>

                        <Card
                            style={{
                                backgroundColor: `${theme.colors.accent}`,
                                width: theme.dimensions.width-10,
                                marginBottom: 10,
                                justifyContent: 'space-around',
                                marginTop: 6,
                                shadowColor: `${theme.colors.primary}`,
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: .1,
                                shadowRadius: 10,
                                borderRadius: 10,
                                
                            }}>
                            <Card.Actions style={[constantstyles.flexStyles]}>
                                <View>

                                    <Text style={styles.text2}>{item.title}</Text>
                                    <Divider style={{ width: '100%' }} />
                                    <View style={[constantstyles.resideViews]}>
                                    <Text style={styles.info}>{item.info}</Text>
                                    </View>


                                </View>

                            </Card.Actions>
                        </Card>

                    </View>


                        ))
                    }

                    
                </ScrollView>

            </SafeAreaView>


        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "whitesmoke"
    },
    fab: {
        width: 50,
        marginLeft: 20

    },
    main: {
        fontWeight: 'bold',
        fontSize: 20
    },
    info: {
        color: 'black',
        textAlign:'center',
        fontSize:15,
        width: '100%'
    
    },
    info2: {
        marginLeft: 5,
        color: `${theme.colors.primary}`,
        fontWeight: '600',
        marginTop: 4,
        fontSize:15,
        textAlign:'center'

    },
    info3: {
        marginTop: 20,
        width: '100%',
        borderColor: `${theme.colors.text}`,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        elevation: 3,
        alignContent:'center',
        marginBottom:10

    },
    inner2: {
        marginTop: 20,
        width: '100%',
        borderColor: `${theme.colors.text}`,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 70,
        elevation: 3,
        alignContent:'center',
        marginBottom:10
    },
    text3: {
        marginLeft: 2,
        marginBottom: 15,
        color: 'black',
        fontWeight: 'bold',
        


    },
    top: {

        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 20,
        width: '80%',


    },
    all: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        position: 'absolute',
        marginLeft: 18


    },
    text: {
        marginLeft: 18,
        marginTop: 5,
        color: `${theme.colors.black}`


    },
    inner: {
        display: 'flex',
        flexDirection: 'column'
    },
    text2: {
        marginLeft: 20,
        textAlign: 'center',
        marginTop: 20,
        color: 'black',
        fontWeight: 'bold',
        fontSize:18

    }
})
