import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import ContatoItem from '../components/ContatoItem';
import { Ionicons } from '@expo/vector-icons';
import Medidas from '../Medidas/Medidas'

const TelaComeco =(props)=>{
  const [contatos, setContatos] = useState ([]);
  

  const removerContato = (keyASerRemovida)=>{
    setContatos(contatos=>{
        return contatos.filter((contato)=>{
          contato.key !== keyASerRemovida
      });
    });
  };
  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Contatos Adicionados</Text>
      <FlatList
        data={contatos}
        renderItem={
        contato => (
        <ContatoItem id={contato.item.value} nome={contato.item.value2} numero={contato.item.value3} 
        onDelete={removerContato}/>
      )}/>
        <TouchableOpacity estilos={estilos.botao}>
            <Ionicons name="ios-add-circle" size={35} onPress={()=>props.navigation.navigate('TelaContato')} />
          </TouchableOpacity>
    </View>
  );
}
const estilos = StyleSheet.create({
    tela:{
        flex:Medidas.flexGeral,
        padding:Medidas.telaPadding,
        alignItems:Medidas.alignGeral
    },
    titulo:{
        fontSize:Medidas.tituloFont,
        marginVertical:Medidas.tituloMargin
    }
});

export default TelaComeco;