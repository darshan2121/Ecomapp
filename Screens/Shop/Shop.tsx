import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, Modal } from 'react-native'
import React, { useCallback, useState } from 'react'
import RangeSlider from 'rn-range-slider';
import Card from '../../Component/Card';
import Thumb from '../../Component/rangeslider/Thumb';
import Rail from '../../Component/rangeslider/Rail';
import RailSelected from '../../Component/rangeslider/RailSelected';
import Notch from '../../Component/rangeslider/Notch';
import Label from '../../Component/rangeslider/label';
import { ActionSheetIOS } from 'react-native';
import ActionSheet from "react-native-actions-sheet";
import { useNavigation } from '@react-navigation/native';
import BrandsScreen from '../Shop/Brands'; // Import your Brands screen component


interface Item {
    id: string;
    name: string;
    brand: string;
    price: number;
    rating: number;
    image: any; // Using 'any' for the image source. In a real app, you might want a more specific type.
}


const data: Item[] = [
    { id: '1', name: 'Pullover', brand: 'Mango', price: 51, rating: 3, image: require('../../assets/images/pullover.png') },
    { id: '2', name: 'Blouse', brand: 'Dorothy Perkins', price: 34, rating: 0, image: require('../../assets/images/blouse.png') },
    { id: '3', name: 'T-shirt', brand: 'LOST Ink', price: 12, rating: 5, image: require('../../assets/images/Tshirt.png') },
    { id: '4', name: 'Shirt', brand: 'Topshop', price: 51, rating: 4, image: require('../../assets/images/shirt.png') },
];
const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('Women');
    const [sortByModalVisible, setSortByModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(100);

    const toggleSortByModal = () => {
        setSortByModalVisible(!sortByModalVisible);
    };

    const handleCategorySelect = (category: string) => {
        if (category === 'Price: lowest to high') {
            showActionSheet();
        } else {
            setSelectedCategory(category);
            setSortByModalVisible(false); // Close modal after category selection
        }
    };


    const [selectedSize, setSelectedSize] = useState(''); // State to keep track of selected size
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorSelect = (color: React.SetStateAction<string>) => {
        setSelectedColor(color);
    };

    const handleSizeSelect = (size: React.SetStateAction<string>) => {
        setSelectedSize(size); // Update selected size when a size is pressed
    };
    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback((value: any) => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);
    const handleValueChange = useCallback((low: React.SetStateAction<number>, high: React.SetStateAction<number>) => {
        setLow(low);
        setHigh(high);
    }, []);


    const navigation = useNavigation();

    const navigateToBrands = () => {
        navigation.navigate('Brands'); // Assuming 'Brands' is the name of the route for the Brands screen
    };

    const showActionSheet = () => {
        const options: string[] = ['Popular', 'Newest', 'Customer Review', 'Cancel'];
        const cancelButtonIndex = options.length - 1;

        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: options,
                cancelButtonIndex: cancelButtonIndex,
            },
            buttonIndex => {
                // Check if the selected option is not "Cancel"
                if (buttonIndex !== cancelButtonIndex) {
                    const selectedOption = options[buttonIndex];
                    setSelectedCategory(selectedOption);
                }
            }
        );
    };



    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.rating}>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</Text>
            </View>
        </View>
    );

    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={{ alignContent: 'space-evenly', flexDirection: 'row', marginTop: 10 }}>
                <TouchableOpacity>
                    <Image source={require('../../assets/icons/icon.png')} style={styles.backIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../../assets/icons/baseline-search-24px.png')} style={styles.searchIcon} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', marginTop: -30 }}>
                <Text style={{ fontSize: 18, fontWeight: 'semibold', color: 'black' }}>Categories</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.categoryButton, activeCategory === 'Women' && styles.activeButton]}
                    onPress={() => setActiveCategory('Women')}
                >
                    <Text style={styles.buttonText}>Women</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.categoryButton, activeCategory === 'Men' && styles.activeButton]}
                    onPress={() => setActiveCategory('Men')}
                >
                    <Text style={styles.buttonText}>Men</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.categoryButton, activeCategory === 'Kids' && styles.activeButton]}
                    onPress={() => setActiveCategory('Kids')}
                >
                    <Text style={styles.buttonText}>Kids</Text>
                </TouchableOpacity>
            </View>

            <View style={{ width: 343, height: 100, backgroundColor: '#DB3022', marginHorizontal: 25, marginTop: 20, borderRadius: 8 }}>
                <View style={{ alignItems: 'center', marginTop: 25 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'semibold', color: 'white' }}>SUMMER SALES</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'medium', color: 'white' }}>Up to 50% off</Text>
                </View>
            </View>

            <View style={{ width: 343, height: 100, backgroundColor: 'white', marginHorizontal: 25, marginTop: 20, borderRadius: 8, }}>
                <View style={{ alignItems: 'center', marginTop: 25 }}>

                    <Text style={{ fontSize: 18, fontWeight: 'semibold', color: 'black', marginRight: "70%" }}>New</Text>
                    <Image source={require('../../assets/images/image4.1.png')} style={styles.cardimg} />

                </View>
            </View>

            <View style={{ width: 343, height: 100, backgroundColor: 'white', marginHorizontal: 25, marginTop: 20, borderRadius: 8, }}>
                <View style={{ alignItems: 'center', marginTop: 25 }}>

                    <Text style={{ fontSize: 18, fontWeight: 'semibold', color: 'black', marginRight: "70%" }}>Clothes</Text>
                    <Image source={require('../../assets/images/image.png')} style={styles.cardimg} />

                </View>
            </View>

            <View style={{ width: 343, height: 100, backgroundColor: 'white', marginHorizontal: 25, marginTop: 20, borderRadius: 8, }}>
                <View style={{ alignItems: 'center', marginTop: 25 }}>

                    <Text style={{ fontSize: 18, fontWeight: 'semibold', color: 'black', marginRight: "70%" }}>Shoes</Text>
                    <Image source={require('../../assets/images/image2.png')} style={styles.cardimg} />

                </View>
            </View>

            <View style={{ width: 343, height: 100, backgroundColor: 'white', marginHorizontal: 25, marginTop: 20, borderRadius: 8, }}>
                <View style={{ alignItems: 'center', marginTop: 25 }}>

                    <Text style={{ fontSize: 18, fontWeight: 'semibold', color: 'black', marginRight: "70%" }}>Accesories</Text>
                    <Image source={require('../../assets/images/image3.png')} style={styles.cardimg} />

                </View>

            </View>
            {data.map((item) => (
                <View key={item.id} style={styles.itemContainer}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.brand}>{item.brand}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                        <Text style={styles.rating}>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</Text>
                    </View>
                </View>
            ))}
            <View>
                <Text style={{ fontSize: 34, fontWeight: 'bold', marginTop: 10, marginLeft: 20, color: 'black' }}>Women’s tops</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                <TouchableOpacity style={styles.Buttonlist} onPress={() => { }}>
                    <Text style={styles.buttonlisttext}>T-shirts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttonlist} onPress={() => { }}>
                    <Text style={styles.buttonlisttext}>Crop tops</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttonlist} onPress={() => { }}>
                    <Text style={styles.buttonlisttext}>Sleeveless</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttonlist} onPress={() => { }}>
                    <Text style={styles.buttonlisttext}>Shirts</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/icons/Vector.png')} style={styles.filtericon} />
                    <Text style={styles.filtertxt}>Filters</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleCategorySelect('Price: lowest to high')}>
                    <Text style={[styles.modalText, selectedCategory === 'Price: lowest to high' && styles.selectedCategory]}>Price: lowest to high</Text>
                </TouchableOpacity>


                {/* Sort By Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={sortByModalVisible}
                    onRequestClose={() => {
                        setSortByModalVisible(false);
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity onPress={toggleSortByModal}>
                                <Image source={require('../../assets/icons/updown.png')} style={[styles.updownicon, { marginBottom: 10 }]} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleCategorySelect('Popular')}>
                                <Text style={[styles.modalText, selectedCategory === 'Popular' && styles.selectedCategory]}>Popular</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleCategorySelect('Newest')}>
                                <Text style={[styles.modalText, selectedCategory === 'Newest' && styles.selectedCategory]}>Newest</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleCategorySelect('Customer Review')}>
                                <Text style={[styles.modalText, selectedCategory === 'Customer Review' && styles.selectedCategory]}>Customer Review</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleCategorySelect('Price: lowest to high')}>
                                <Text style={[styles.modalText, selectedCategory === 'Price: lowest to high' && styles.selectedCategory]}>Price: lowest to high</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleCategorySelect('Price: highest to low')}>
                                <Text style={[styles.modalText, selectedCategory === 'Price: highest to low' && styles.selectedCategory]}>Price: highest to low</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Card />
                <Card />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Card />
                <Card />
            </View>
            <View style={styles.sliderContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Price range</Text>
                </View>
                <View style={styles.sliderLabels}>
                    <Text style={styles.sliderLabel}> ${low}</Text>
                    <Text style={styles.sliderLabel}> ${high}</Text>
                </View>
                <RangeSlider
                    style={styles.rangeSlider}
                    min={0}
                    max={100}
                    step={1}
                    floatingLabel
                    renderThumb={renderThumb}
                    renderRail={renderRail}
                    renderRailSelected={renderRailSelected}
                    renderLabel={renderLabel}
                    renderNotch={renderNotch}
                    onValueChanged={handleValueChange}
                />
            </View>
            <View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Colors</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity
                        style={[
                            styles.colorCircle,
                            { backgroundColor: '#020202', borderWidth: selectedColor === '#020202' ? 2 : 0 },
                        ]}
                        onPress={() => handleColorSelect('#020202')}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.colorCircle,
                            { backgroundColor: '#F6F6F6', borderWidth: selectedColor === '#F6F6F6' ? 2 : 0 },
                        ]}
                        onPress={() => handleColorSelect('#F6F6F6')}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.colorCircle,
                            { backgroundColor: '#B82222', borderWidth: selectedColor === '#B82222' ? 2 : 0 },
                        ]}
                        onPress={() => handleColorSelect('#B82222')}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.colorCircle,
                            { backgroundColor: '#BEA9A9', borderWidth: selectedColor === '#BEA9A9' ? 2 : 0 },
                        ]}
                        onPress={() => handleColorSelect('#BEA9A9')}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.colorCircle,
                            { backgroundColor: '#151867', borderWidth: selectedColor === '#151867' ? 2 : 0 },
                        ]}
                        onPress={() => handleColorSelect('#151867')}
                    ></TouchableOpacity>
                </View>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Sizes</Text>
            </View>
            <View style={styles.squrecontainer}>

                <TouchableOpacity
                    style={[styles.sizeButton, selectedSize === 'XS' && styles.selectedButton]}
                    onPress={() => handleSizeSelect('XS')}
                >
                    <Text style={styles.sizeText}>XS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.sizeButton, selectedSize === 'S' && styles.selectedButton]}
                    onPress={() => handleSizeSelect('S')}
                >
                    <Text style={styles.sizeText}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.sizeButton, selectedSize === 'M' && styles.selectedButton]}
                    onPress={() => handleSizeSelect('M')}
                >
                    <Text style={styles.sizeText}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.sizeButton, selectedSize === 'L' && styles.selectedButton]}
                    onPress={() => handleSizeSelect('L')}
                >
                    <Text style={styles.sizeText}>L</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.sizeButton, selectedSize === 'XL' && styles.selectedButton]}
                    onPress={() => handleSizeSelect('XL')}
                >
                    <Text style={styles.sizeText}>XL</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Category</Text>
            </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity
                    style={[styles.categorySizeButton, selectedCategory === 'All' && styles.selectedButton]}
                    onPress={() => handleCategorySelect('All')}
                >
                    <Text style={styles.categoryText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.categorySizeButton, selectedCategory === 'Women' && styles.selectedButton]}
                    onPress={() => handleCategorySelect('Women')}
                >
                    <Text style={styles.categoryText}>Women</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.categorySizeButton, selectedCategory === 'Men' && styles.selectedButton]}
                    onPress={() => handleCategorySelect('Men')}
                >
                    <Text style={styles.categoryText}>Men</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.categorySizeButton, selectedCategory === 'Boys' && styles.selectedButton]}
                    onPress={() => handleCategorySelect('Boys')}
                >
                    <Text style={styles.categoryText}>Boys</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.categorySizeButton, selectedCategory === 'Girls' && styles.selectedButton]}
                    onPress={() => handleCategorySelect('Girls')}
                >
                    <Text style={styles.categoryText}>Girls</Text>
                </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row', alignContent: 'space-around' }}>
                <TouchableOpacity onPress={navigateToBrands}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>Brands</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToBrands()}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>Brands</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default Shop

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backIcon: {
        marginTop: 15,
        marginLeft: 10,
    },
    searchIcon: {
        marginTop: 15,
        marginLeft: '86%',
    },
    titleContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        marginTop: 30,
    },
    categoryButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    activeButton: {
        borderBottomWidth: 2,
        borderBottomColor: '#DB3022',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
    },
    cardimg: {
        marginTop: -56,
        marginLeft: 160,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    brand: {
        fontSize: 16,
        color: '#666',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 4,
    },
    rating: {
        fontSize: 16,
        color: '#f39c12',
        marginTop: 4,
    },
    Buttonlist: {
        marginTop: 10,
        width: 100,
        height: 30,
        backgroundColor: '#222222',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    buttonlisttext: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'medium',
    },
    scrollView: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    filtericon: {
        width: 18,
        height: 12,
        marginLeft: 15,
        marginTop: 15
    },
    filtertxt: {
        marginLeft: 15,
        marginTop: 15
    },
    updownicon: {
        height: 24,
        width: 24,
        marginTop: 15,
        marginLeft: 80,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
    },
    selectedCategory: {
        color: 'red',
        fontWeight: 'bold',
    },
    sliderContainer: {
        marginVertical: 40,
        alignItems: 'center',
        marginTop: 10,
    },
    sliderLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    sliderLabel: {
        fontSize: 16,
    },
    rangeSlider: {
        width: '90%',
        height: 80,
    },
    sizeButton: {
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#9B9B9B',
        borderWidth: 1,

    },
    sizeText: {
        fontSize: 16,
    },
    selectedButton: {
        backgroundColor: '#DB3022',
    },
    squrecontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textContainer: {
        flex: 1,
        width: 375,
        height: 42,
        backgroundColor: '#F9F9F9',
        left: 10,
        marginTop: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    categorycontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    categorysizeButton: {
        width: 100,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#9B9B9B',
        borderWidth: 1,
        alignContent: 'space-around'

    },

    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    categorySizeButton: {
        width: 70,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#9B9B9B',
        borderWidth: 1,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    colorCircle: {
        width: 40,
        height: 40,
        borderRadius: 18,
        backgroundColor: '#DB3022',
        borderWidth: 2,

    },

})

