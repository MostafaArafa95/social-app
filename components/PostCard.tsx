import { View, StyleSheet, Text, TouchableHighlight } from "react-native"
import { Post } from "../types"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useCallback } from "react";
type PostCardProps = {
    post: Post,
    onPress: (id: number) => void
}
export const PostCard = ({ post, onPress }: PostCardProps) => {
    const _onPress = useCallback(() => {
        onPress(post.id)
    }, [onPress])
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
    return <TouchableHighlight onPress={_onPress}>
        <View style={styles.container}>
            {renderUserSection()}
            <Text style={styles.titleText}>{post.title}</Text>
            <View style={styles.bottomContainer}>
                <Text style={styles.bodyText}>{post.body}</Text>
                {renderCommentSection()}
            </View>
        </View>
    </TouchableHighlight>
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
        flex: 1
    },
    usernameText: {
        fontSize: 10,
        marginStart: 6,
        textAlignVertical: "center"
    },
    userSectionContainer: {
        flexDirection: "row",

    },
    commentSectionContainer: {
        flexDirection: "row",


    },
    commentsCount: {
        fontSize: 10,
        textAlign: "center",
        textAlignVertical: "center"
    },
    bottomContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 6 }

})
