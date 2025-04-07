import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Ara"
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10, // Kenarlarda boşluk olmasın
  },
  searchBar: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 0,
    backgroundColor: 'transparent', // Buton gibi görünmesin
  },
});

export default SearchBar;
