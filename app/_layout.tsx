import { Stack } from "expo-router";
import { ApolloProvider } from '@apollo/client';
import client from "../modules/api/client";

const RootLayout = () => {

    return <ApolloProvider client={client}>
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="postDetails/[id]" />
        </Stack>
    </ApolloProvider>
}
export default RootLayout;