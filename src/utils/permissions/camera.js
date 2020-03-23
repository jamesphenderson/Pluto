import {PermissionsAndroid} from 'react-native';

export const requestCameraPermissions = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Pluto',
        message: 'Pluto needs to access your camera so you can take pictures',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'Ok',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied'); //ask again maybe?
    }
  } catch (err) {
    console.warn(err);
  }
};
