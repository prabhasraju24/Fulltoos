import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

const { width } = Dimensions.get('window');

const SplashScreen: React.FC = () => {
  const textOpacity = useRef(new Animated.Value(0)).current;
  const cricketOpacity = useRef(new Animated.Value(0)).current;
  const footballOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loadFontAndAnimate = async (): Promise<void> => {
      await Font.loadAsync({
        BebasNeue: require('../../assets/fonts/BebasNeue-Regular.ttf'),
      });

      Animated.sequence([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(cricketOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(footballOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    };

    loadFontAndAnimate();
  }, []);

  return (
    <LinearGradient
      colors={['#0f0f0f', '#121212']}
      style={styles.container}
    >
      <Animated.View style={[styles.logoContainer, { opacity: textOpacity }]}>
        <Text style={styles.title}>FULLT</Text>
        <Animated.Image
          source={require('../../assets/splash/cricket.png')}
          style={[styles.cricketIcon, { opacity: cricketOpacity }]}
        />
        <Animated.Image
          source={require('../../assets/splash/football.png')}
          style={[styles.footballIcon, { opacity: footballOpacity }]}
        />
        <Text style={styles.titleS}>S</Text>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 52,
    color: '#FFA726',
    fontFamily: 'BebasNeue',
    lineHeight: 52,
  },
  titleS: {
    fontSize: 52,
    color: '#FFA726',
    fontFamily: 'BebasNeue',
    lineHeight: 52,
    position: 'absolute',
    right: -30,
  },
  cricketIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
    right: -90,
    top: 1,
  },
  footballIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
    right: -135,
    top: 1,
  },
});

export default SplashScreen;
