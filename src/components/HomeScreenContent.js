import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'
import { COLORS } from './styles';
import { useNavigation } from '@react-navigation/native';

// items to be rendered on home screen
const features = [
    {
        id: '1',
        image: require('../images/TextToSpeech.png'),
        title: 'Text to Speech',
        screenName: 'TextToSpeechScreen'
    },
    {
        id: '2',
        image: require('../images/SpeechToText.png'),
        title: 'Speech to Text',
        screenName: 'SpeechToTextScreen'
    },
    {
        id: '3',
        image: require('../images/VideoConference.png'),
        title: 'Calls',
        screenName: 'CallsScreen'
    },
    {
        id: '4',
        image: require('../images/Chat.png'),
        title: 'Chat',
        screenName: 'ChatScreen'
    },
    {
        id: '5',
        image: require('../images/SignLanguageTranscription.png'),
        title: 'Sign Language Transcription',
        screenName: 'SignLanguageTranscriptionScreen'
    },
    {
        id: '6',
        image: require('../images/MeetWithTranslator.png'),
        title: 'Meet with Translator',
        screenName: 'MeetWithTranslatorScreen'
    },
    {
        id: '7',
        image: require('../images/BasicSignLanguage.png'),
        title: 'Basic Sign Language',
        screenName: 'BasicSignLanguageScreen'
    },
    {
        id: '8',
        image: require('../images/Community.png'),
        title: 'Community',
        screenName: 'CommunityScreen'
    },
]

const HomeScreenContent = React.memo(() => {
    const navigation = useNavigation();

    // function to handle press of any home screen item 
    const handleItemPress = (screenName) => {
        navigation.navigate(screenName)
    }


    // function to render each of the items
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.flatListContainer}
            onPress={() => handleItemPress(item.screenName)}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={styles.iconImage}>
                    <Image source={item.image} />
                </View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, top: -90 }}>
            <FlatList
                data={features}
                horizontal={false}
                numColumns={3}
                contentContainerStyle={styles.flatListContent}
                keyExtractor={(item) => item.title}
                renderItem={renderItem}
            />
        </View>
    )
})

const styles = StyleSheet.create({
    flatListContainer: {
        width: 110,
        height: 115,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        borderColor: COLORS.primary,
        marginBottom: 20,
        marginHorizontal: 10,
        elevation: 5,
        shadowColor: COLORS.grey,
        shadowOffset: { width: 5, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
    },

    flatListContent: {
        flexGrow: 1,
    },

    iconImage: {
        borderWidth: 1,
        backgroundColor: COLORS.white,
        borderColor: COLORS.white,
        width: 40,
        height: 40,
        borderRadius: 100,
        marginHorizontal: 10,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: COLORS.grey,
        shadowOffset: { width: 5, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
    },

    title: {
        color: COLORS.primary,
        fontSize: 17,
        fontWeight: '600',
        flexWrap: 'nowrap',
        alignSelf: 'center',
        textAlign: 'center',
    }
})

export { features, HomeScreenContent }