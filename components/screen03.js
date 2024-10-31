import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import IconA from 'react-native-vector-icons/AntDesign'

export default function Screen03({ route }) {
  const { itemData } = route.params; // Lấy dữ liệu từ params

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.v1}>
        <Image style={styles.img} source={itemData.img} />
      </View>
      <View style={styles.info}>
        <Text style={styles.ten}>{itemData.name}</Text>
        <Text style={styles.gia}>{itemData.gia}</Text>
        <Text style={styles.mota}>Đây là {itemData.name}...</Text>
      </View>
      <TouchableOpacity style={styles.bt}>
        <Text style={{ color: 'white' }}>Add to cart</Text>
        <IconA name="right" size={20} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 8,
    alignItems: 'center',
  },
  bt:{
    backgroundColor: '#E94141',
    height: 50,
    width: 150,
    borderRadius: 20,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height: 250,
    width: 250,
  },
  v1:{
    backgroundColor: '#E941411A',
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },


});