import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

const App = () => {
  return (
    <View style={styles.contenedor}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.pantalla}>
        <View style={styles.superior}>
          <Text style={styles.titulo}> X </Text>
          <Text style={styles.subtitulo}>Para ti &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Siguiendo </Text>
        </View>
        <View style={styles.contenido}>
          <View style={styles.tweet}>
            <Text>&nbsp;</Text>
            <Image source={require('./img/FT nano.jpg')} style={styles.avatar} />
            <View style={styles.contenidoTweet}>
              <View style={styles.informacionUsuario}>
                <Text style={styles.nombreUsuario}>Neftali_623</Text>
                <Text style={styles.alias}>@elnefta_623</Text>
              </View>
              <Text style={styles.textoTweet}>
                🇲🇽 ¡Viva México! 🌮✨ Disfrutando de la rica comida, la cultura vibrante y la calidez de su gente. #Mexico #TravelAdventures 🌎❤️
              </Text>
              <View style={styles.accionesTweet}>
                <Text>💬 200</Text>
                <Text>🔁 500</Text>
                <Text>❤️ 100</Text>
                <Image source={require('./img/barras.png')} style={styles.icono} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.iconos}>
          <Image source={require('./img/inic.png')} style={styles.icono} />
          <Image source={require('./img/busc.png')} style={styles.icono} />
          <Image source={require('./img/not.png')} style={styles.icono} />
          <Image source={require('./img/icono.png')} style={styles.icono} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#000',
  },
  pantalla: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  superior: {
    alignItems: 'center',
  },
  titulo: {
    color: 'whitesmoke',
    fontSize: 24,
  },
  subtitulo: {
    color: 'whitesmoke',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  contenido: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tweet: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  contenidoTweet: {
    flex: 1,
  },
  informacionUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nombreUsuario: {
    color: 'whitesmoke',
    margin: 0,
    fontSize: 16,
  },
  alias: {
    color: '#888',
    marginLeft: 5,
    fontSize: 12,
  },
  textoTweet: {
    color: 'whitesmoke',
    fontSize: 16,
  },
  accionesTweet: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    color: '#888',
    fontSize: 14,
  },
  iconos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  icono: {
    width: 30,
    height: 30,
  },
});

export default App;
