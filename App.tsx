import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App: React.FC = () => {
  const [favoriteAnimal, setFavoriteAnimal] = useState('');
  const [suggestedName, setSuggestedName] = useState('');
  const [message, setMessage] = useState('');

  const suggestPetName = () => {
    switch (favoriteAnimal.toLowerCase()) {
      case 'dog':
        setSuggestedName('Beethoven');
        setMessage('');
        break;
      case 'cat':
        setSuggestedName('Whiskers');
        setMessage('');
        break;
      case 'fish':
        setSuggestedName('Nemo');
        setMessage('');
        break;
        case 'mouse':
          setSuggestedName('Remy');
          setMessage('');
          break;
          case 'bunny':
            setSuggestedName('Willow');
            setMessage('');
            break;
            case 'bird':
              setSuggestedName('Robin');
              setMessage('');
              break;
      default:
        setSuggestedName('');
        setMessage('That animal would not make a very good pet.');
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pet Name Suggestion</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your pet"
        value={favoriteAnimal}
        onChangeText={(text) => setFavoriteAnimal(text)}
      />
      <Button title="Suggest Pet Name" onPress={suggestPetName} />
      {suggestedName !== '' && <Text style={styles.result}>Suggested Pet Name: {suggestedName}</Text>}
      {message !== '' && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  result: {
    fontSize: 18,
    marginTop: 16,
  },
  message: {
    fontSize: 16,
    color: 'red',
    marginTop: 16,
  },
});

export default App;