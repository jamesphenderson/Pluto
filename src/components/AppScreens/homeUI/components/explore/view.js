import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Category from './category';

export default () => {
  return (
    <ScrollView scrollEventThrottle={16} style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>Explore topics</Text>
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
  headerTxt: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  outerCategoryContainer: {
    height: 130,
    marginTop: 18,
  },
});
