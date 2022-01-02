//import { Storage } from 'expo-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Storages {
    static instance = new Storages();

    store = async (key, value) => {
        try {

            await AsyncStorage.setItem(key, value);
            return true;

        } catch (err) {
            console.log('este es el error storage', err);
            return false
        }
    }

    get = async (key) => {
        try {
            return await AsyncStorage.getItem(key)

        } catch (err) {
            console.log('este es el error get storage', err);
            throw Error(err)
        }
    }

    multiGet = async (keys) => {
        try {

            return await AsyncStorage.multiGet(keys)

        } catch (err) {
            console.log('Error multiGet storage', err);
            throw Error(err)
        }
    }

    getAllKeys = async () => {
        try {
            return await AsyncStorage.getAllKeys();

        } catch (err) {
            console.log('este es el error getAllKeys storage', err);
            throw Error(err)
        }
    }

    remove = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            return true;

        } catch (err) {
            console.log('error en el remove storage', err);
            return false
        }


    }

}

export default Storages;