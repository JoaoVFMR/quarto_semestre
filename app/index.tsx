import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useAuth } from "../context/Auth";
import { styles } from "../styles/basic";

export default function Login() {

    const { user, handleLogin, setUser } = useAuth()

    return (
        <View style={styles.container}>
            <TextInput onChangeText={text => setUser({...user, email: text})}
            label="E-mail" />
            <TextInput style={styles.mt20} 
            onChangeText={text => setUser({...user, password: text})}
            label="Senha" secureTextEntry={true} />
            <Button mode="contained" style={styles.mt20} onPress={handleLogin}>
                Entrar
            </Button>
        </View>
    )
}