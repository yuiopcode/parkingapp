import * as SecureStore from 'expo-secure-store';

const getRefreshToken = async () => {
    return SecureStore.getItemAsync('refreshToken');
}

const getAccessToken =  async () => {
    return SecureStore.getItemAsync('accessToken');
}

const setRefreshToken = (refreshToken: string) => {
    SecureStore.setItem('refreshToken', refreshToken);
}

const setAccessToken = (accessToken: string) => {

    SecureStore.setItem('accessToken', accessToken);
}

export {getAccessToken, getRefreshToken, setAccessToken, setRefreshToken}
