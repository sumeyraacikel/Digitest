import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import NavBar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 'STK-007', name: 'BEYAZ KOT KUMAŞI', quantity: '10 METRE' },
  { id: 'STK-004', name: 'Ariston Çift Kapılı No Frost Buzdolabı', quantity: '5 ADET' },
  { id: 'TP-1082', name: '2 NO ŞEFFAF BADYA', quantity: '4 ADET' },
  { id: 'TP-1091', name: '1 NO RENKLİ BADYA', quantity: '5 ADET' },
];

const InventoryCountSheet = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Header />
      <NavBar />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ScrollView>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

export default InventoryCountSheet;
