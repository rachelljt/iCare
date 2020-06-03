import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, AppState, Platform, useState} from 'react-native';

const Notif = props => {
  const [state, setState] = React.useState(1);

  const componentDidMount = () => {
    AppState.addEventListener('change', handleAppStateChange);
  };

  const componentWillUnmount = () => {
    AppState.removeEventListener('change', handleAppStateChange);
  };

  const handleAppStateChange = (appState) => {
    if (appState === 'background') {
      console.log('app is in background', state);

      // if (Platform.OS === 'ios') {
      //   date = date.toISOString();
      // }

      // PushNotification.localNotificationSchedule({
      //   message: "My Notification Message",
      //   date,
      // });
    }
  }

    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Choose your notification time in hours.
          </Text>
          <Picker
            style={styles.picker}
            selectedValue={state}
            onValueChange={(hours) => setState(hours)}
          >
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
          </Picker>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    picker: {
      width: 100,
    },
  });

  export default Notif;
