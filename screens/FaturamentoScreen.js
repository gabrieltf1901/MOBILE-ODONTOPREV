import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { getFaturamento } from '../api/dotnetApi';
import Footer from '../components/Footer';
import Header from '../components/Header';

const FaturamentoScreen = () => {
    const [faturamento, setFaturamento] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFaturamento = async () => {
            try {
                const data = await getFaturamento();
                setFaturamento(data);
            } catch (error) {
                console.error("Erro ao buscar faturamento:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFaturamento();
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
            <Header title="Faturamento" />
            <FlatList
                data={faturamento}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>Valor: {item.valorTotal}</Text>
                        <Text style={styles.text}>
                            Data: {new Date(item.dataEmissao).toLocaleDateString()}
                        </Text>
                        <Text style={styles.text}>Status: {item.status}</Text>
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

export default FaturamentoScreen;
