import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, FlatList, StyleSheet } from 'react-native';

const Productos2 = () => {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(obj => {
                setData(obj);
                setLoad(true);
            })
            .catch(err => Alert.alert('Error al consultar: ' + err));
    }, []);

    const UScreen = () => {
        return (
            <View style={styles.container}>
                <ActivityIndicator color={'#ff6347'} size={'large'} />
                <Text style={styles.text}>Cargando datos...</Text>
            </View>
        );
    };

    const LScreen = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Datos Cargados</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Card
                        title={item.title}
                        price={item.price}
                        image={item.image} />}
                    keyExtractor={item => item.id.toString()} />
            </View>
        );
    };

    const Card = ({ title, price, image }) => {
        return (
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: image }} />
                <Text style={styles.cardText}>Producto: {title}</Text>
                <Text style={styles.cardText}>Precio: {price} MXN</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Productos</Text>
            {load ? <LScreen /> : <UScreen />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#ff4500',
    },
    text: {
        fontSize: 18,
        marginTop: 20,
        color: '#ff6347',
    },
    card: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ff4500',
        width: '90%',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 18,
        marginTop: 5,
        color: '#696969',
    },
    image: {
        height: 85,
        width: 85,
        marginBottom: 10,
    },
});

export default Productos2;
