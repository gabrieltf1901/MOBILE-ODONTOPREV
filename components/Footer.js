import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                © 2025 Odontoprev. Todos os direitos reservados.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 16,
        backgroundColor: '#007BFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#FFF',
    },
});

export default Footer;
