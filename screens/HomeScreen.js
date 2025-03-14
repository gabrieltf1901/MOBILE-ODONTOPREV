import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Odontoprev</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Consultas')}
            >
                <Text style={styles.buttonText}>Consultas</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Faturamento')}
            >
                <Text style={styles.buttonText}>Faturamento</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Pacientes')}
            >
                <Text style={styles.buttonText}>Pacientes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Profissionais')}
            >
                <Text style={styles.buttonText}>Profissionais</Text>
            </TouchableOpacity>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    title: {
        fontSize: 24,
        marginBottom: 32
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 16,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
});

export default HomeScreen;
