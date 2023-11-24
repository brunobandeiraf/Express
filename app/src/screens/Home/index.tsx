import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';

import { api } from '../../services/api';

export default function Home(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleCreateUser = async () => {
        
        try {
          // Substitua a URL abaixo pela sua rota de criação de usuário
          const response = await api.post('/users/create', {
            name,
            email,
          });
          alert('Cadastro realizado com sucesso')
          // Exemplo de como lidar com a resposta da API
          if (response.data.success) {
            alert('Cadastro realizado com sucesso')
            //Alert.alert('Cadastro realizado com sucesso!');
          } else {
            alert('Erro no cadastro. Tente novamente.');
            console.log(response)
          }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário. Tente novamente.');
        }
      };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Usuário</Text>

            <Text>Nome:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={ setName }
                placeholder="Digite seu nome"
            />

            <Text>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={ setEmail }
                placeholder="Digite seu email"
                keyboardType="email-address"
            />
            

            <TouchableOpacity style={styles.btn} onPress={handleCreateUser}>
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}