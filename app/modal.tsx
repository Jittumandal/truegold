import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import {
  defaultModalScreenContent,
  getModalScreenContent,
  type ModalScreenContent,
} from '@/services/api/content';

export default function ModalScreen() {
  const [content, setContent] = useState<ModalScreenContent>(defaultModalScreenContent);

  useEffect(() => {
    let isActive = true;

    const loadContent = async () => {
      try {
        const response = await getModalScreenContent();

        if (isActive) {
          setContent(response);
        }
      } catch {
        // Keep the existing content rendered when the API call fails.
      }
    };

    void loadContent();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">{content.title}</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">{content.dismissLabel}</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
