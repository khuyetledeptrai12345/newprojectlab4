// ProductList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const ProductList = () => {
  const navigation = useNavigation();
  const products = [
    { id: '1', name: 'Salat Trên Đĩa', description: 'Chụp ảnh Mặt Phẳng Của Salad Rau Trên đĩa', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: '2', name: 'Dâu Tây Thái Lát', description: 'Bánh Kếp Với Dâu Tây Thái Lát', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: '3', name: 'Burger Trên đĩa', description: 'Khoai Tây Chiên Và Burger Trên đĩa', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: '4', name: 'Món Ăn Tráng Miệng', description: 'Nhiều Loại Thực Phẩm Nướng Và Tráng Miệng Trên đĩa', image: 'https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: '5', name: 'Nho Xanh & Bánh Mì', description: 'Chụp ảnh ngoài trời', image: 'https://images.pexels.com/photos/1667427/pexels-photo-1667427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: '6', name: 'socola and dâu tây', description: 'Hình ảnh không đăng ký bản quyền', image: 'https://images.pexels.com/photos/8605817/pexels-photo-8605817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  ];

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Icon name="info-circle" size={20} color="#34495e" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Danh mục</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    padding: 20,
  },
  header: {
    fontSize: 26,
    top: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#34495e',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default ProductList;
