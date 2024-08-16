import { TouchableOpacity, Text } from "react-native"
type ScreenErrorProps = {
    onRefetch: () => {}
}
export const ScreenError = ({ onRefetch }: ScreenErrorProps) => {
    return <>
        <Text>Something went wrong, Please try again </Text>
        <TouchableOpacity onPress={() => onRefetch()}>
            <Text>Try Again </Text>
        </TouchableOpacity>

    </>
}