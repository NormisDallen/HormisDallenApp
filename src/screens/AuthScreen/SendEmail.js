import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { constantstyles } from '../../Constants/constanstStyles'
import { theme } from '../../theme';
import { HelperText, Subheading, TextInput } from 'react-native-paper';
import ButtonComponent from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../components/Indicator/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { emailError, EmptyError } from '../../helpers';
import { sendEmail } from '../../redux/slices/authSlice/actions';
import { clearEmailDetails } from '../../redux/slices/authSlice/authSlice';


const SendForgotPasswordEmail = ({navigation}) => {
    //navigation
    //const navigation = useNavigation()
    const { user } = useSelector(({ authSlice }) => authSlice)
    const [email ,setEmail] = useState('');
    const [handleEmailError, setHandleEmailError] = useState(false)

    //dispatch
    const dispatch = useDispatch()
    //dispatch

    const [loading, setLoading] = useState(false)

    useEffect(() => {
          if(user?.emailSuccess ){
            setLoading(false)
            setEmail('')
            navigation.navigate("Auth", { screen: "ForgotPasswordOtp" })
          }
          if(user?.emailFailure){
              setLoading(false)
          }

    }, [user])

    //handleotp
    const onSendEmail = () => {
         if(!email){
             setHandleEmailError(true)
         }
         else{
             setLoading(true)
             //dispatch 
             dispatch(sendEmail(email))
         }
    }
    //handleopt
    //resend otp
     
    //resend otp

    const moveToLogin = () => {
        navigation.navigate("Auth", { screen: "Login" })
    }
    return (
        <KeyboardAvoidingView
            style={[constantstyles.container]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Subheading
                theme={{ colors: { text: 'gray' } }}
                style={[
                    {
                        textAlign: 'center',
                        fontSize: 20,
                        paddingBottom: 10,
                        color: "green",
                        marginVertical: 10,
                        marginRight: 10

                    },
                    constantstyles.resideViews

                ]}
            >
                Please enter your email address
            </Subheading>

            {/*otp */}


            {loading &&
                <View
                >
                    <Loading />
                </View>

            }
            { /*loading */}

            {/*error message */}
            <View style={[{ marginHorizontal: 10, marginTop: 2, justifyContent: "center", marginBottom: 10, marginTop: 10 }]}>
                {
                    user?.emailFailure !== null &&
                    <View style={[constantstyles.flexStyles, { justifyContent: "center" }]}>
                        <HelperText type="error" visible={true}>
                            {`Invalid Email Address`}
                        </HelperText>
                    </View>

                }


            </View>
            {/*error message */}
            <View style={styles.spaceTop}>
                <TextInput
                    label="EMAIL"
                    onChangeText={(text) => 
                        {
                            if(user?.emailSuccess == null || user?.emailFailure == null){
                                dispatch(clearEmailDetails())
                            }
                            setEmail(text)
                        }

                    }

                    value={email}
                    style={{
                        backgroundColor: theme.colors.text,
                        color: 'red',
                        width: '96%',
                        alignSelf: 'center',
                        borderWidth: 0,
                        height: 55
                    }}
                    theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 1 }}
                    mode={'flat'}
                    autoCorrect={false}
                    error={handleEmailError &&EmptyError(email, `email`) || emailError(email)}
                    placeholder="enter email"
                    outlineColor={theme.colors.primary}
                    underlineColor={theme.colors.disabled}
                    selectionColor={theme.colors.primary}

                    onSubmitEditing={onSendEmail}
                    textContentType="emailAddress"

                />
                <HelperText type="error" visible={true}>
                    {
                        handleEmailError&&  EmptyError(email, `email`)
                        || emailError(email)
                    }
                </HelperText>
            </View>
            {/*otp */}
            {/*resend otp */}
            {/* <View style={{ marginVertical: 5 }}>
                        <TouchableOpacity onPress={resend} activeOpacity={0.4}>
                            <Text
                                style={{ color: 'black', textAlign: 'center', paddingTop: 5 }}
                            >
                                Did not receive {' '}
                                <Text
                                    style={{ fontWeight: 'bold', fontSize: 17, color: "black" }}
                                >
                                    Resend?
                                </Text>
                            </Text>
                        </TouchableOpacity>

                    </View> */}
            {/*resend otp */}

            {/*button */}
            <View style={styles.spaceTop}>
                <ButtonComponent mode="outlined" text="send" color={`${theme.colors.primary}`}
                    style={{
                        marginTop: 5,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: theme.colors.disabled,

                    }}
                    contentStyle={{
                        fontSize: 8, height: 28
                    }}
                    onPress={onSendEmail}
                />
            </View>
            {/*button */}

            <TouchableOpacity onPress={moveToLogin} activeOpacity={0.4}>
                            <Text
                                style={{ color: 'black', textAlign: 'center', paddingTop: 40 }}
                            >
                                Back To?{' '}
                                <Text
                                    style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}
                                >
                                    Login
                                </Text>
                            </Text>
                        </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default SendForgotPasswordEmail

const styles = StyleSheet.create({
    spaceTop: {
        marginHorizontal: 20
    }
})
