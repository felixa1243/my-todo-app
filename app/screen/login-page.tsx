import { Button, Icon, IconProps, Input, Layout } from "@ui-kitten/components";
import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";

export const LoginPage: React.FC<any> = () => {
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
            <Input placeholder="username" style={{ marginTop: 5, marginBottom: 5 }} onChangeText={text => {
                setUserName(text)
            }} />
            <Input placeholder="password" style={{ marginTop: 5, marginBottom: 5 }} accessoryRight={renderIcon} secureTextEntry={secureTextEntry} onChangeText={text => {
                setPassword(text)
            }} />
            <Button style={{ width: '100%', marginTop: 15 }} onPress={() => {
                if (userName == 'Admin' && password == 'admin') {
                    console.log('login success');
                }
            }} >Login</Button>
        </Layout>
    );
}