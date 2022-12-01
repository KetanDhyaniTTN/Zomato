import React, { Component } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from "react-native";
import { DATA } from '../Data'
import { Variety } from '../Data'
class SecondScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={styles.spotlight}>In the spotlight</Text>
        <FlatList
          data={DATA}
          horizontal

          renderItem={({ item }) => {
            return (
              <View style={styles.flatview}>
                <Image style={styles.flatimage}
                  source={{ uri: item.imageurl }} />
                <Text style={styles.off}>Flat Rs100 Off</Text>
                <Text style={styles.california}>California Burrito</Text>

                <TouchableOpacity style={styles.heart}>
                  <Image style={styles.share}
                    source={require('../../Images/icons8-heart-upside-down-24.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.rating}>
                  <Text style={styles.points}>4.1</Text>
                  <Image style={styles.ratingStar}
                    source={require('../../Images/icons8-christmas-star-50.png')} />
                </TouchableOpacity>

              </View>
            )
          }} />
        <Text style={styles.varities}>Eat what makes you happy</Text>

        <FlatList
          style={styles.bottomFlat}
          data={Variety}
          numColumns={4}
          renderItem={({ item }) => {
            return (
              <View style={styles.menu}>
                <Image style={styles.menuimage}
                  source={{ uri: item.imageurl }} />
                <Text style={styles.menuTitle}>{item.title}</Text>
              </View>
            )
          }} />
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  inputView: {
    marginTop: 20,
    marginLeft: 15,
    flexDirection: 'row',
    height: 50,
    width: 355,
    backgroundColor: ('rgb(245,245,245)'),
    borderRadius: 10,
  },
  search: {
    height: 28,
    width: 30,
    marginTop: 10,
    marginLeft: 10,
  },
  place: {
    fontSize: 15,
    fontWeight: 'bold',
    color: ('rgb(125,125,125)'),
    marginLeft: 5,

  },
  voice: {
    width: 60,
    borderColor: 'grey',
    marginLeft: 157,
  },
  microphone: {
    marginTop: 10,
    marginLeft: 25,
    height: 20,
    width: 20
  },
  spotlight: {
    fontSize: 20,
    marginTop: 40,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  flatview: {
    backgroundColor: 'white',
    marginHorizontal: 7,
    marginTop: 15,
  },
  flatimage: {
    height: 190,
    width: 280,
    borderRadius: 20,

  },
  off: {
    position: 'absolute',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    bottom: 45,
    left: 15
  },
  california: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    bottom: 20,
    left: 15,
  },

  heart: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 0.5,
    position: 'absolute',
    top: 10,
    right: 10
  },

  share: {
    height: 23,
    width: 23

  },

  rating: {
    flexDirection: 'row',
    backgroundColor: 'green',
    paddingHorizontal: 7,
    paddingVertical: 7,
    borderRadius: 8,
    width: 50,
    height: 30,
    position:'absolute',
    bottom:18,
    right:12
  },
  ratingStar: {
    height: 12,
    width: 12,
    marginTop:3
  },
  points:{
    fontSize:15,
    fontWeight:'700',
    color:'white'
  },
  varities: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 15,
  },
  menu: {
    marginTop: 15,
    marginLeft: 10,
  },
  menuimage: {
    height: 70,
    width: 70,
    borderRadius: 180,
    marginHorizontal: 8
  },
  menuTitle: {
    color: 'grey',
    marginTop: 10,
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center'
  },
  bottomFlat: {
    paddingBottom: 180
  }

})
export default SecondScreen;