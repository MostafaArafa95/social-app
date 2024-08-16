import { ActivityIndicator, StyleSheet, View } from "react-native"

export const Loading = () => {
    return <View style={styles.loadingContainer}>
        <ActivityIndicator size={60} />
    </View>
}
const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})