import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  const [name, setName] = useState('Shaun');
  const [person, setPerson] = useState({ name: 'Lily', age: 20 });
  const [age, setAge] = useState('20');
  const [people, setPeople] = useState([
     {name: 'Mendes', id: '1'},
     {name: 'Eriksen', id: '2'},
     {name: 'De Jong', id: '3'},
    {name: 'Artera', id: '4' },
    {name: 'Pep', id: '5' },
    {name: 'Nunez', id: '6'},
  ]);

  const clickHandler = () => {
    //setName('Khang');
    setPerson({name: 'Luke', age: 14});
  }

  // const textInputHandler = (value) => {
  //   setName(value)
  // }

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id!=id)
    })
  }
  return (
    <View style={styles.container}>
     {/* <View style={styles.header}>
        <Text style={styles.boldText}>Hi there, I'm {person.name}, and I'm {person.age} years old</Text>
      </View> */}

      {/* <View style={styles.body}>
        <Text style={styles.boldText}>Hi, My name is {name}</Text>
        <View style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHandler}/>
        </View>
      </View> */}

      {/* <View style={styles.secondBody}>
        <Text>Enter your new name: </Text>
        <TextInput
          multiline
          style={styles.inputText}
          placeholder='e.g Khang'
          onChangeText={(value) => setName(value)}
        />
        <Text>name: {name}, age: {age}</Text>
      </View> */}

      {/* <View style={styles.secondBody}>
        <Text>Enter your new age: </Text>
        <TextInput
          keyboardAppearance='dark'
          keyboardType='numeric'
          style={styles.inputText}
          placeholder='e.g 99'
          onChangeText={(value) => setAge(value)}
        />
        <Text>name: {name}, age: {age}</Text>
      </View> */}

      {/* <ScrollView>
         {people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.people}</Text>
            </View>
          )
        )}
      </ScrollView> */}

      <FlatList
        data={people}
        numColumns={2}
        keyExtractor={(item)=> item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: 'red',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body:{
    backgroundColor: 'yellow',
    padding: 20
  },
  buttonContainer: {
    marginTop: 20
  },
  secondBody: {
    backgroundColor: 'orange',
    padding: 20
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  item: {
    marginTop: 24,
    marginHorizontal: 20,
    padding: 30,
    backgroundColor: 'gray',
    fontSize: 24,
    marginTop: 24
  }
});
