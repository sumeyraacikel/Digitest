import { faBars, faCircleCheck, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navButton}>
      <FontAwesomeIcon icon={faSearch} size={20} color="#fff" />
      <Text style={styles.navButtonText}>Ürün Ara</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
      <FontAwesomeIcon icon={faBars} size={20} color="#fff" />
        <Text style={styles.navButtonText}>Liste</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.navButton, styles.activeTab]}>
      <FontAwesomeIcon icon={faCircleCheck} size={20} color="#fff" />
        <Text style={styles.navButtonText}>Toplam</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#a00',
  },
  navButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#880000',
  },
  navButtonText: {
    fontWeight: "bold", 
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
});

export default NavBar;
