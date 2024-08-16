import { Stack } from "expo-router";
import { ApolloProvider } from '@apollo/client';
import client from "../modules/api/client";
import { Header } from "../components";

const RootLayout = () => {

    return <ApolloProvider client={client}>
        <Stack screenOptions={{
            header: () => <Header />,

        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="postDetails/[id]" />
        </Stack>
    </ApolloProvider>
}
export default RootLayout;