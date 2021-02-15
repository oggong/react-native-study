/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {RNCamera} from 'react-native-camera';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <Text>test</Text>
//       </SafeAreaView>
//     </>
//   );
// };

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <RNCamera
          style={styles.testCamera}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  testCamera: {
    width: 200,
    height: 200,
  },
});

export default App;
