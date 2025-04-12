import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import NavBar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

const InventoryCountSheet = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.1.101:5000/api/StockFiches')
      .then(response => response.json())
      .then(data => {
        const flatProducts = data.flatMap(fiche =>
          fiche.detaylar.map(detay => ({
            id: fiche.fisNo,
            name: detay.parcaAdi,
            quantity: `${detay.miktar} ADET`
          }))
        );
        setProducts(flatProducts);
      })
      .catch(error => {
        console.error('API error:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Header />
      <NavBar />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

export default InventoryCountSheet;
