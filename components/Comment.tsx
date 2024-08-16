import { StyleSheet, View, Text } from "react-native"
import { Comment as CommentType } from "../types"
import { UsernameHeader } from "./UsernameHeader"

type CommentProps = {
    commentDetails: CommentType
}
export const Comment = (props: CommentProps) => {
    return <View style={styles.container}>
        <UsernameHeader userName={props.commentDetails.name} />
        <Text style={styles.bodyText}>{props.commentDetails.body}</Text>

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
    bodyText: {
        fontSize: 12,
    },
})