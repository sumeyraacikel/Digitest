import { faCalculator, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Sayım Fişi</Text>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faCalculator} size={20} color="#fff" style={styles.icon} />
        <FontAwesomeIcon icon={faHome} size={20} color="#fff" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#a00',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 12, 
  },
  icon: {
    marginLeft: 12,
  },
});

export default Header;
