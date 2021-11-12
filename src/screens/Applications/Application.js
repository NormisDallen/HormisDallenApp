import React, { useState } from 'react'
import { View,  ScrollView, StatusBar, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Card, TextInput } from 'react-native-paper';
import { theme } from '../../theme';
import ButtonComponent from '../../components/Button/Button';
import { Picker } from '@react-native-picker/picker';

export default function Application() {
  const [selectedValue, setSelectedValue] = useState("female");
  const [primary, setPrimary] = useState("one");
  const [status, setStatus] = useState("Day");
  return (
    <ScrollView style={{ marginBottom: 30 }}>
      <StatusBar backgroundColor={theme.colors.primary} />



      <View>
        <View style={styles.container}>

        </View>

        <Card style={styles.container}>
          <Card.Actions style={styles.inputStyles}>

            <KeyboardAvoidingView>

              <View>
                <TextInput


                  style={{
                    backgroundColor: theme.colors.text,
                    color: 'red',
                    width: '100%',
                    alignSelf: 'center',
                    borderBottomWidth: 0,
                    height: 55,
                    marginBottom: 20,
                    borderColor: theme.colors.disabled
                  }}
                  right={

                    <TextInput.Icon


                      style={{ marginRight: 15, padding: 5 }}
                      color={theme.colors.placeholder}
                      size={27}

                    />
                  }

                  theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
                  mode={'outlined'}
                  autoCorrect={false}
                  placeholder="Enter name"
                  outlineColor={theme.colors.primary}
                  underlineColor={theme.colors.disabled}
                  selectionColor={theme.colors.primary}

                />
              </View>

              <View>
                <TextInput


                  style={{
                    backgroundColor: theme.colors.text,
                    color: 'red',
                    width: '96%',
                    alignSelf: 'center',
                    borderBottomWidth: 0,
                    height: 55,
                    marginBottom: 20,
                    borderColor: theme.colors.disabled
                  }}
                  right={

                    <TextInput.Icon

                      style={{ marginRight: 15, padding: 5 }}
                      color={theme.colors.placeholder}
                      size={27}

                    />
                  }

                  theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
                  mode={'outlined'}
                  autoCorrect={false}
                  placeholder="Email Address"
                  outlineColor={theme.colors.primary}
                  underlineColor={theme.colors.disabled}
                  selectionColor={theme.colors.primary}

                />
              </View>
              <View>
                <TextInput
                  label="Guardian's contact"

                  style={{
                    backgroundColor: theme.colors.text,
                    color: 'red',
                    width: '96%',
                    alignSelf: 'center',
                    borderBottomWidth: 0,
                    height: 55,
                    marginBottom: 20,
                    borderColor: theme.colors.disabled
                  }}
                  right={

                    <TextInput.Icon

                      style={{ marginRight: 15, padding: 5 }}
                      color={theme.colors.placeholder}
                      size={27}

                    />
                  }

                  theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
                  mode={'outlined'}
                  autoCorrect={false}
                  placeholder="Enter phone number"
                  outlineColor={theme.colors.primary}
                  underlineColor={theme.colors.disabled}
                  selectionColor={theme.colors.primary}

                />
              </View>
              <View>
                <TextInput


                  style={{
                    backgroundColor: theme.colors.text,
                    color: 'red',
                    width: '96%',
                    alignSelf: 'center',
                    borderBottomWidth: 0,
                    height: 55,
                    marginBottom: 20,
                    borderColor: theme.colors.disabled
                  }}
                  right={

                    <TextInput.Icon

                      style={{ marginRight: 15, padding: 5 }}
                      color={theme.colors.placeholder}
                      size={27}

                    />
                  }

                  theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
                  mode={'outlined'}
                  autoCorrect={false}
                  placeholder="Region"
                  outlineColor={theme.colors.primary}
                  underlineColor={theme.colors.disabled}
                  selectionColor={theme.colors.primary}

                />
              </View>
              <View>
                <TextInput


                  style={{
                    backgroundColor: theme.colors.text,
                    color: 'red',
                    width: '96%',
                    alignSelf: 'center',
                    borderBottomWidth: 0,
                    height: 55,
                    marginBottom: 20,
                    borderColor: theme.colors.disabled
                  }}
                  right={

                    <TextInput.Icon

                      style={{ marginRight: 15, padding: 5 }}
                      color={theme.colors.placeholder}
                      size={27}

                    />
                  }

                  theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
                  mode={'outlined'}
                  autoCorrect={false}
                  placeholder="Enter Age"
                  outlineColor={theme.colors.primary}
                  underlineColor={theme.colors.disabled}
                  selectionColor={theme.colors.primary}

                />
              </View>


              <Picker
                selectedValue={primary}
                style={{ color: 'black', height: 50, width: 150, borderColor: `${theme.colors.primary}`, backgroundColor: `${theme.colors.primary}`, marginTop: 20, marginBottom: 10 }}
                onValueChange={(itemValue, itemIndex) => setPrimary(itemValue)}
              >

                <Picker.Item label="P.1" value="one" />
                <Picker.Item label="P.2" value="two" />
                <Picker.Item label="P.3" value="three" />
                <Picker.Item label="P.4" value="four" />
                <Picker.Item label="P.5" value="five" />
                <Picker.Item label="P.6" value="six" />
                <Picker.Item label="P.7" value="seven" />
              </Picker>
              <Picker
                selectedValue={selectedValue}
                style={{ color: 'black', height: 50, width: 150, borderColor: `${theme.colors.primary}`, backgroundColor: `${theme.colors.primary}`, marginTop: 20, marginBottom: 10 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Female" value="girl" />
                <Picker.Item label="Male" value="boy" />
              </Picker>

              <Picker
                selectedValue={selectedValue}
                style={{ color: 'black', height: 50, width: 150, borderColor: `${theme.colors.primary}`, backgroundColor: `${theme.colors.primary}`, marginTop: 20, marginBottom: 10 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Day" value="day" />
                <Picker.Item label="Boarding" value="board" />
              </Picker>
            </KeyboardAvoidingView>
          </Card.Actions>
          <View style={{ display: 'flex', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>

            <ButtonComponent style={{ backgroundColor: `${theme.colors.primary}`, width: 240 }} color={`${theme.colors.text}`} mode="outlined" text="Save" />
          </View>


          <View style={{ display: 'flex', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>

            <ButtonComponent style={{ backgroundColor: `${theme.colors.primary}`, width: 240 }} color={`${theme.colors.text}`} mode="outlined" text="Send" />
          </View>

        </Card>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    marginLeft: 20,
    marginTop: 20,
    elevation: 10,
    width: '90%'
  },
  sectionStyles: {
    flex: 1,
    width: 100
  },
  inputStyles: {
    marginLeft: 20

  },
  viewStyle: {
    borderBottomColor: `${theme.colors.ligthgray}`,
    borderBottomWidth: 5
  }
})