import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { getProfissionais } from '../api/javaApi';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ProfissionaisScreen = () => {
    const [profissionais, setProfissionais] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfissionais = async () => {
            try {
                const data = await getProfissionais();
                setProfissionais(data);
            } catch (error) {
                console.error("Erro ao buscar profissionais:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfissionais();
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
            <Header title="Profissionais" />
            <FlatList
                data={profissionais}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>Nome: {item.nomeCompleto}</Text>
                        <Text style={styles.text}>CRM: {item.crm}</Text>
                        <Text style={styles.text}>
                            Especialidade: {item.especialidadeOdontologica}
                        </Text>
                        <Text style={styles.text}>Contato: {item.contato}</Text>
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

export default ProfissionaisScreen;
