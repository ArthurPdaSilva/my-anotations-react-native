import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StackParamList } from '../routes';
// import { Aluno } from './src/components/aluno'

const Aluno = ({ nome, idade }: AlunoProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate("Detail", { name: nome, age: Number(idade) })}
    style={{ backgroundColor: "#DDD", padding: 8, borderRadius: 8, marginBottom: 8 }}>
      <Text style={{ color: "#000", fontSize: 16 }}>{nome}</Text>
      <Text style={{ color: "#000", fontSize: 14 }}>{idade} anos</Text>
    </TouchableOpacity>
  )
}

interface AlunoProps {
  nome: string;
  idade: string | number;
}

export const Home = () => {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [showInput, setShowInput] = useState(false)

  const [alunos, setAlunos] = useState<AlunoProps[]>([
    {
      nome: 'Lucas',
      idade: 19
    },
    {
      nome: 'Joao',
      idade: 23
    }
  ])


  function handleAdd() {
    if (!nome || !idade) {
      return;
    }

    let aluno = {
      nome: nome,
      idade: idade,
    }

    setAlunos(values => [...values, aluno])
    setNome("")
    setIdade("")
    setShowInput(false);

  }


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", }}>
        <Text style={styles.title}>Projeto React Native</Text>
        <Pressable onPress={() => setShowInput(!showInput)}>
          <Text style={styles.title}>
            {showInput ? "x" : "+"}
          </Text>
        </Pressable>
      </View>

      {showInput && (
        <View style={styles.areaInput}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome..."
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua idade..."
            value={idade}
            onChangeText={(text) => setIdade(text)}
          />

          <Pressable style={styles.button} onPress={handleAdd}>
            <Text style={{ color: "#FFF", textAlign: "center" }}>Cadastrar</Text>
          </Pressable>
        </View>
      )}

      <FlatList
        style={{ flex: 1, paddingLeft: 14, paddingRight: 14, }}
        data={alunos}
        renderItem={({ item }) => <Aluno nome={item.nome} idade={item.idade} />}
      />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 36,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 28,
    paddingLeft: 14,
  },
  areaInput: {
    paddingLeft: 14,
    paddingRight: 14,
    marginBottom: 14,
    gap: 8,
  },
  input: {
    backgroundColor: "#DDD",
    color: "#000",
    padding: 8,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#0f291e",
    padding: 8,
    borderRadius: 8,
  }
})