import { router } from "expo-router"
import { View, StyleSheet, FlatList } from "react-native"
import { useGetPosts } from "../modules/api/useGetPosts"
import { useCallback } from "react";
import { PostCard, Loading, ScreenError } from "../components";

const HomePage = () => {
    const { loading, data, refetch, error } = useGetPosts()
    const onPressCard = useCallback((postId: number) => {
        router.push(`/postDetails/${postId}`)
    }, [])

    const renderPostsList = () => {
        if (!data)
            return <></>
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
            return <Loading />

        if (error)
            return <ScreenError onRefetch={refetch} />

        return renderPostsList()

    }
    return <View style={styles.pageContainer}>
        <View style={styles.pageContentContainer}>
            {renderContent()}
        </View>
    </View>
}
const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: "rgb(233,234,236)",
        paddingTop: 1,
    },
    pageContentContainer: {
        flex: 1
    },

    flatListContentContainerStyle: {
    }
})



export default HomePage