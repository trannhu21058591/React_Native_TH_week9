import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, FlatList} from 'react-native'; 
import IconA from 'react-native-vector-icons/AntDesign'

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
const DATA = [
  {
    id: '1',
    name: 'xe 1',
    img: require('../assets/xe_xanh_min.png'),
    gia: 20000,
  },
  {
    id: '1',
    name: 'xe 1',
    img: require('../assets/xe_xanh_min.png'),
    gia: 20000,
  },
  {
    id: '1',
    name: 'xe 1',
    img: require('../assets/xe_xanh_min.png'),
    gia: 20000,
  },

  {
    id: '1',
    name: 'xe 1',
    img: require('../assets/xe_xanh_min.png'),
    gia: 20000,
  },
  {
    id: '1',
    name: 'xe 1',
    img: require('../assets/xe_xanh_min.png'),
    gia: 20000,
  },
  {
    id: '1',
    name: 'xe 1',
    img: require('../assets/xe_xanh_min.png'),
    gia: 20000,
  },
];
const Item = ({item, onPress}) => (
   <TouchableOpacity style={styles.view_product} onPress={onPress}>
     <Image style={styles.view_img} source={item.img}/>
     <Text>{item.name}</Text>
     <Text style={{color:'red'}}>{item.gia}</Text>
    </TouchableOpacity>
);  

export default function Screen02({navigation}) {
 const renderItem = ({ item }) => {
    return (
      <Item 
        item={item} 
        onPress={() => navigation.navigate('Screen03', { itemData: item })} 
        // Điều hướng với dữ liệu item
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.title}>
      <Text>The world’s Best Bike</Text>
     </View>
     <View style={styles.chonLoai}>
      <TouchableOpacity style={styles.bt}>
       <Text>All</Text>
      </TouchableOpacity>
     </View>
     <View style={styles.list_product}>
      <FlatList
       data={DATA}
       renderItem={renderItem}
       keyExtractor={item => item.id}
       numColumns={2}
       showsVerticalScrollIndicator={false}
      />
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    padding: 8,
  },
  view_img:{
    height: 120,
    width: 110,
    marginVertical: 10,
  },
  view_product:{
    height: 200,
    width: 140,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  list_product:{
    flex: 1,
    alignItems: 'center',
  },
  txt_notChoose:{
    color: 'gray',
  },
  bt_1:{
    borderWidth: 1,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 30,
    borderColor: 'gray',
  },
  bt:{
    borderWidth: 1,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 30,
  },
  chonLoai:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  title:{
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});