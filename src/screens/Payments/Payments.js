import React from 'react';
import { View, Text,} from 'react-native'
import { PayWithFlutterwave } from 'flutterwave-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme';


export default function Payments() {

    const handleOnRedirect = () => {
        console.log("rave")
    }
    return (
        <>
            <SafeAreaView>

                <View>
                    <Text style={{ marginTop: 40, padding: 30, fontSize: 20,color:`${theme.colors.black}` }}>
                        Press on the button to make payments
                    </Text>
                    <View style={{ padding: 10, marginTop: 40 }}>
                        <SafeAreaView>
                            <PayWithFlutterwave

                                
                                onRedirect={handleOnRedirect}
                                options={{
                                    tx_ref: "1243",
                                    authorization: 'FLWPUBK-c6ef47c71d242efbad383e68b543668e-X',
                                    customer: {
                                        email: 'nabatanzigorret143@gmail.com'
                                    },
                                    amount: 1000,
                                    currency:'USD',
                                    payment_options: 'card'
                                }}
                            />
                        </SafeAreaView>




                    </View>
                    <View>


                    </View>
                </View>


            </SafeAreaView>

        </>
    )
}

{/**<PayWithFlutterwave

                                onRedirect={handleOnRedirect}
                                options={{
                                    tx_ref: "1243",
                                    authorization: 'FLWPUBK-c6ef47c71d242efbad383e68b543668e-X',
                                    customer: {
                                        email: 'nabatanzigorret143@gmail.com'
                                    },
                                    amount: 2000,
                                    currency: 'NGN',
                                    payment_options: 'card'
                                }}
                            /> 
                            try {
        // initialize payment
        
        const paymentLink =  FlutterwaveInit({
            tx_ref: generateTransactionRef(),
            authorization: 'FLWPUBK-c6ef47c71d242efbad383e68b543668e-X',
            amount: 100,
            currency: 'USD',
            customer: {
                email: 'nabatanzigorret143@gmail.com'
            },
            payment_options: 'card'
        });
        // use payment link
        usePaymentLink(paymentLink);
    } catch (error) {
        // handle payment error
        console.log(error.message);
    }
                        */}
