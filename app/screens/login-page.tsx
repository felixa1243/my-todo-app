import { Button, Icon, IconProps, Input, Layout, Text } from "@ui-kitten/components";
import { useState } from "react";
import { ToastAndroid, TouchableWithoutFeedback } from "react-native";
import { LoginPromise } from "../utils/loginPromise";
import { useNavigation } from "@react-navigation/native";

export const LoginPage: React.FC<any> = () => {
    const navigation = useNavigation();
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const toggleSecureEntry = (): void => {
        setSecureTextEntry(!secureTextEntry);
    };
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const renderIcon = (props: IconProps): React.ReactElement => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon
                {...props}
                name={secureTextEntry ? 'eye-off' : 'eye'}
            />
        </TouchableWithoutFeedback>
    );
    return (
        <Layout style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50
        }}>
            <Text category="h1" style={{ marginBottom: 50 }}>
                Todo App
            </Text>
            <Input placeholder="username" style={{ marginTop: 5, marginBottom: 5 }} onChangeText={text => {
                setUserName(text)
            }} />
            <Input placeholder="password" style={{ marginTop: 5, marginBottom: 5 }} accessoryRight={renderIcon} secureTextEntry={secureTextEntry} onChangeText={text => {
                setPassword(text)
            }} />
            <Button style={{ width: '100%', marginTop: 15 }} onPress={async () => {
                try {
                    const res = await LoginPromise(userName, password);
                    navigation.navigate('dashboard')

                } catch (error) {
                    ToastAndroid.show(error.message, ToastAndroid.SHORT)
                }
            }} >Login</Button>
        </Layout>
    );
}