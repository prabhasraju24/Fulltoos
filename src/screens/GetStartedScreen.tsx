import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const GetStartedScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Let's brainstorm<Text style={styles.dot}>●</Text></Text>
      </View>
      <View style={styles.bottomSheet}>
        <TouchableOpacity style={[styles.button, styles.appleButton]}>
          <Ionicons name="logo-apple" size={20} color="#000" style={styles.icon} />
          <Text style={[styles.buttonText, styles.appleText]}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.darkButton]}>
          <AntDesign name="google" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.darkButton]}>
          <AntDesign name="mail" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.outlineButton]}>
          <Text style={styles.outlineText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  dot: {
    color: '#000',
  },
  bottomSheet: {
    backgroundColor: '#000',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 12,
  },
  icon: {
    marginRight: 8,
  },
  appleButton: {
    backgroundColor: '#fff',
  },
  appleText: {
    color: '#000',
  },
  darkButton: {
    backgroundColor: '#1a1a1a',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
  },
  outlineText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GetStartedScreen;

