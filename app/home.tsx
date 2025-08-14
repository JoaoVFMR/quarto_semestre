import { Text } from "react-native-paper"
import { View } from "react-native"
import { useAuth } from "../context/Auth"
import { styles } from "../styles/basic"

export default function Home() {
    const {user} = useAuth()

    return(
        <View style={styles.container}>
            <Text>Bem-vindo, {user.email}</Text>
        </View>
    )
}