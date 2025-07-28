import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const SplashScreen = () => {
  const footballAnim = useRef(new Animated.Value(-100)).current;
  const cricketAnim = useRef(new Animated.Value(width + 100)).current;
  const footballOpacity = useRef(new Animated.Value(0)).current;
  const cricketOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(800), // Wait a bit before animation starts
      Animated.parallel([
        Animated.timing(footballAnim, {
          toValue: width / 2 - 80, // Position for first O
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(footballOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        }),
      ]),
      Animated.parallel([
        Animated.timing(cricketAnim, {
          toValue: width / 2 + 20, // Position for second O
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(cricketOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <LinearGradient colors={['#121212', '#1C1C1C']} style={styles.container}>
      <View style={styles.textRow}>
        <Text style={styles.text}>FULLT</Text>
        <View style={styles.placeholder} />
        <View style={styles.placeholder} />
        <Text style={styles.text}>S</Text>
      </View>

      <Animated.Image
        source={require('../assets/splash/football.png')}
        style={[
          styles.ball,
          {
            left: footballAnim,
            opacity: footballOpacity,
          },
        ]}
      />

      <Animated.Image
        source={require('../assets/splash/cricket.png')}
        style={[
          styles.ball,
          {
            left: cricketAnim,
            opacity: cricketOpacity,
          },
        ]}
      />
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: '45%',
  },
  text: {
    fontSize: 44,
    color: '#F5A623',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  placeholder: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  ball: {
    position: 'absolute',
    top: '45%',
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
