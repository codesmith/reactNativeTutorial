import {useNavigation} from '@react-navigation/native';
import {KeyboardView} from 'components/basics';
import {useUserContext} from 'contexts/UserContext';
import {useFormik} from 'formik';
import React, {useCallback} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import * as Yup from 'yup';

export const SignUp: React.FC = () => {
  const userContext = useUserContext();

  const navigation = useNavigation();
  const signup = useCallback(
    (values: {name: string; password: string}) => {
      userContext.signup(values.name, values.password).then(
        () => {
          Alert.alert('ユーザー登録完了', 'ユーザー登録が完了しました。\nログイン画面からログインしてください。', [
            {
              text: 'Loin',
              style: 'destructive',
              onPress: () => navigation.navigate('Login'),
            },
          ]);
        },
        () => {},
      );
    },
    [userContext],
  );

  const formik = useFormik({
    initialValues: {name: '', password: ''},
    validationSchema: Yup.object().shape({
      name: Yup.string().required('名前を入力してください'),
      password: Yup.string()
        .required('パスワードを入力してください')
        .min(4, 'パスワードには4文字以上の文字列を指定してください'),
    }),
    validateOnChange: false,
    onSubmit: signup,
  });

  return (
    <KeyboardView>
      <View style={styles.form}>
        <Input
          label="名前"
          containerStyle={styles.input}
          autoCapitalize="none"
          errorMessage={formik.errors.name}
          onChangeText={formik.handleChange('name')}
          value={formik.values.name}
        />
        <Input
          label="パスワード"
          containerStyle={styles.input}
          errorMessage={formik.errors.password}
          secureTextEntry
          onChangeText={formik.handleChange('password')}
          value={formik.values.password}
        />
        <Button
          disabled={formik.isSubmitting}
          onPress={() => formik.handleSubmit()}
          title="登録する"
          buttonStyle={styles.button}
        />
      </View>
    </KeyboardView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {marginTop: 20, width: '80%'},
  button: {
    marginTop: 30,
  },
});
