import { useLocalSearchParams } from "expo-router"
import { View, StyleSheet, FlatList } from "react-native"
import { useGetPostDetails } from "../../modules/api/useGetPostDetails"
import { Loading, PostCard, ScreenError } from "../../components"
import { Comment } from "../../components/Comment"

const postDetails = () => {
    const { id } = useLocalSearchParams()
    const { loading, data, error, refetch } = useGetPostDetails(Number(id))
    const renderPostDetails = () => {
        if (!data?.post)
            return <></>

        return <>
            <PostCard post={data?.post} />
            <FlatList
                data={data.post.comments.nodes}
                renderItem={({ item }) => <Comment commentDetails={item} />}

            />
        </>
    }
    const renderContent = () => {
        if (loading)
            return <Loading />
        if (error)
            return <ScreenError onRefetch={refetch} />
        return renderPostDetails()
    }
    return <View style={styles.container}>
        {renderContent()}
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default postDetails