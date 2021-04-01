import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Tasks';

const data = [
  {
    id: 1,
    thumbnail: '',
    label: '🏋 Work out 30 minutes',
    isCompleted: false
  },
  {
    id: 2,
    thumbnail: '',
    label: '🏫 Ace the react native test',
    isCompleted: false
  },
  {
    id: 3,
    thumbnail: '',
    label: ' 🍸 Chill out',
    isCompleted: false
  },
]

{/* Todo today section */}
export default function App() {
  const [tasks, setTasks] = useState(data)
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    const t = {
      id: data.length + 1,
      thumbnail: '',
      label: newTaskt,
      isCompleted: false
    }

    data.push(t);
    setTasks(data)
  }

  return (
    <View style={styles.container}>

      {/* Todo today section */}
      <View style={styles.tasksSection}>
        <Text style={styles.titleStyle}> Todo today </Text>
        {
          tasks.map(t => {
            return(
              <Task key={t.id} initialParams={{t}}></Task>
            )
          })
        }
        <View>
          <TextInput value={newTask} style={styles.textInputStyle} placeholder='Add a task' onChangeText={(text) => {
            setNewTask(text);
          }}></TextInput>
          <TouchableOpacity onPress={addTask} style={styles.button}><Text style={{ textAlign: 'center', fontSize: 30 }}>+</Text></TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8C82FF",
  },
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  titleStyle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 50
  },
  textInputStyle: {
    backgroundColor: 'white',
    height: 45,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: 60,
    width: 240,
    alignContent: 'center',
    textAlign: 'center',
    position: 'absolute',
  },
  button: {
    backgroundColor: 'white',
    height: 40,
    borderRadius: 50,
    width: '10%',
  }
});