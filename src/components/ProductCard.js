import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductCard = ({ product }) => {
  return (
    <View key={product.id} style={styles.productCard}>
      <Image source={require('../../assets/cancel.png')} style={styles.icon} />
      <View style={styles.productInfo}>
        <Text style={styles.productId}>{product.id}</Text>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productQuantity}>MİKTAR: {product.quantity} (1:1)</Text>
      </View>
      <Image source={require('../../assets/refresh.png')} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'space-between', // İkonlar ve metin arasındaki boşluğu arttırır
  },
  productInfo: {
    flex: 1,
    marginHorizontal: 10, // Ürün bilgileri ile ikonlar arasına boşluk ekler
  },
  productId: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 14, // Daha küçük bir yazı boyutu
  },
  productName: {
    fontWeight: 'bold',
    color: '#a00',
    marginVertical: 5,
    fontSize: 14, // Başlık için uygun bir yazı boyutu
  },
  productQuantity: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 12, // Küçük bir yazı boyutu
  },
  icon: {
    width: 42, // İkonun genişliği
    height: 42, // İkonun yüksekliği
    resizeMode: 'contain', // İkonun orantılı şekilde yerleşmesi için
  },
});

export default ProductCard;
