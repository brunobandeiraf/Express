import { View, Text } from "react-native";
import { styles } from "./styles";
import { useState, useEffect } from "react";

import { api } from '../../services/api';

export default function ListUser(){

    const [data, setData] = useState<string[]>([]);

    //  Buscar os grupos musculares
  async function fetchUsers() {
    try {

      const response = await api.get('/users/show');
      setData(response.data); // atualiza o useState

      console.log(data)
    } catch (error) {  
        alert("Erro ao buscar os usuários")
    }
  }

  //useEffect para ficar sempre atualizando o estado
  useEffect(() => {
    fetchUsers();
  },[])

    return(
        // <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Lista de Presença</Text>
                
                <Text style={styles.itemList} >
                    Camila Regina Pereira
                </Text>      
              
                {
                    data.map(item => (
                        <Text 
                            key={item}
                            style={styles.itemList}                            
                        >
                            { item.name }
                        </Text>
                    ))
                }
                
            </View>
        // </ScrollView>
    )
}