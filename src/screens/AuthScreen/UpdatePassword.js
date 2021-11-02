import React, { useState, useRef, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  StyleSheet, Pressable
} from 'react-native';
import { HelperText, Subheading, TextInput } from 'react-native-paper';
import { confirmPasswordError, emailError, EmptyError, passwordError, numberError, EmptyFieldError } from '../../helpers';
import { theme } from '../../theme';
import ButtonComponent from '../../components/Button/Button';
import Loading from '../../components/Indicator/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, updatePassword } from '../../redux/slices/authSlice/actions';
import { constantstyles } from '../../Constants/constanstStyles'



const ResetPasword = ({ navigation }) => {

  const { user } = useSelector(({ authSlice }) => authSlice)
  console.log(JSON.stringify(user?.forgotPassswordOtpSuccess?.data))

  //useEffect
  useEffect(() => {
    if (user.updatePasswordSuccess !== null) {
      setLoading(false)
      setTimeout(() => {console.log('jj')}
      )

    }
    if (user.updatePasswordFailure !== null) {
      setLoading(false)
    }

{/**  navigation.navigate("Auth", { screen: "Login" })
      }, 3000 */}
  }, [user.updatePasswordSuccess, user.updatePasswordFailure])
  //useEffect



  //dispatch
  const dispatch = useDispatch()
  //dispatch



  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")



  //select date

  //select date

  const [loading, setLoading] = useState(false);


  //phone area
  const moveToLogin = () => {
    navigation.navigate("Auth", { screen: "Login" })
  }

  //password icons
  const [passwordType, setPasswordType] = useState(true)
  const [confirmPasswordType, setConfirmPasswordType] = useState(true)





  //handleRegister
  const onRegister = () => {

    const obj = {

      email: user?.forgotPassswordOtpSuccess?.data?.email,
      userInfo: {
        password,
        c_password: confirmPassword
      }

    }
    setLoading(true)

    dispatch(updatePassword(obj))

  }

  //disable
  const disableButton = () => {
    if (EmptyFieldError(password)
      || EmptyFieldError(confirmPassword)
    ) {
      return true
    }
    else {
      return false;
    }

  }
  //disbale


  return (
    <>
    <SafeAreaView>
    <View style={{margin:40}}>
      <Text style={{color:'#006a4e',textAlign:'center', fontWeight:'bold', fontSize:20}}>Update Passward</Text>
    </View>
    </SafeAreaView>
    
      <KeyboardAvoidingView
        style={{ flex: 1,marginBottom:20,  width:"40%",marginLeft:65,alignItems:'center' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          style={{
            borderTopRightRadius: theme.roundness,
            borderTopLeftRadius: theme.roundness,
            paddingTop: '10%',
          }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={{ paddingBottom: 50 }}
        >

          {/*loading*/}

          {loading &&
            <View
            >
              <Loading />
            </View>

          }
          { /*loading */}

          {/*sucess message */}
          {
            user.updatePasswordSuccess !== null &&
            <View style={[constantstyles.resideViews,
            {
              backgroundColor: "green", borderRadius: 10, padding: 5,
              marginHorizontal:10, width:150,marginBottom:20,marginLeft:30
            }
            ]}>
              <Text style={{ color: theme.colors.text }}>
                {`Password updated successfully `}</Text>
            </View>
          }

          {/*success message */}







          {/*password */}
          <View style={[styles.spaceTop]}>
            <TextInput
              label="Passward"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={passwordType}
              value={password}
              style={{
                backgroundColor: theme.colors.text,
                color: 'red',
                width: '96%',
                alignSelf: 'center',
                borderBottomWidth: 0,
                height: 55,
                borderColor: theme.colors.disabled,
                marginBottom:20
              }}
              right={

                <TextInput.Icon
                  name={passwordType ? "eye-off-outline" : "eye"}
                  style={{ marginRight: 15, padding: 5 }}
                  color={theme.colors.placeholder}
                  size={27}
                  onPress={() => setPasswordType(!passwordType)}
                />
              }

              theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
              mode={'flat'}
              autoCorrect={false}
              error={passwordError(password)}
              placeholder="enter password"
              outlineColor={theme.colors.primary}
              underlineColor={theme.colors.disabled}
              selectionColor={theme.colors.primary}

            />
            <HelperText type="error" visible={true}>
              {passwordError(password)}
            </HelperText>
          </View>
          {/*password */}
          {/*confirm password */}
          <View style={[styles.spaceTop]}>
            <TextInput
              label="Confirm passward"
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={confirmPasswordType}
              value={confirmPassword}
              style={{
                backgroundColor: theme.colors.text,
                color: 'red',
                width: '96%',
                alignSelf: 'center',
                borderBottomWidth: 0,
                height: 55,
                marginTop:10,
                borderColor: theme.colors.disabled
              }}
              right={
                <TextInput.Icon
                  name={confirmPasswordType ? "eye-off-outline" : "eye"}
                  style={{ marginRight: 15 }}
                  color={theme.colors.placeholder}
                  onPress={() => setConfirmPasswordType(!confirmPasswordType)}
                  size={27} />}

              theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
              mode={'flat'}
              autoCorrect={false}
              error={confirmPasswordError(password, confirmPassword)}
              placeholder="confirm password"
              outlineColor={theme.colors.primary}
              underlineColor={theme.colors.disabled}
              selectionColor={theme.colors.primary}
              onSubmitEditing={onRegister}
            />
            <HelperText type="error" visible={true}>
              {confirmPasswordError(password, confirmPassword)}
            </HelperText>
          </View>
          {/*confirm password */}

          <View
            style={{ padding: 5, alignSelf: 'center' }}
          >
            {/*button */}
<br/>
            <ButtonComponent mode="outlined" text="Reset" color={`${theme.colors.primary}`}
              style={{
                marginTop: 20,
                height:30,
                backgroundColor:'#006a4e',
                borderColor: theme.colors.disabled,
                marginHorizontal: 10,
                width:"30vh"

              }}
              contentStyle={{
                fontSize: 8, height: 25
              }}
              disabled={disableButton()}
              onPress={onRegister}
            />
            {/*button */}

            {/*error message */}
            <View style={[{ marginHorizontal: 10, marginTop: 2, justifyContent: "center", marginBottom: 10, marginTop: 10 }]}>
              {
                user?.updatePasswordFailure !== null &&

                <View style={[constantstyles.flexStyles, {
                  justifyContent: "center", backgroundColor: "red", borderRadius: 10, padding: 5,marginTop:20
                }]}>
                  <Text style={{ color: theme.colors.text }}>
                    {`Invalid information sent`}</Text>
                </View>




              }



            </View>
            {/*error message */}

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ResetPasword;

const styles = StyleSheet.create({
  spaceTop: {
    marginHorizontal: 30
  },
  top: {
    marginBottom: 10
  },
  inputBorder: {
    width: '30%',
    borderColor: '#cacaca',
    borderBottomWidth: 1,
    marginBottom: 20,
    height: 55
  }
})