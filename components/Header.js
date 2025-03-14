import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }) => (
    <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        padding: 16,
        backgroundColor: '#007BFF',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        color: '#FFF',
    },
});

export default Header;
