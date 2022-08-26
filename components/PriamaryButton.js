import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const PriamaryButton = ({ name,onPress }) => {

    const press = () => {

    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
             style={ ({pressed})=>pressed ? [styles.buttonInnerContainer,styles.pressed] : styles.buttonInnerContainer} 
             onPress={onPress} 
             android_ripple={{ color: "#590c2e" }} 
             >
                <Text style={styles.buttonText}>{name}</Text>
            </Pressable>
        </View>

    )
}

export default PriamaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"

    },
    buttonInnerContainer: {
        backgroundColor: "#8f0d45",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,

    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
      
    },
    pressed:{
        opacity:0.75,

    }
})
