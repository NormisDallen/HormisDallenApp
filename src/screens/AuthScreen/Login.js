import React, { useState, useEffect } from 'react';
import {KeyboardAvoidingView,Platform,ScrollView,TouchableOpacity,View,Text,Image,StyleSheet,ImageBackground
} from 'react-native';
import { EmptyError, emailError, passwordError } from "../../helpers"
import { HelperText, Subheading, TextInput } from 'react-native-paper';
import { constantstyles } from '../../Constants/constanstStyles';
import { theme } from '../../theme'
import ButtonComponent from '../../components/Button/Button';
import Loading from '../../components/Indicator/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/authSlice/actions';
import { useNavigation } from '@react-navigation/native';
import { clearEmailDetails, clearForgotOtp, clearLoginErrror, clearRegisterError, clearUpdatePassword } from '../../redux/slices/authSlice/authSlice';
import im1 from '../../../assets/images/im1.jpg'

const Login = ({navigation}) => {
    //navigation
   
    const { user } = useSelector(({ authSlice }) => authSlice)

    //dispatch
    const dispatch = useDispatch()
    //dispatch

    //useEffect
    useEffect(() => {
        if(user?.isLoggedIn){
             navigation.navigate("Home")
        }
        if(user?.errorMessageLogin !== null){
            setLoading(false)
        }

    }, [user])
    //useEffect
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")


    const moveToRegister = () => {
        dispatch(clearRegisterError())
        navigation.navigate("Auth", { screen: "Register" })
    }

    const moveToSendEmail = ()=>{
        dispatch(clearEmailDetails())
        dispatch(clearForgotOtp())
        dispatch(clearUpdatePassword())
        navigation.navigate("Auth", { screen: "SendEmail" })
        //navigation.navigate("Auth", { screen: "ForgotPasswordOtp" })
        //navigation.navigate("Auth", { screen: "NewPassword" })

    }

    //password text type
    const [passwordType, setPasswordType] = useState(true)

    //handle username error
    const [handleEmailError, sethandleEmailError] = useState(false)
    const [handlePasswordError, setPasswordError] = useState(false)
    const [loading, setLoading] = useState(false)
    //loginUser
    const userLogin = () => {
        if (!email && !password) {
            sethandleEmailError(true)
            setPasswordError(true)
        }
        else if (!password) {
            setPasswordError(true)
        }
        else if (!email) {
            sethandleEmailError(true)

        }
        else {
            //loading
            setLoading(true)
            //loading
            //register user
            const userInfo = {
                email,
                password
            }
            dispatch(loginUser(userInfo))


            // setPassword('')
            // setUserName('')


            //register user
        }


    }

    return (
        <>


        <View>
        <ImageBackground source={im1} style={{width:700,height:700,flex:1}} resizeMode="cover" />
        </View>
            <KeyboardAvoidingView
                style={{ flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                    style={{
                    
                        borderTopRightRadius: theme.roundness,
                        borderTopLeftRadius: theme.roundness,
                        paddingTop: '5%',
                    }}
                    keyboardShouldPersistTaps={'always'}
                    contentContainerStyle={{ paddingBottom: 30 }}
                >

                    <Subheading
                        theme={{ colors: { text: 'gray' } }}
                        style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 30,
                            paddingBottom: 10,
                            color: theme.colors.primary
                        }}
                    >
                        Welcome Login 
                    </Subheading>
                    {/*loading*/}

                    {
                    loading &&
                        <View
                        >
                            <Loading />
                        </View>

                    }
                    { /*loading */}

                    {/*error message */}
                    <View style={[{ marginHorizontal: 10, marginTop: 2, justifyContent: "center", marginBottom: 10, marginTop: 10 }]}>
                        {
                            user?.errorMessageLogin !== null &&
                            <View style={[constantstyles.flexStyles, { justifyContent: "center" }]}>
                                <HelperText type="error" visible={true}>
                                    {`${user?.errorMessageLogin}`}
                                </HelperText>
                            </View>

                        }


                    </View>
                    {/*error message */}


                    <View style={{ marginTop: 10 }}>

                        <View>
                        </View>


                    </View>
<br/>
                    {/*email address */}
                    <View style={[styles.spaceTop]}>
                        <TextInput
                            label="email"
                            onChangeText={(text) => {
                                if(user?.errorMessageLogin !== null){
                                    dispatch(clearLoginErrror())
                                }
                                setEmail(text)}
                        }
                            value={email}
                            style={{
                                backgroundColor: theme.colors.text,
                                color: 'red',
                                width: '100%',
                                alignSelf: 'center',
                                borderWidth: 1,
                                height: 55,
                                marginTop:30,
                                marginBottom:30,
                                borderTopRightRadius:19,
                                borderBottomRightRadius:19,
                                borderColor:'green'
                            }}

                            right={<TextInput.Icon style={{marginLeft:20,marginRight:10}} name="email-outline" color={theme.colors.primary} size={27} />}
                            theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 1 }}
                            mode={'flat'}
                            autoCorrect={false}
                            error={handleEmailError && EmptyError(email, `email`) || emailError(email)}
                            placeholder="enter email"
                            outlineColor={theme.colors.primary}
                            underlineColor={theme.colors.disabled}
                            selectionColor={theme.colors.primary}
                            textContentType="emailAddress"
                        />
                        <HelperText type="error" visible={true} style={styles.bottom}>

                            {
                                handleEmailError && EmptyError(email, `email`)
                                || emailError(email)
                            }
                        </HelperText>
                    </View>
                    {/*email address*/}
                    {/*password*/}
                    <View style={[styles.spaceTop]}>
                        <TextInput
                            label="password"
                            onChangeText={(text) => {
                                if(user?.errorMessageLogin !== null){
                                    dispatch(clearLoginErrror())
                                }
                                setPassword(text)
                            }}
                            secureTextEntry={passwordType}
                            value={password}
                            style={{
                                backgroundColor: theme.colors.text,
                                color: 'red',
                                width: '100%',
                                alignSelf: 'center',
                                borderWidth: 1,
                                height: 55,
                                marginTop:20,
                                borderTopRightRadius:20,
                                borderBottomRightRadius:20,
                                borderColor:'green'
                            }}
                            right={
                                <TextInput.Icon
                                    name={passwordType ? "eye-off-outline" : "eye"}
                                    style={{ marginLeft: 20, marginRight:10}}
                                    color={theme.colors.primary}
                                    onPress={() => setPasswordType(!passwordType)}
                                    size={27} />}
                            theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 0 }}
                            mode={'flat'}
                            autoCorrect={false}
                            error={handlePasswordError && EmptyError(password, `password`)}
                            placeholder="enter password"
                            outlineColor={theme.colors.primary}
                            underlineColor={theme.colors.disabled}
                            selectionColor={theme.colors.primary}

                            onSubmitEditing={userLogin}

                        />
                        <HelperText type="error" visible={true}>
                            {handlePasswordError && EmptyError(password, `password`)}
                        </HelperText>

                    </View>


                    {/*password */}

                    {/*forgot password */}
                    <View style={{ marginVertical: 5 }}>
                        <TouchableOpacity  activeOpacity={0.4}    >
                            <Text
                           onPress={(navigation.navigate('ForgotPasswordOtp'))}
                                style={{ color: 'black', textAlign: 'center', paddingTop: 5,fontWeight:'bold' }}
                            >
                                Forgot {' '}
                                <Text
                                    style={{ fontWeight: 'bold', fontSize: 17, color: "black" }}
                                >
                                    Password?
                                </Text>
                            </Text>
                        </TouchableOpacity>

                    </View>
                    {/*forgot password */}

                    <View
                        style={{ padding: 10, top: 20, width: '100%', height:60, alignSelf: 'center', marginTop: -20 }}
                    >
                      <View style={{width: '100%', marginLeft:20, fontSize:30}}>

                      <ButtonComponent    onPress={()=>{navigation.navigate("Home")}} mode="outlined" text="Login" color={`${theme.colors.black}`}
                            style={{
                                marginTop: 5,
                                borderRadius: 30,
                                borderWidth: 0,
                                borderTopLeftRadius:20,
                                borderColor: theme.colors.primary,
                                
                                

                            }}
                            contentStyle={{
                                fontSize: 20, height: 30
                            }}
                            onPress={userLogin}
                        />
                      </View>

                        <br/>
                        <br/>
                        <TouchableOpacity   onPress={navigation.navigate('Create an Account')} style={{ borderRadius:20,borderBottomLeftRadius:90, borderTopRightRadius:90, height:160, backgroundColor:theme.colors.primary,marginTop:10}}  activeOpacity={0.4}>
                            <Text
                                style={{ color: 'white', fontSize: 15, marginRight:20, marginTop:30, textAlign: 'center', paddingTop: 20 }}
                            >
                                Have no account?{' '}
                                <Text
                                    style={{ fontWeight: 'bold', marginLeft:20, fontSize: 15, color: 'black' }}
                                >
                                    SignUp
                                </Text>
                              <br/>
                              <View style={{marginTop:10}}>
                              <Text>By signing up, you agree to our<br/>

                                <span style={{color:'black',marginTop:25,fontWeight:'bold'}}> terms and policies!</span>
                                 
                                </Text>
                              </View>
                                
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
};

export default Login;
const styles = StyleSheet.create({
    spaceTop: {
        marginHorizontal: 25
    }
})