import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const participants = ['Caio', 'Rodrigo', 'Diego'];

  function handleParticipantAdd() {
    console.log('oi');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Removendo ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={'#6B6B6B'}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={{
          rowGap: 10,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(participant) => participant}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
}
