import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ActivityIndicator, FlatList, Image, StyleSheet } from 'react-native';

const Clima = () => {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('https://api.weatherapi.com/v1/forecast.json?key=c900df216db648a889f175817230910%20&q=huejutla&days=10&aqi=no&alerts=no&lang=es')
            .then(res => res.json())
            .then(obj => {
                setData(obj);
                setLoad(true);
            })
            .catch(err => Alert.alert('Error inesperado : ' + err));
    }, []);

    const renderHourlyItem = ({ item }) => (
        <View style={styles.hourlyContainer}>
            <Text style={styles.hour}>{item.time.split(' ')[1]}</Text>
            <Image style={styles.hourIcon} source={{ uri: 'https:' + item.condition.icon }} />
            <Text style={styles.hourTemperature}>{item.temp_c}°C</Text>
        </View>
    );

    const renderCardItem = ({ item }) => (
        <View style={styles.cardContainer}>
            <Text>{item.date} </Text>
            <Image style={styles.weatherIcon} source={{ uri: 'https:' + item.day.condition.icon }} />
            <Text style={styles.temperature}>Máx: {item.day.maxtemp_c}°C</Text>
            <Text style={styles.temperature}>Min: {item.day.mintemp_c}°C</Text>
        </View>
    );

    const renderInfo = () => {
        if (!data) return null;

        return (
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{data.location.name}</Text>
                <Text style={styles.currentTemperature}>{data.current.temp_c}°</Text>
                <Text style={styles.condition}>{data.current.condition.text}</Text>
                <FlatList
                    data={data.forecast.forecastday[0].hour}
                    renderItem={renderHourlyItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    contentContainerStyle={styles.hourlyList}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {load ? (
                <FlatList
                    ListHeaderComponent={renderInfo}
                    data={data ? data.forecast.forecastday : []}
                    renderItem={renderCardItem}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>UV: {data.current.uv}</Text>
                            <Text style={styles.infoText}>Humedad: {data.current.humidity}%</Text>
                            <Text style={styles.infoText}>Viento: {data.current.wind_kph} km/h</Text>
                            <Text style={styles.infoText}>Presión de aire: {data.current.pressure_mb} hPa</Text>
                            <Text style={styles.infoText}>Visibilidad: {data.current.vis_km} km</Text>
                        </View>
                    }
                    contentContainerStyle={styles.contentContainer}
                />
            ) : (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size={'large'} color={'darkblue'} />
                    <Text>Cargando datos...</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'lightblue',
  },
  contentContainer: {
      paddingVertical: 20,
  },
  title: {
      fontSize: 40,
      marginBottom: 10,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',
  },
  currentTemperature: {
      fontSize: 80,
      marginBottom: 10,
      color: 'white',
      textAlign: 'center',
  },
  condition: {
      fontSize: 16,
      textAlign: 'center',
      color: 'white',
  },
  cardContainer: {
      backgroundColor: 'white', // Cambiamos el color de fondo de las tarjetas
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      borderRadius: 10,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  },
  weatherIcon: {
      height: 50,
      width: 50,
  },
  temperature: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
  },
  loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  infoContainer: {
      paddingHorizontal: 20,
      marginBottom: 20,
  },
  infoText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
  },
  hourlyContainer: {
      alignItems: 'center',
      marginHorizontal: 10,
  },
  hourlyList: {
      marginTop: 20,
  },
  hour: {
      fontSize: 14,
      color: '#333',
  },
  hourIcon: {
      height: 30,
      width: 30,
  },
  hourTemperature: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
  },
});


export default Clima;
