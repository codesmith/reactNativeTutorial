import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button} from 'react-native-elements';

import {useUserContext} from '../../contexts/UserContext';

export const Login: React.FC = () => {
  const userContext = useUserContext();

  const onLogin = useCallback(() => {
    // 後で例外処理を追加するので、今はlintのエラーは無視してください。
    userContext.login('user', 'password');
  }, [userContext]);
  return (
    <View style={styles.container}>
      <Text h1>ログイン</Text>
      <Button onPress={onLogin} title="ログイン" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
