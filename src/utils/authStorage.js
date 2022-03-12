import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage

    const accesToken = await AsyncStorage.getItem(
      `${this.namespace}:rate-repository-token`
    );

    return accesToken ? accesToken : undefined;
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage

    await AsyncStorage.setItem(
      `${this.namespace}:rate-repository-token`,
      accessToken
    );
  }

  async removeAccessToken() {
    // Remove the access token from the storage

    await AsyncStorage.removeItem(
      `${this.namespace}:rate-repository-token`
    );
  }
}

export default AuthStorage;