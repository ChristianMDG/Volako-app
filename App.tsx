import { StatusBar } from 'expo-status-bar';
import './global.css';
import DashboardScreen from './src/features/dashboard/DashboardScreen';

export default function App() {
  return (
    <>
    <DashboardScreen />
      <StatusBar style="auto" />
    </>
  );
}