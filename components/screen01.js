import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import IconA from 'react-native-vector-icons/AntDesign'

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack


export default function Screen01({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.v1}>
       <Image source={require('../assets/xe_xanh_big.png')}/>
      </View>
      <TouchableOpacity style={styles.bt} onPress={() => navigation.navigate('Screen02')}>
       <Text style={{color:'white', fontSize:20}}>Start</Text>
       <IconA name="right" size={20} color="white" />
      </TouchableOpacity>
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
  bt:{
    backgroundColor: '#E94141',
    height: 50,
    width: 150,
    borderRadius: 20,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  }

});