
import React, { useState } from 'react';
import { StyleSheet, View, TextInput,Alert } from 'react-native'
import PriamaryButton from '../components/PriamaryButton';

const StartGame = () => {

    const [enteredNumber,setEnteredNumber] = useState('');
    const numberInputHandler = (inputText)=>{
            setEnteredNumber(inputText);

    }

    const resetInput = () =>{
        setEnteredNumber('');
    }

    const confirmHandler = () =>{
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Invalid Number',
            'Number has to be a number between 1 and 99',
            [{text:'Okay',style:'destructive',onPress:resetInput}]
            );

            return;
        }
        console.log("valid number");

    }

    return (

        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}

            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PriamaryButton onPress={resetInput} name="Reset" />

                </View>
                <View style={styles.buttonContainer}>
                    <PriamaryButton onPress={confirmHandler} name="Confirm" />
                </View>
            </View>

        </View>
    )
}


export default StartGame;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 100,
        backgroundColor: "#72063c",
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 1

    },

    numberInput: {
        height: 50,
        width: 60,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 1,
        color: "yellow",
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 10,

    },
    buttonContainer:{
        flex:1
    }

});
