import AppState from './src/AppState/AppState';
import registerNNPushToken from 'native-notify';

export default function App() {
  registerNNPushToken(3397, 'YaERUO6kuQ3dQQ5toxMkLu');
  return <AppState />
}

