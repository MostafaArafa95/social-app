import { View, StyleSheet, Text } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
type UsernameHeaderProps = {
    userName: string,
}
export const UsernameHeader = (props: UsernameHeaderProps) => {
    return <View style={styles.userSectionContainer}>
        <FontAwesome5 name="user-circle" size={24} color="green" />
        <Text style={styles.usernameText}>{props.userName}</Text>
    </View>

}
const styles = StyleSheet.create({
    userSectionContainer: {
        flexDirection: "row",
    },
    usernameText: {
        fontSize: 10,
        marginStart: 6,
        textAlignVertical: "center"
    },

})