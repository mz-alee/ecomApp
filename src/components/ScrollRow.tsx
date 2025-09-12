import React from 'react'
import Items from './Items'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

interface Products {
    id: number;
    title: string;
    price: number;
}

interface ScrollRowProp {
    data?: Products[];
}

const ScrollRow: React.FC<ScrollRowProp> = ({ data }) => {

    return (
        <>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                {/* {data && data?.length && data?.map((item) => (
                    // <Items />
                    <Text style={{ color: "red" }} key={item.id} >
                        {item.title} - ${item.price}
                    </Text>
                ))} */}
            </ScrollView>
        </>
    )
}

export default ScrollRow
const styles = StyleSheet.create({
    scrollContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    }

});