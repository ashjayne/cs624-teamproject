//Adding user login screen
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import uuidV4 from 'uuid/v4';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    if (this.state.username === '' || this.state.password === '') {
      alert('Please enter login information below.');
    }

    const username = {
      username: this.state.username,
      password: this.state.password,
      id: uuidV4(),
      locations: []
    };

    this.props.route.params.Login(username);

    this.setState(
      {
        username: '',
        password: ''
      },
      () => {
        this.props.navigation.navigate('Username');
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Username</Text>
        <TextInput
          placeholder='Username'
          onChangeText={(val) => this.onChangeText('username', val)} // Updated key to 'username'
          style={styles.input}
          value={this.state.username}
        />
        <TextInput
          placeholder='Password'
          onChangeText={(val) => this.onChangeText('password', val)}
          style={styles.input}
          value={this.state.password}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1, // Added border width
    borderColor: 'white' // Added border color
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: '#006400', // Updated to dark green color
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50
  }
});

export default Login;
