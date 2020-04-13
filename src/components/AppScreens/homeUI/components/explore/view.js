import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Category from './category';

export default () => {
  return (
    <ScrollView
      scrollEventThrottle={16}
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.innerContainer}>
        <View style={styles.exploreHeaders}>
          <Text style={styles.headerLeftTxt}>Explore trends</Text>
          <TouchableOpacity style={styles.headerRightView}>
            <Text style={styles.headerRightText}>more ></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outerCategoryContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category
              imgUri={require('./../../../../../../assets/img/music.png')}
              title={'Books'}
            />
            <Category
              imgUri={require('./../../../../../../assets/img/music.png')}
              title={'Music'}
            />
            <Category
              imgUri={require('./../../../../../../assets/img/music.png')}
              title={'Sports'}
            />
            <Category
              imgUri={require('./../../../../../../assets/img/music.png')}
              title={'Movies'}
            />
            <Category
              imgUri={require('./../../../../../../assets/img/music.png')}
              title={'Tech'}
            />
            <Category
              imgUri={require('./../../../../../../assets/img/music.png')}
              title={'Politics'}
            />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  innerContainer: {
    flex: 1,
  },
  exploreHeaders: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeftTxt: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  headerRightView: {
    justifyContent: 'center',
    marginRight: 13,
  },
  headerRightText: {
    textDecorationLine: 'underline',
  },
  outerCategoryContainer: {
    height: 130,
    marginTop: 18,
  },
});
