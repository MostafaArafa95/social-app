import { useLocalSearchParams } from "expo-router"
import { View, Text } from "react-native"

const postDetails = () => {
    const { id } = useLocalSearchParams()
    return <View>
        <Text>
            {`postDetails id ${id}`}
        </Text>
    </View>
}
export default postDetails