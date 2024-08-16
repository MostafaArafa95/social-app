import { View, StyleSheet, Text } from "react-native"
import { Post } from "../types"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import EvilIcons from '@expo/vector-icons/EvilIcons';
type PostCardProps = {
    post: Post
}
export const PostCard = ({ post }: PostCardProps) => {
    const renderUserSection = () => {
        return <View style={styles.userSectionContainer}>
            <FontAwesome5 name="user-circle" size={24} color="green" />
            <Text style={styles.usernameText}>{post.user.name}</Text>
        </View>
    }
    const renderCommentSection = () => {
        return <View style={styles.commentSectionContainer}>
            <EvilIcons name="comment" size={24} color="black" />
            <Text style={styles.commentsCount}>{post.comments.totalCount}</Text>
        </View>
    }
    return <View style={styles.container}>
        {renderUserSection()}


        <Text style={styles.titleText}>{post.title}</Text>
        <Text style={styles.bodyText}>{post.body}</Text>
        {renderCommentSection()}


    </View>
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(255,255,255)",

        paddingVertical: 10,
        paddingHorizontal: 20,

        marginBottom: 1,
        justifyContent: "center"
    },
    titleText: {
        fontSize: 14,
        fontWeight: "bold",
        flex: 1

    },
    bodyText: {
        fontSize: 12,
    },
    usernameText: {
        fontSize: 10,
        marginStart: 6,
        textAlignVertical: "center"
    },
    userSectionContainer: {
        flexDirection: "row",
        marginBottom: 6
    },
    commentSectionContainer: {
        flexDirection: "row",

        paddingVertical: 12
    },
    commentsCount: {
        fontSize: 10,
        textAlign: "center",
        textAlignVertical: "center"
    }

})
