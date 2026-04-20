import { SafeAreaView, StyleSheet } from 'react-native';
import { AppNavigator } from './src/navigation';
import { Colors } from './src/theme';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AppNavigator />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});

export default App;
