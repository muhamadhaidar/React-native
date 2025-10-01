import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';

const App = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2023/08/07/13/44/tree-8175062_1280.jpg' }} // ganti sesuai kebutuhan
      style={styles.background}
    >
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Your Next Adventure Starts Here
          </Text>
          <Text style={styles.subtitle}>
            Life’s too short to stay in one place. Find your next favorite city, beach, or mountain and let’s get moving!
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Exploring</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  content: {
    width: '90%',         
    alignItems: 'flex-start',
  },
  title: {
    color: '#fff',
    fontSize: 35,         
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    color: '#ddd',        
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 28,
    width: '95%',         
  },
  button: {
    backgroundColor: '#00c2a9',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 30,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default App;
