import { useMemo } from "react"
import { View, StyleSheet } from "react-native"
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context"
import AppLogo from "./AppLogo";

export const Header = () => {
    const insets = useSafeAreaInsets()
    const styles = useMemo(() => createStyle(insets), [insets])
    return <View style={styles.headerContainer}>
        <AppLogo height={30} width={30} />
    </View>
}
const createStyle = (insets: EdgeInsets) => {
    const HEADER_PADDING_HORIZONTAL = 12;
    return StyleSheet.create({
        headerContainer: {
            justifyContent: "center",
            alignItems: "center",
            paddingTop: insets.top + HEADER_PADDING_HORIZONTAL,
            paddingBottom: HEADER_PADDING_HORIZONTAL,
            backgroundColor: "rgb(255,255,255)",
        },
    })
}

