import { AppRouter } from "./routes";
import { IElementJSX } from "./interfaces";
import { ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";
import { client } from "./graphql";
import { AuthProvider } from "./context";

const AppState = ({ children }: IElementJSX) => {
    return (
        <ApolloProvider client={client}>
            <Toaster />
            <AuthProvider>
                {children}
            </AuthProvider>
        </ApolloProvider>
    );
};

function App() {
    return (
        <AppState>
            <AppRouter />
        </AppState>
    );
}

export default App;
