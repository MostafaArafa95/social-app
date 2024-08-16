import { Link, router } from "expo-router"
import { View, Text, Pressable } from "react-native"
import { useGetPosts } from "../modules/api/useGetPosts"
//TODO: delete use Did mount

const HomePage = () => {

    const { loading, error, data } = useGetPosts()
    console.log({ loading, error, data })

    return <View>
        <Text>Home Screen</Text>
        <Link href={"/postDetails/1"}>Go to user one</Link>
        <Pressable onPress={() => {
            router.push("/postDetails/2")
        }}>
            <Text>

                Go to user 2
            </Text>
        </Pressable>
    </View>
}

export default HomePage