import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList, 
    TouchableOpacity,
     ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Post from '../components/Post';

const data = {
    posts: [
        {
            "id": 1,
            "title": 'Hello World',
            "link": "https://google.com",
            "imageUrl": "https://picsum.photos/600/900"
        },
        {
            "id": 2,
            "title": 'Yerrrr',
            "link": "https://google.com",
            "imageUrl": "https://picsum.photos/600/900"
        }
    ]
}

export default function Posts(props) {
    const { navigation } = props;
    const { posts } = data;
    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(item, index) => {
                    return `${index}`;
                }}
                renderItem={(post, index) => {
                    const { item } = post;
                    return (
                        <Post post={item} onPress={() => navigation.navigate('Detail', { post: { item }})}/>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-around'
    },
  });