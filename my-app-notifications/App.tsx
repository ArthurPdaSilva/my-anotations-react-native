import * as Notifications from 'expo-notifications';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function App() {
  const sendNotification = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    
    if (status !== 'granted') {
      alert('Permissão para notificações não concedida!');
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Preço Atualizado!",
        body: "O item foi atualizado com sucesso no estoque.",
        data: { itemId: '123' },
      },
      trigger: null, // O null diz ao Expo para disparar agora mesmo
    });
  }

  const scheduleNotification = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    
    if (status !== 'granted') {
      alert('Permissão para notificações não concedida!');
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Lembrete de Estoque",
        body: "Verifique o estoque do item em 1 hora.",
        data: { itemId: '123' },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 3600, // 3600 segundos = 1 hora
      }, // Dispara após 1 hora
    });
  }

  const listNotifications = async () => {
    const notifications = await Notifications.getAllScheduledNotificationsAsync();
    alert(`Notificações Agendadas: ${notifications.length}`);
  }

  const cancelNotifications = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    alert('Todas as notificações agendadas foram canceladas!');
  }

  return (
    <View style={styles.container}>
      <Text>Notificações APP</Text>
      <Button title="Enviar Notificação" onPress={sendNotification} />
      <Button title="Agendar Notificação" onPress={scheduleNotification} />
      <Button title="Listar Notificações" onPress={listNotifications} />
      <Button title="Cancelar Notificação" onPress={cancelNotifications} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
