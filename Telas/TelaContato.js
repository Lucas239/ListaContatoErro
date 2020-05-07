import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, View, TextInput, TouchableOpacity, Text} from 'react-native';
import ContatoInput from '../components/ContatoInput';

export default function TelaContato(props) {
    const[id, setId]= useState(10);
    const[contadorContatos, setContadorContatos] = useState(0);
    
    const adicionarContato=(nome, numero)=>{
        contato=(id, nome, numero);
    
        setContatos((contatos)=>{
          console.log(contatos);
          setId(id+2);
          setContadorContatos(contadorContatos+1);
          return[{key:contadorContatos.toString(),value:contato=(id),
          value2:contato=(nome),value3:contato=(numero)}, ...contatos];
        });
      };

	return (
		<View style={estilos.tela}>
      <Text style={estilos.titulo}>Adicionar Contatos</Text>
      <ContatoInput onAdicionarContato={adicionarContato} onPress = {() => {props.navigation.navigate('TelaComeco')}} />
        </View>

       

	);
 
}





