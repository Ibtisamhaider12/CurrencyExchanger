/* eslint-disable prettier/prettier */
import React from 'react'
import type { PropsWithChildren } from 'react'

import { View, Text, StyleSheet } from 'react-native'
type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;

}>

    const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
        return(
            <View style={styles.buttonContainer}>
                <Text style={styles.flag}>{props.flag}</Text>
                <Text style={styles.country}>{props.name}</Text>
            </View>
        )
    }

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
    },

    flag: {
        fontSize: 30,
        color: '#FFFFFF',
        marginBottom: 6,
    },
    country: {
        fontSize: 15,
        color: '#2d3436',
        marginBottom: 6,
    }
})

export default CurrencyButton
