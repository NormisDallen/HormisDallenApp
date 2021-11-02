import React from 'react'
import { View, Text, ScrollView ,StatusBar, StyleSheet, KeyboardAvoidingView} from 'react-native'
import AppBar from '../../components/AppBar/AppBar'
import { Card, HelperText, Subheading, TextInput } from 'react-native-paper';
import { theme } from '../../theme';
import ButtonComponent from '../../components/Button/Button';

export default function Application() {
    return (
        <ScrollView style={{marginBottom:30}}> 
            <StatusBar  backgroundColor='green'/>
            
            <View>
                <Card style={styles.container}>
                    <Card.Actions style={styles.inputStyles}> 
                        <KeyboardAvoidingView>
                            <View>
                            <TextInput
            
    
              style={{
                backgroundColor: theme.colors.text,
                color: 'red',
                width: '96%',
                alignSelf: 'center',
                borderBottomWidth: 0,
                height: 55,
                marginBottom:20,
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
                marginBottom:20,
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
              placeholder='Select class'
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
                marginBottom:20,
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
              label="Password"
    
              style={{
                backgroundColor: theme.colors.text,
                color: 'red',
                width: '96%',
                alignSelf: 'center',
                borderBottomWidth: 0,
                height: 55,
                marginBottom:20,
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
                marginBottom:20,
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
                marginBottom:20,
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
                            <View>
                            <TextInput
          
    
              style={{
                backgroundColor: theme.colors.text,
                color: 'red',
                width: '96%',
                alignSelf: 'center',
                borderBottomWidth: 0,
                height: 55,
                marginBottom:20,
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
              placeholder="Select Status"
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
                marginBottom:20,
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
              placeholder="Gender"
              outlineColor={theme.colors.primary}
              underlineColor={theme.colors.disabled}
              selectionColor={theme.colors.primary}

            />
                            </View>
                        </KeyboardAvoidingView>
                    </Card.Actions>
                    <View style={{ display: 'flex', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>

<ButtonComponent style={{ backgroundColor: "green", width: 200 }} color={`${theme.colors.text}`} mode="outlined" text="Save" />
</View>


<View style={{ display: 'flex', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>

<ButtonComponent style={{ backgroundColor: "green", width: 200 }} color={`${theme.colors.text}`} mode="outlined" text="Send" />
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
        marginLeft:20,
        marginTop:20,
        elevation:10,
        width:'50vh'
    },
    sectionStyles: {
        flex: 1,
        width:100
    },
    inputStyles: {
       marginLeft:20
        
    },
    viewStyle: {
        borderBottomColor: `${theme.colors.ligthgray}`,
        borderBottomWidth: 5
    }
})