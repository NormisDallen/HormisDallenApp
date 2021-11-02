import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, ImageBackground, Button } from 'react-native'
import { constantstyles } from '../../Constants/constanstStyles'
import { theme } from '../../theme';
import { HelperText, Subheading, TextInput } from 'react-native-paper';
import ButtonComponent from '../../components/Button/Button';
import Loading from '../../components/Indicator/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { EmptyError } from '../../helpers';
import { forgotPasswordOtp } from '../../redux/slices/authSlice/actions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import img9 from '../../../assets/images/img9.jpg'
const ForgotOtpPassword = ({ navigation }) => {



    const { user } = useSelector(({ authSlice }) => authSlice)
    const [code, setCode] = useState("")
    const [handleCodeError, setHandleCodeError] = useState(false)

    //dispatch
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (user?.forgotPassswordOtpSuccess != null) {
            setLoading(false)
            setCode('')
            navigation.navigate("Auth", { screen: "NewPassword" })
        }
        if (user?.forgotPassswordOtpFailure != null) {
            setLoading(false)
            setCode('')

        }

    }, [user])

    //handleotp
    const handleOtp = () => {
        if (!code) {
            setHandleCodeError(true)
        }
        else {
            setLoading(true)
            const userInfo = {
                otp: code
            }
            dispatch(forgotPasswordOtp(userInfo))

            //make a request
            //make a request

        }


    }
    //handleopt
    //resend otp
    const resend = () => {
        navigation.navigate("Resend")
    }
    //resend otp
    return (
        <>
            <View>
                <ImageBackground source={img9} style={{ width: "100vh", height: 200 }} />
            </View>


            <KeyboardAvoidingView
                style={{ marginTop: 150 }}
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
                            marginRight: 10,
                            borderRadius: 10,


                        },
                        constantstyles.resideViews

                    ]}
                >
                    <View>
                        <View>

                        </View>

                        <Ionicons name='chatbox-ellipses-outline' size={30} color="green" />
                        <Text style={{ marginTop: 1, marginLeft: 20, textAlign: 'right' }}>
                            Please check your email for <br />
                            the otp sent and enter the code
                        </Text>

                    </View>

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
                        user?.forgotPassswordOtpFailure !== null &&
                        <View style={[constantstyles.flexStyles, { justifyContent: "center" }]}>
                            <HelperText type="error" visible={true}>
                                {`Invalid Code`}
                            </HelperText>
                        </View>

                    }


                </View>
                {/*error message */}
                <View style={styles.spaceTop}>
                    <TextInput
                        label="code"
                        onChangeText={(text) => setCode(text)}

                        value={code}
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
                        error={handleCodeError && EmptyError(code, `code`)}
                        placeholder="enter code sent"
                        outlineColor={theme.colors.primary}
                        underlineColor={theme.colors.disabled}
                        selectionColor={theme.colors.primary}

                        onSubmitEditing={handleOtp}
                        keyboardType="numeric"
                    />
                    <HelperText type="error" visible={true}>
                        {handleCodeError && EmptyError(code, `code`)}
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
                    <ButtonComponent mode="outlined" text="confirm email" color={`${theme.colors.primary}`}
                        style={{
                            marginTop: 10,
                            borderRadius: 10,
                            borderWidth: 1,
                            height: 60,
                            borderColor: theme.colors.primary,


                        }}
                        contentStyle={{
                            fontSize: 15, height: 28, marginBottom: 0
                        }}
                        onPress={handleOtp}
                    />

                </View>

                <View style={{ color: 'white', marginBottom: 10, padding: 10 }}>
                    <Button onPress={() => { navigation.navigate('Login') }} color={theme.colors.primary} title="Back" />
                </View>
                {/*button */}
            </KeyboardAvoidingView>
        </>
    )
}

export default ForgotOtpPassword

const styles = StyleSheet.create({
    spaceTop: {
        marginHorizontal: 20,
        marginBottom: 20

    }
})
