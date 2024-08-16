//TODO: delete boilerplate files
import { router } from "expo-router"
import {
    useSafeAreaInsets,
    EdgeInsets,
} from 'react-native-safe-area-context';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList } from "react-native"
import { useGetPosts } from "../modules/api/useGetPosts"
import { useCallback, useMemo } from "react";
import { PostCard } from "../components";


const HomePage = () => {
    const { loading, data, refetch, error } = useGetPosts()
    const insets = useSafeAreaInsets()
    const styles = useMemo(() => createStyle(insets), [insets])
    console.log({ data })
    const onPressCard = useCallback((postId: number) => {
        router.push(`/postDetails/${postId}`)
    }, [])
    const renderHeader = () => {
        return <View style={styles.headerContainer}>
            {/**TODO:  */}
            <Text>App logo here</Text>

        </View>
    }
    const renderLoading = () => {
        return <View style={styles.loadingContainer}>
            <ActivityIndicator size={60} />
        </View>
    }
    const renderError = () => {
        return <>
            <Text>Something went wrong, Please try again </Text>
            {/**TODO: make button seperate component */}
            <TouchableOpacity onPress={() => refetch()}>
                <Text>Try Again </Text>
            </TouchableOpacity>

        </>
    }
    const renderPostsList = () => {
        if (!data)
            return <></>
        console.log(data.posts.nodes)
        return <FlatList
            data={data.posts.nodes}
            renderItem={({ item }) => {

                return <PostCard post={item} onPress={onPressCard} />
            }}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContentContainerStyle}

        />
    }
    const renderContent = () => {
        if (loading)
            return renderLoading()
        if (error)
            return renderError()
        return renderPostsList()

    }
    return <View style={styles.pageContainer}>
        {renderHeader()}
        <View style={styles.pageContentContainer}>
            {renderContent()}
        </View>
    </View>
}
const createStyle = (insets: EdgeInsets) => {
    const HEADER_PADDING_HORIZONTAL = 12;
    return StyleSheet.create({
        pageContainer: {
            flex: 1,
            backgroundColor: "rgb(233,234,236)"
        },
        headerContainer: {
            justifyContent: "center",
            alignItems: "center",
            paddingTop: insets.top + HEADER_PADDING_HORIZONTAL,
            paddingBottom: HEADER_PADDING_HORIZONTAL,
            backgroundColor: "rgb(255,255,255)",
        },
        pageContentContainer: {
            flex: 1
        },
        loadingContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        flatListContentContainerStyle: {
        }
    })
}


export default HomePage