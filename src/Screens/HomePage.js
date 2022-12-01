import React, { Component } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { BlurView } from "@react-native-community/blur";
import SecondScreen from "./SecondScreen";
import { showData } from "../Redux/Actions/Action";
import { connect } from "react-redux";


class HomePage extends Component {
  componentDidMount() {
    const { showData } = this.props
    showData()

  }
  render() {
    const { show } = this.props

    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.work}>
          <Image style={styles.location}
            source={require('../../Images/icons8-location-32.png')} />
          <View style={styles.workText}>
            <Text style={styles.boldText}>Work</Text>
            <Text style={styles.address}>To The New,2nd Floor,NSL Building,NSL Techzo...</Text>
            <Image style={styles.down}
              source={require('../../Images/icons8-more-than-49.png')} />
          </View>
          <View style={styles.language}>
            <Image style={styles.langBar}
              source={require('../../Images/languageBar.png')} />
            <Image style={styles.profile}
              source={require('../../Images/ProfilePic.jpg')} />
          </View>
        </View>



        <View style={styles.inputView}>
          <Image style={styles.search}
            source={require('../../Images/icons8-search-64.png')} />

          <TextInput style={styles.place}
            placeholder="Search Pizza " />

          <View style={styles.voice}>
            <Image style={styles.microphone}
              source={require('../../Images/icons8-microphone-24.png')} />
          </View>
        </View>
        <ScrollView style={styles.scrol}>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.types}>
              <Image style={styles.slider}
                source={require('../../Images/icons8-slider-24.png')} />
              <Text style={styles.buttonText}>Sort</Text>
              <Image style={styles.sort}
                source={require('../../Images/icons8-sort-down-30.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.Pro}>
              <Text style={styles.buttonTextOthers}>Pro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.typesOther}>
              <Text style={styles.buttonTextOthers}>Fast Delivery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.typesOther}>
              <Text style={styles.buttonTextOthers}>Great Offers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.typesOther}>
              <Text style={styles.buttonTextOthers}>Rating 4.0+</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.offers}>
            <Image style={styles.imageOne}
              source={require('../../Images/offers.jpeg')} />

            <Image style={styles.imageOne}
              source={require('../../Images/healthy.jpeg')} />

          </View>

          <Text style={styles.restText}>Based on your Orders </Text>




          <FlatList
            data={show.data}
            numColumns={2}
            renderItem={({ item }) => {
              const { description } = item
              return (
                <View style={styles.flatView}>
                  <TouchableOpacity style={styles.detail}
                    onPress={() => this.props.navigation.navigate('ShowPage', { result: item })}>
                    <Image style={styles.img}
                      source={{ uri: item.imageurl }} />

                    <View style={styles.imgDes}>
                      <Text style={styles.imgTextOne}>{item.title}</Text>
                      <View style={styles.duration}>
                        <Image style={styles.watch}
                          source={require('../../Images/icons8-stopwatch-66.png')} />
                        <Text style={styles.imgTextTwo}>{item.deliveryduration}</Text>
                      </View>

                      <Text style={[item.offers ? styles.imgTextThree : styles.description]}>{item.offers || description.substr(0, 22)}...</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }} />

          <Text style={styles.restText}>Because you Deserve This!</Text>
          <Image style={styles.center}
            source={{ uri: 'https://b.zmtcdn.com/data/pictures/chains/2/53922/acf82ffdb2549ecdcbd12aca5a39c0c4_featured_v2.jpg?output-format=webp' }} />

          <SecondScreen />

          <BlurView
            style={styles.bottomView}
            blurType="light"
            blurAmount={15}>
            <Image style={styles.star}
              source={require('../../Images/icons8-star-64.png')} />
            <View style={styles.bottonDetail}>
              <Text style={styles.MomsKitchen}>Mom's Kitchen</Text>
              <Text style={styles.rate}>How would you rate your experience</Text>
            </View>

            <Text style={styles.redText}>Rate</Text>
            <Image style={styles.cancel}
              source={require('../../Images/icons8-cancel-32.png')} />
          </BlurView>




          {/* </View> */}
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const mapStateToProps = state => {
  return {
    show: state.ShowReducer
  }
}
const mapDispatchToProps = {
  showData
}

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: 'white',

  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal'
  },
  address: {
    fontSize: 10,
    color: 'black'
  },
  language: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 120,

  },

  langBar: {
    height: 35,
    width: 40,
  },
  profile: {
    height: 32,
    width: 30,
    borderRadius: 40
  },

  work: {
    flexDirection: 'row'
  },
  workText: {
    marginLeft: 5
  },
  location: {
    height: 25,
    width: 25,
    marginTop: 5,
    marginLeft: 5,
  },
  down:{
    position:'absolute',
    height:6,
    width:20,
    left:40,
    top:7
  },
  inputView: {
    marginTop: 15,
    marginLeft: 10,
    flexDirection: 'row',
    height: 50,
    width: 370,
    backgroundColor: ('rgb(245,245,245)'),
    borderRadius: 10,
  },
  search: {
    height: 28,
    width: 28,
    marginTop: 10,
    marginLeft: 5,
  },
  place: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 5,
    width: 270
  },
  voice: {
    width: 55,
    height: 40,
    borderColor: 'gainsboro',
    borderLeftWidth: 0.4,
    marginLeft: 16,
    marginTop: 5,
    paddingVertical: 6,
    paddingHorizontal: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
  slider: {
    height: 22,
    width: 22,
    marginTop: 4
  },
  types: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 0.3,
    borderRadius: 7,
    width: 70,
    height: 30,
  },
  Pro: {
    backgroundColor: 'white',
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 7,
    borderColor: 'grey',
    borderWidth: 0.3,
  },
  typesOther: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 0.3,
    borderRadius: 7,
    width: 82,
    height: 30,
    paddingHorizontal: 5,
    paddingVertical: 8
  },
  buttonTextOthers: {
    fontSize: 11,
    color: 'black',
    fontWeight: '600'
  },
  buttonText: {
    marginTop: 7,
    color: 'bold',
    fontWeight: '600',
    fontSize: 12
  },
  offers: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15
  },
  imageOne: {
    height: 120,
    width: 180,
  },

  sort: {
    height: 14,
    width: 14,
    marginTop: 7,
  },
  scrol: {
    marginTop:10,
   
  },
  restaurants: {
    flexDirection: 'column',

  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 4

  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  restText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 16,
  },
  center: {
    height: 180,
    width: 362,
    marginLeft: 15,
    marginTop: 12,
    borderRadius: 30,
  },
  flatView: {
    // borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    // marginHorizontal: 12,
    width: '50%',
    paddingLeft: 18,
    paddingVertical: 10

  },
  imgFlat: {
    height: 20,
    width: 20
  },
  detail: {
    flexDirection: 'row',


  },
  img: {
    height: 54,
    width: 54,

    borderRadius: 8,
  },
  imgDes: {
    marginLeft: 5,
  },
  duration: {
    flexDirection: 'row',


  },
  watch: {
    height: 17,
    width: 16,
    marginTop: 3
  },
  imgTextOne: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4
  },
  imgTextTwo: {
    color: "grey",
    marginTop: 4
  },
  imgTextThree: {
    color: ('rgb(62,123,233)'),
    fontSize: 10,
    marginTop: 2
  },
  imgTextFour: {
    color: 'grey',
    fontSize: 10,
    marginTop: 2
  },
  bottomView: {
    flexDirection: 'row',
    position: "absolute",
    top: 560,
    width: 450,
    height: 58,
    padding: 9,
  },
  star: {
    height: 28,
    width: 28,
    // marginLeft:5,
    marginTop: 6
  },
  bottonDetail: {
    marginLeft: 10,
  },
  MomsKitchen: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 3,
  },
  rate: {
    fontSize: 11,
     marginTop:3,
    fontWeight: 'bold',
    color: 'grey'
  },
  redText: {
    color: 'red',
    marginLeft: 65,
    marginTop: 11,
  },
  cancel: {
    height: 25,
    width: 25,
    marginLeft: 10,
    marginTop: 8,
  },
  description: {
    color: 'grey',
    fontSize: 10,
    paddingTop: 5
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);