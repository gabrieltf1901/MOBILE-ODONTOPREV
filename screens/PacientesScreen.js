import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { getPacientes } from '../api/javaApi';
import Footer from '../components/Footer';
import Header from '../components/Header';

const PacientesScreen = () => {
    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPacientes = async () => {
            try {
                const data = await getPacientes();
                setPacientes(data);
            } catch (error) {
                console.error("Erro ao buscar pacientes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPacientes();
    }, []);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Header title="Pacientes" />
            <FlatList
                data={pacientes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>Nome: {item.nomeCompleto}</Text>
                        <Text style={styles.text}>Contato: {item.contato}</Text>
                        <Text style={styles.text}>Plano: {item.planoDeSaude}</Text>
                    </View>
                )}
            />
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        marginBottom: 16,
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 8
    },
    text: {
        fontSize: 16
    },
});

export default PacientesScreen;
