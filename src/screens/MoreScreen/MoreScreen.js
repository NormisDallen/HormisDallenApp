import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Card, Divider } from 'react-native-paper'
//import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../theme';
export default function MoreScreen({ navigation }) {
  return (
    <>
      <ScrollView>

        <Card style={styles.card} >

          <Card.Actions>
            <View>

              <View style={styles.wrapper}>
                <View style={styles.container}>
                  <Ionicons name='school' size={20} color="#006a4e" />
                  <Text style={styles.Text} onPress={() => { navigation.navigate('About School') }}>About School</Text>
                </View>

                <Divider style={{ width: '100vh', color: "green" }} />
              </View>

              <View style={styles.wrapper}>
                <View style={styles.container}>
                  <Ionicons name='book' size={20} color="#006a4e" />
                  <Text style={styles.Text} onPress={() => { navigation.navigate('School Application Form') }}>Application Forms</Text>

                </View>
                <Divider />
              </View>


              <View style={styles.wrapper}>
                <View style={styles.container}>
                  <Ionicons name='call' size={25} color="#006a4e" />
                  <Text style={styles.Text} onPress={() => { navigation.navigate('Contact Us') }}>Contact Us</Text>

                </View>
                <Divider />
              </View>


              <View style={styles.wrapper}>
                <View style={styles.container}>
                  <Ionicons name='help-circle' size={25} color="#006a4e" />
                  <Text style={styles.Text} onPress={() => { navigation.navigate('Fequently Asked Questions') }}>School Inquiries</Text>

                </View>

                <Divider />
              </View>



              <View style={styles.wrapper}>

                <View style={styles.container}>
                  <Ionicons name='car' size={25} color="#006a4e" />
                  <Text style={styles.Text} onPress={() => { navigation.navigate('School Transport') }}>Transport</Text>
                </View>
                <Divider />
              </View>
              <View style={styles.wrapper}>

                <View style={styles.container}>
                  <Ionicons name='person-circle' size={25} color="#006a4e" />
                  <Text style={styles.Text} onPress={() => { navigation.navigate('Your Profile') }}>Your Profile</Text>
                </View>
                <Divider />
              </View>

              <View style={styles.wrapper}>
                <View style={styles.container}>
                  <Ionicons name='key' size={25} color="#006a4e" />
                  <Text style={styles.Text} onPress={() => { navigation.navigate('School Transport') }}>Log Out</Text>

                </View>

              </View>



            </View>
          </Card.Actions>

        </Card>

      </ScrollView>

    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection:
      'row',
    alignItems: 'center',
    marginLeft: 0
  },
  Text: {
    fontSize: 15,
    marginLeft: 20

  },
  wrapper: {
    height: 60
  },
  inputStyles: {
    height: 40,
    borderWidth: 0,
    marginTop: -5
  },
  viewStyle: {
    borderBottomColor: `${theme.colors.ligthgray}`,
    borderBottomWidth: 5
  },
  card: {
    width: '100vh',
    height: '70vh',
    marginTop: 0,

  }
})
