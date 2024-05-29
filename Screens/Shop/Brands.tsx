import React, { useState, useEffect, SetStateAction } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

interface Brand {
    name: string;
}

const Brands = () => {
    const [data, setData] = useState<Brand[]>([
        { name: 'adidas' },
        { name: 'adidas Originals' },
        { name: 'Blend' },
        { name: 'Boutique Moschino' },
        { name: 'Champion' },
        { name: 'Diesel' },
        { name: 'Jack & Jones' },
        { name: 'Naf Naf' },
        { name: 'Red Valentino' },
        { name: 's.Oliver' },
    ]);
    const [searchText, onChangeSearch] = useState<string>('');
    const [filteredData, setFilteredData] = useState<Brand[]>([]);

    useEffect(() => {
        const filtered = data.filter((item: Brand) => item.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(filtered);
    }, [searchText, data]);

    const Item = ({ name }: { name: string }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
        </View>
    );

    const renderItem = ({ item }: { item: Brand }) => <Item name={item.name} />;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    onChangeText={onChangeSearch}
                    placeholder="Search Brands"
                    placeholderTextColor="#999"
                />
            </View>
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item: Brand) => item.name}
                contentContainerStyle={{ flexGrow: 1 }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight || 0,
    },
    searchContainer: {
        padding: 10,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 16,
    },
    item: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 16,
        color: '#333',
    },
});

export default Brands;
