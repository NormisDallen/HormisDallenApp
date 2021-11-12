import React from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable, StatusBar, Image } from 'react-native'
import AppBar from '../../components/AppBar/AppBar'
import { constantstyles } from '../../Constants/constanstStyles'
import { theme } from '../../theme'

//business
const menuList = [
    {
        id: 1,
        list: {
            left: {
                recentImage: "https://media.istockphoto.com/photos/cute-girl-dreaming-about-school-sitting-with-backpack-and-books-picture-id1169134968?b=1&k=20&m=1169134968&s=170667a&w=0&h=kNCx9dnYX7DACGpePkh_S_v5NMgxzMgcu6bUADcRqy8=",
                title: "Primary One Notes",
                navigate: "P.1"

            },
            right: {
                recentImage: "https://media.istockphoto.com/photos/you-can-see-shes-ready-to-write-the-test-picture-id1136969011?b=1&k=20&m=1136969011&s=170667a&w=0&h=hY20ewRX9MnZeoj6C9euDGFnXjCh1B4rF3c7nFX90cU=",
                title: "Primary Two Notes",
                navigate: "P.2"


            }

        }
    },
    {
        id: 2,
        list: {
            left: {
                recentImage: "https://media.istockphoto.com/photos/three-children-of-students-with-school-backpacks-different-ethnic-of-picture-id1330890943?b=1&k=20&m=1330890943&s=170667a&w=0&h=1zTK4rE5H0Y_KmiE_6YpWh0fwa4IxZ9vr-cqONgNi2E=",
                title: "Primary Three Notes",
                navigate: "P.3"

            },
            right: {
                recentImage: "https://media.istockphoto.com/photos/two-schoolgirls-at-a-desk-one-funny-the-other-upset-picture-id1167332464?b=1&k=20&m=1167332464&s=170667a&w=0&h=MIxhnxQ-D_8NBYCh7sbV4tDDIfw3QEOL6g4VmCrMgEs=",
                title: "Primary Four Notes",
                navigate: "P.4"

            }

        }
    },
    /*list three */
    {
        id: 3,
        list: {
            left: {
                recentImage: "https://media.istockphoto.com/photos/group-of-classmates-discussing-about-homework-in-front-of-school-picture-id1149488481?b=1&k=20&m=1149488481&s=170667a&w=0&h=ew5dkGsn53ucosAp3kI_koJ_MWawbxcyZqjDZn0Ul_I=",
                title: "Primary Five Notes",
                navigate: "P.5"

            },
            right: {
                recentImage: "https://media.istockphoto.com/photos/teacher-explaining-tasks-to-a-schoolgirl-picture-id184384164?b=1&k=20&m=184384164&s=170667a&w=0&h=q2s15FkvRj_FaBQ8ORa8E7AVnZ-3l6AWmk_qO05huJE=",
                title: "Primary Six Notes",
                navigate: "P.6"
            }

        }
    },
    /* list three*/
    /*list four */
    {
        id: 4,
        list: {
            left: {
                recentImage: "https://media.istockphoto.com/photos/school-kids-with-notebooks-over-yellow-background-picture-id1135962007?b=1&k=20&m=1135962007&s=170667a&w=0&h=P2P-MVl_R2pNE1U939a3G2sl03WcJ32TxhCSTtx4SG8=",
                title: "Primary Seven Notes",
                navigate: "P.7"

            },

        }
    },
    /*list four */


]

const Menu = ({ navigation }) => {
    return (
        <>
            <StatusBar />
            <AppBar title="Pupils' Notes" />
            <ScrollView style={[constantstyles.container]} showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginTop: 10 }}
            >

                {
                    /*menu both move */
                }
                <View>
                    {
                        menuList.map(({ id, list: { left, right } }) =>
                            <View style={[constantstyles.flexStyles,
                            {
                                alignItems: "center", justifyContent: "space-evenly",
                                marginVertical: 10,

                            }
                            ]} key={id}>

                                {/*left */}
                                <Pressable

                                    onPress={() => navigation.navigate("MenuList",
                                        {
                                            screen: left?.navigate

                                        }
                                    )}
                                    style={[styles.pressableStyles]}

                                >

                                    <Image
                                        source={{ uri: left?.recentImage }}
                                        style={[styles.imageStyles]}
                                    />
                                    {/*menu words*/}
                                    <View style={[{ marginVertical: 5, marginHorizontal: 5 }]}>
                                        <View style={[constantstyles.resideViews,]}>
                                            <Text style={{ color: `${theme.colors.primary}`, fontWeight: "500", fontSize: 12 }}>{left.title}</Text>

                                        </View>

                                    </View>
                                    {/*menu words */}
                                </Pressable>
                                {/*left */}
                                {/*right */}
                                <Pressable

                                    onPress={() => navigation.navigate("MenuList",
                                        {
                                            //alert('')
                                            screen: right?.navigate

                                        }
                                    )}
                                    style={[styles.pressableStyles]}

                                >

                                    <Image
                                        source={{ uri: right?.recentImage }}
                                        style={[styles.imageStyles]}
                                    />
                                    {/*menu words*/}
                                    <View style={[{ marginVertical: 5, marginHorizontal: 5 }]}>
                                        <View style={[constantstyles.resideViews,]}>
                                            <Text style={{ color: `${theme.colors.primary}`, fontWeight: "500", fontSize: 12 }}>{right?.title}</Text>

                                        </View>

                                    </View>
                                    {/*menu words */}
                                </Pressable>

                                {/*right */}

                            </View>
                        )
                    }

                </View>
                {
                    /*menu both move */
                }




            </ScrollView>
        </>
    )
}

export default Menu

const styles = StyleSheet.create({
    pressableStyles: {
        width: theme.dimensions.width / 2.2,
        height: 150, borderRadius: 10,
        marginRight: 7,
        marginBottom: 15,

    },
    imageStyles: {
        width: theme.dimensions.width / 2.2,
        height: 125,
        borderRadius: 10
    }

})
