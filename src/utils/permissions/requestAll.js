import {PermissionsAndroid} from 'react-native';

// request every permission critical to this app
export const requestAllPermissions = () => {
  try {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]).then(result => {
      if (
        result['android.permission.ACCESS_COARSE_LOCATION'] &&
        result['android.permission.CAMERA'] &&
        result['android.permission.READ_CONTACTS'] &&
        result['android.permission.ACCESS_FINE_LOCATION'] &&
        result['android.permission.READ_EXTERNAL_STORAGE'] &&
        result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
      ) {
        console.log('All requested permissions were granted');
      } else if (
        result['android.permission.ACCESS_COARSE_LOCATION'] ||
        result['android.permission.CAMERA'] ||
        result['android.permission.READ_CONTACTS'] ||
        result['android.permission.ACCESS_FINE_LOCATION'] ||
        result['android.permission.READ_EXTERNAL_STORAGE'] ||
        result['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          'never_ask_again'
      ) {
        console.log(
          'Please go into Settings -> Applications -> Pluto -> Permissions and Allow permissions to continue',
        );
      }
    });
  } catch (err) {
    console.warn(err);
  }
};
