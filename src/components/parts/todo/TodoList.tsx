import React from 'react';
import {Text, StyleProp, StyleSheet, ViewStyle, TouchableOpacity, View} from 'react-native';
// import {Button} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Todo} from 'services';

import {TodoItem} from './TodoItem';

interface Props {
  todos: Todo[];
  contentContainerStyle?: StyleProp<ViewStyle>;
  toggleTodoCompletion: (id: number) => void;
  removeTodo: (id: number) => void;
  processingTodos: number[];
}

export const TodoList: React.FC<Props> = ({
  todos,
  contentContainerStyle,
  toggleTodoCompletion,
  removeTodo,
  processingTodos,
}) => {
  return (
    <SwipeListView
      style={styles.list}
      contentContainerStyle={contentContainerStyle}
      data={todos}
      renderItem={({item: todo}) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          toggleTodoCompletion={toggleTodoCompletion}
          processing={processingTodos.includes(todo.id)}
        />
      )}
      renderHiddenItem={({item: todo}) => (
        <View>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => {
              removeTodo(todo.id);
            }}>
            <Text style={styles.deleteText}>削除</Text>
          </TouchableOpacity>
        </View>
      )}
      rightOpenValue={-75}
      stopRightSwipe={-75}
      disableRightSwipe
      keyExtractor={todo => String(todo.id)}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  deleteButton: {
    alignSelf: 'flex-end',
    width: 75,
    height: 100,
    backgroundColor: '#CC3333',
  },
  deleteText: {
    lineHeight: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
