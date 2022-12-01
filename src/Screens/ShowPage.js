import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert } from "react-native";

const ShowPage = ({ route, navigation }) => {

    const ButtonAlert = () =>
        Alert.alert(
            "Hey!",
            "Choose your Pick",
            [
                {
                    text: "Cancel",
                    // onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK" }
            ]
        );

    const ButtonAdd = () =>
        Alert.alert(
            "Hey!",
            "Add your item",
            [
                {
                    text: "Cancel",
                    // onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK" }
            ]
        );
    const ShowMenu=()=>
    Alert.alert(
        "Hey!",
        "Go To The Menu",
        [
            {
                text: "Cancel",
                // onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK" }
        ]
    );



    const display = route.params.result
    return (
        <SafeAreaView style={styles.header}>

            <View style={styles.top}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.arrow}
                        source={require('../../Images/icons8-more-than-50.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menu}>
                    <Image style={styles.search}
                        source={require('../../Images/icons8-search-64.png')} />
                    <TextInput
                        style={styles.place}
                        placeholder="Search menu" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.dots}>
                    <Image style={styles.threeDots}
                        source={require('../../Images/icons8-more-24.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.mainView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.Scrol}>
                        <View style={styles.Display}>
                            <View style={styles.firstBox}>
                                <Text style={styles.Title}>{display.title}</Text>
                                <Text style={styles.course}>{display.item}</Text>

                                <View style={styles.AddressBar}>
                                    <Text style={styles.adText}>{display.Address}</Text>
                                    <Image style={styles.redSort}
                                        source={require('../../Images/icons8-sort-red-24.png')} />
                                </View>


                                <View style={styles.fourthView}>
                                    <View style={styles.stopwatch}>
                                        <Image style={styles.watch}
                                            source={require('../../Images/icons8-stopwatch-66.png')} />
                                        <Text style={styles.deliveryTime}>{display.deliveryduration}</Text>
                                    </View>
                                    <View style={styles.dist}>
                                        <Text style={styles.distText}>{display.distance}</Text>
                                    </View>
                                </View>

                                <View style={styles.greenButton}>
                                    <TouchableOpacity style={styles.rating}>
                                        <Text style={styles.points}>{display.Ratings}</Text>
                                        <Image style={styles.ratingStar}
                                            source={require('../../Images/icons8-christmas-star-50.png')} />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.reviews}>
                                        <Text style={styles.revText}>{display.Reviews}</Text>
                                        <Text style={styles.head}>Reviews</Text>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView style={styles.AddScrol}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false} >
                                    <Image style={styles.OfferRed}
                                        source={require('../../Images/RedAdd.jpeg')} />

                                    <Image style={styles.OfferBlue}
                                        source={require('../../Images/RedAdd.jpeg')} />
                                </ScrollView>

                            </View>
                        </View>

                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.buttonVeg}
                                onPress={ButtonAlert}>
                                <Image style={styles.veg}
                                    source={require('../../Images/icons8-vegetarian-food-symbol-48.png')} />
                                <Text style={styles.buttonText}>Veg</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonNonveg}
                                onPress={ButtonAlert}>
                                <Image style={styles.veg}
                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIkrKbfwN91hLB3v0sx0C8AnGer2crLMOuA&usqp=CAU' }} />
                                <Text style={styles.buttonText}>Non-veg</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonBest}
                                onPress={ButtonAlert}>
                                <Text style={styles.buttonTextOthers}>Bestseller</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttons}
                                onPress={ButtonAlert}>
                                <Text style={styles.buttonTextOthers}>Rating 4.0+</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonLunch}
                                onPress={ButtonAlert}>
                                <Text style={styles.buttonTextOthers}>Lunch</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.itemView}>
                            <Text style={styles.order}>Your Previous order</Text>

                            <View style={styles.previousOrders}>
                                <View style={styles.firstrow}>
                                    <Image style={styles.wrap}
                                        source={{ uri: "https://b.zmtcdn.com/data/dish_photos/050/f828d299c85374c6374c676c37b21050.png?output-format=webp&fit=around|130:130&crop=130:130;*,*" }} />
                                    <Image style={styles.vegAb}
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIkrKbfwN91hLB3v0sx0C8AnGer2crLMOuA&usqp=CAU' }} />


                                    <View style={styles.info}>
                                        <Text style={styles.title}>2 x
                                            <Text style={styles.inner}> Big Spicy Chicken Wrap</Text>
                                        </Text>
                                        <Text style={styles.cheese}>Add Cheese</Text>
                                    </View>
                                </View>

                                <View style={styles.firstrow}>
                                    <Image style={styles.wrap}
                                        source={{ uri: "https://b.zmtcdn.com/data/dish_photos/901/802b82218c9aef28be50dcd6d5213901.png?output-format=webp&fit=around|130:130&crop=130:130;*,*" }} />
                                    <Image style={styles.vegAb}
                                        source={require('../../Images/icons8-vegetarian-food-symbol-48.png')} />

                                    <View style={styles.info}>
                                        <Text style={styles.title}>1 x
                                            <Text style={styles.inner}> Big Spicy Paneer Wrap</Text>
                                        </Text>
                                        <Text style={styles.cheese}>Add Cheese</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.moreitems}>
                                <Text style={styles.more}>+ 1 more items(s)</Text>
                                <Image style={styles.down}
                                    source={require('../../Images/icons8-more-than-49.png')} />
                            </TouchableOpacity>

                            <View style={styles.addPrice}>
                                <Text style={styles.price}>Rs826</Text>

                                <TouchableOpacity style={styles.add}
                                    onPress={ButtonAdd}>
                                    <Text style={styles.addText}>ADD</Text>
                                    <Image style={styles.plus}
                                        source={require('../../Images/icons8-plus-48.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>




                    <View style={styles.previously}>
                        <View style={styles.ordered}>
                            <Text style={styles.bottomText}>Previously Ordered Items(1)</Text>
                            <Image style={styles.up}
                                source={require('../../Images/icons8-sort-down-25.png')} />
                        </View>

                        <View style={styles.bottomView}>
                            <View style={styles.boxOne}>
                                <View style={styles.first}>
                                    <Image style={styles.Veg}
                                        source={require('../../Images/icons8-vegetarian-food-symbol-48.png')} />
                                    <TouchableOpacity style={styles.orange}>
                                        <Text style={styles.orangeText}>Bestseller</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.Fries}>Large Fries</Text>
                                <View style={styles.second}>
                                    <Image style={styles.stars}
                                        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/011/732/718/small/funny-cute-happy-4-star-characters-bundle-set-hand-drawn-doodle-style-cartoon-character-illustration-icon-design-isolated-on-white-background-cute-five-four-mascot-character-collection-vector.jpg' }} />
                                    <Text style={styles.number}>595 reviews</Text>

                                </View>
                                <Text style={styles.amount}>Rs114</Text>

                                <View style={styles.Description}>
                                    <Text style={styles.productDetail}>World Famous French Fries.These</Text>
                                    <Text style={styles.productDetail}>epics fan-favourite ..read more</Text>
                                </View>
                            </View>

                            <View style={styles.boxTwo}>
                                <Image style={styles.frenchFries}
                                    source={{ uri: 'https://b.zmtcdn.com/data/dish_photos/2b8/74b54ec1c4778732325b186d4f3e22b8.png?output-format=webp&fit=around|130:130&crop=130:130;*,*' }} />
                            </View>


                        </View>

                        <TouchableOpacity style={styles.addBottom}
                        onPress={ButtonAdd}>
                            <Text style={styles.addText}>ADD</Text>
                            <Image style={styles.plusAdd}
                                source={require('../../Images/icons8-plus-48.png')} />
                        </TouchableOpacity>
                        <View style={styles.shareView}>
                            <TouchableOpacity style={styles.heart}>
                                <Image style={styles.share}
                                    source={require('../../Images/icons8-heart-upside-down-24.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.heart}>
                                <Image style={styles.share}
                                    source={require('../../Images/icons8-share-24.png')} />
                            </TouchableOpacity>

                        </View>



                    </View>
                    {/* <View style={{ height: 35, backgroundColor: 'white' }} /> */}







                </ScrollView>
            </View>
            <TouchableOpacity style={styles.MenuButton}
            onPress={ShowMenu}>
                <Image style={styles.menuBook}
                    source={require('../../Images/icons8-restaurant-menu-48.png')} />
                <Text style={styles.menuText}>Menu</Text>
            </TouchableOpacity>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: ('rgb(244,246,250)'),
        flex: 1,
        flexDirection: 'column',


    },
    top: {
        flexDirection: 'row',
        padding: 2


    },
    arrow: {
        height: 23,
        width: 30,
        marginTop: 10,
        marginLeft: 6,
    },
    search: {
        height: 25,
        width: 20,
    },
    menu: {

        flexDirection: 'row',
        width: 130,
        height: 40,
        padding: 9,
        borderColor: 'grey',
        borderWidth: 0.2,
        borderRadius: 20,
        backgroundColor: 'white',
        marginLeft: 165,
    },
    place: {
        fontSize: 13,
    },
    dots: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        padding: 7,
        borderColor: 'grey',
        borderWidth: 0.2,
        borderRadius: 20,
        marginLeft: 10,
    },
    mainView:{
       marginBottom:20,
    },
    Scrol: {
        margin: 10,
        marginTop: 15
    },
    Display: {
        backgroundColor: 'white',
        borderRadius: 20,
    },
    AddressBar: {
        flexDirection: 'row'
    },
    redSort: {
        height: 17,
        width: 17,
        marginTop: 6
    },
    Title: {
        fontSize: 22,
        marginTop: 15,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    course: {
        fontSize: 14,
        color: 'black',
        fontWeight: '500',
        marginTop: 4,
        marginLeft: 15
    },
    adText: {
        fontSize: 14,
        fontWeight: '400',
        color: 'grey',
        marginTop: 7,
        marginLeft: 15
    },
    fourthView: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 210,
        marginTop: 10,
        marginLeft: 9,
        // backgroundColor:'yellow'
    },

    stopwatch: {
        flexDirection: 'row',
        padding: 2,
        width: 75
    },
    watch: {
        height: 18,
        width: 20
    },
    deliveryTime: {
        fontSize: 13,
        marginLeft: 2,
        fontWeight: '600',
        color: 'black'
    },
    dist: {
        borderColor: 'black',
        borderLeftWidth: 0.2,
        height: 20,
        width: 110,
        paddingVertical: 2,
    },
    distText: {
        color: 'black',
        fontWeight: '600',
        marginLeft: 8
    },
    AddScrol: {
        padding: 12,
    },
    OfferRed: {
        height: 68,
        width: 230,

    },
    OfferBlue: {
        height: 58,
        width: 230,
        marginLeft: 10,
        marginTop: 5,
    },
    greenButton: {
        position: 'absolute',
        right: 10,
        top: 15,
    },
    rating: {
        flexDirection: 'row',
        backgroundColor: 'green',
        paddingHorizontal: 7,
        paddingVertical: 6,
        borderTopRightRadius: 11,
        borderTopLeftRadius: 11
    },
    ratingStar: {
        height: 16,
        width: 16,
        marginTop: 4
    },
    points: {
        color: 'white',
        fontSize: 19,
        marginLeft: 8
    },
    reviews: {
        padding: 3,
        borderColor: 'grey',
        borderWidth: 0.5,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    revText: {
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },
    head: {
        fontSize: 12,
        textAlign: 'center',
        color: 'grey'
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,

    },
    buttonVeg: {
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 4,
        backgroundColor: 'white',
        borderRadius: 7,
        borderColor: 'grey',
        borderWidth: 0.2
    },
    buttonNonveg: {
        flexDirection: 'row',
        paddingHorizontal: 4,
        paddingVertical: 6,
        backgroundColor: 'white',
        borderRadius: 7,
        borderColor: 'grey',
        borderWidth: 0.2
    },
    buttons: {
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 7,
        borderColor: 'grey',
        borderWidth: 0.2
    },
    buttonBest: {
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 7,
        borderColor: 'grey',
        borderWidth: 0.2
    },
    buttonLunch: {
        backgroundColor: "white",
        padding: 6,
        borderRadius: 7,
        borderColor: 'grey',
        borderWidth: 0.2
    },
    buttonText: {
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
        marginLeft: 2
    },
    buttonTextOthers: {
        fontSize: 12,
        fontWeight: '600',

    },
    veg: {
        height: 16,
        width: 16,
        borderRadius: 4
    },
    itemView: {

        backgroundColor: 'white',

        borderRadius: 20,
        marginTop: 15
    },
    order: {
        fontSize: 14,
        marginLeft: 10,
        marginTop: 10,
        fontWeight: 'bold'
    },
    previousOrders: {
        borderColor: 'grey',
        borderTopWidth: 0.2,
        marginTop: 10,
    },
    wrap: {
        height: 50,
        width: 50,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10
    },
    vegAb: {
        position: 'absolute',
        height: 11,
        width: 11,
        left: 35,
        top: 5
    },
    firstrow: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 12
    },

    info: {
        marginTop: 2,
        marginLeft: 10
    },
    title: {
        color: 'grey',
        fontSize: 14
    },
    inner: {
        color: 'black',
        marginLeft: 10,
        fontSize: 13,
        fontWeight: '600'
    },
    cheese: {
        color: 'grey',
        fontWeight: '600',
        fontSize: 11,
        marginTop: 3
    },
    moreitems: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10,
        padding: 10,
        borderColor: 'grey',
        borderBottomWidth: 0.5
    },
    more: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'grey'
    },
    down: {
        height: 18,
        width: 18
    },
    addPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 13,
        paddingVertical: 15
    },
    price: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold'
    },
    add: {
        flexDirection: 'row',
        backgroundColor: ('rgb(253,246,247)'),
        paddingVertical: 6,
        paddingHorizontal: 21,
        height: 34,
        width: 90,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,

    },
    addText: {
        fontSize: 16,
        color: ('rgb(223,102,110)'),
        fontWeight: 'bold',

    },
    plus: {
        height: 9,
        width: 20,
        marginLeft: 8
    },
    previously: {

        backgroundColor: 'white',
        marginTop: 10,


    },
    ordered: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderColor: 'red',
        borderLeftWidth: 3,
        marginHorizontal: 10,
        padding: 5,
        marginTop: 20,
    },
    bottomText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '600'
    },
    up: {
        height: 18,
        width: 20
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    first: {
        flexDirection: 'row',
        marginTop: 30,
        width: 115,
        justifyContent: 'space-between'
    },
    Veg: {
        height: 30,
        width: 30,

    },
    orange: {
        backgroundColor: ('rgb(216,114,69)'),
        padding: 5,
        width: 80,
        height: 25,
        borderRadius: 5,
        marginTop: 3
    },
    orangeText: {
        fontSize: 14,
        color: 'white'
    },
    Fries: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: '600'
    },
    stars: {
        height: 25,
        width: 80,
        borderColor: ('rgb(251,234,185)'),
        borderRadius: 5,
        borderWidth: 2
    },
    second: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 10
    },
    number: {
        fontSize: 15,
        marginTop: 5,
        color: 'grey',
        marginLeft: 5
    },
    amount: {
        fontSize: 18,
        marginTop: 15,
        fontWeight: '600'
    },
    Description: {
        flexDirection: 'column',
        marginTop: 6,
    },
    productDetail: {
        fontSize: 12,
        color: 'grey',
        fontWeight: '500'
    },
    boxTwo: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 30,

    },
    frenchFries: {
        marginVertical: 18,
        height: 150,
        width: 140
    },
    addBottom: {
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: ('rgb(253,246,247)'),
        paddingVertical: 8,
        paddingHorizontal: 32,
        height: 40,
        width: 110,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        right: 25,
        bottom: 5,
    },
    plusAdd: {
        height: 9,
        width: 20,
        marginLeft: 18
    },
    share: {
        height: 21,
        width: 21
    },
    shareView:{
        flexDirection:'row',
        marginHorizontal:15
    },
    shareIcon: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 18,
        borderColor: 'grey',
        borderWidth: 0.5,
    },
    heart: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 18,
        borderColor: 'grey',
        borderWidth: 0.5,
        marginHorizontal: 8

    },
    MenuButton: {
        flexDirection: 'row',
        padding: 9,
        borderWidth: 2,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 25
    },
    menuText: {
        color: 'white',
        fontWeight: '700',
        marginLeft: 10,
        marginTop: 7
    },
    menuBook: {
        height: 30,
        width: 30,

    },



})
export default ShowPage;