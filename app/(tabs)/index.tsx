import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import {
  defaultHomeScreenContent,
  getHomeScreenContent,
  type HomeScreenContent,
} from '@/services/api/content';

function getDeveloperToolsShortcut(content: HomeScreenContent) {
  if (Platform.OS === 'ios') {
    return content.developerToolsStep.developerToolsByPlatform.ios;
  }

  if (Platform.OS === 'android') {
    return content.developerToolsStep.developerToolsByPlatform.android;
  }

  return content.developerToolsStep.developerToolsByPlatform.web;
}

export default function HomeScreen() {
  const [content, setContent] = useState<HomeScreenContent>(defaultHomeScreenContent);

  useEffect(() => {
    let isActive = true;

    const loadContent = async () => {
      try {
        const response = await getHomeScreenContent();

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
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{content.title}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{content.developerToolsStep.title}</ThemedText>
        <ThemedText>
          {content.developerToolsStep.descriptionPrefix}{' '}
          <ThemedText type="defaultSemiBold">{content.developerToolsStep.editablePath}</ThemedText>{' '}
          {content.developerToolsStep.descriptionMiddle}{' '}
          <ThemedText type="defaultSemiBold">{getDeveloperToolsShortcut(content)}</ThemedText>{' '}
          {content.developerToolsStep.descriptionSuffix}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">{content.exploreStep.title}</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction
              title={content.exploreStep.menu.actionLabel}
              icon="cube"
              onPress={() => alert(content.exploreStep.menu.actionMessage)}
            />
            <Link.MenuAction
              title={content.exploreStep.menu.shareLabel}
              icon="square.and.arrow.up"
              onPress={() => alert(content.exploreStep.menu.shareMessage)}
            />
            <Link.Menu title={content.exploreStep.menu.moreLabel} icon="ellipsis">
              <Link.MenuAction
                title={content.exploreStep.menu.deleteLabel}
                icon="trash"
                destructive
                onPress={() => alert(content.exploreStep.menu.deleteMessage)}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>{content.exploreStep.description}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{content.resetProjectStep.title}</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">{content.resetProjectStep.command}</ThemedText> to get a
          fresh <ThemedText type="defaultSemiBold">{content.resetProjectStep.sourceDirectory}</ThemedText>{' '}
          directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">{content.resetProjectStep.sourceDirectory}</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">{content.resetProjectStep.destinationDirectory}</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
