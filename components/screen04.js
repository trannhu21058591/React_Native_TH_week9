import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity,FlatList } from 'react-native';
import IconA from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
const DATA =[
  {
    id: "1", 
    name: 'xe 1',
    img: require('../assets/xe_bittwo_do.png'),
    gia: 1000,
  }
]

const Item = ({item}) => (
  <View style={styles.one_item}> 
   
   <View>
    <Image source={item.img} />
    <Text>{item.name}</Text>
    <Text>{item.gia}</Text>
   </View>
   <View>
    <Ionicons name="trash-bin-sharp" size={20} color="red" />
   </View>
   
  </View>
);

export default function Screen04() {
  const renderItem = ({ item }) => {
    return (
      <Item 
        item={item} 
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
     <View>
      <Text>Giỏ hàng</Text>
     </View>
     <View style={styles.list_gioHang}>
      <FlatList
       data={DATA}
       renderItem={renderItem}
       keyExtractor={item => item.id}
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
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  one_item: {
    marginHorizontal: 10,
    borderWidth: 1,
    width: 300,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  list_gioHang:{
    flex: 1,
    alignItems: 'center',
  }
  
});