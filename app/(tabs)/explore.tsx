import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import {
  defaultExploreScreenContent,
  getExploreScreenContent,
  type ExploreScreenContent,
} from '@/services/api/content';

export default function TabTwoScreen() {
  const [content, setContent] = useState<ExploreScreenContent>(defaultExploreScreenContent);

  useEffect(() => {
    let isActive = true;

    const loadContent = async () => {
      try {
        const response = await getExploreScreenContent();

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
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          {content.title}
        </ThemedText>
      </ThemedView>
      <ThemedText>{content.intro}</ThemedText>
      <Collapsible title={content.fileBasedRouting.title}>
        <ThemedText>
          {content.fileBasedRouting.firstParagraphPrefix}{' '}
          <ThemedText type="defaultSemiBold">{content.fileBasedRouting.homeScreenPath}</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">{content.fileBasedRouting.exploreScreenPath}</ThemedText>
        </ThemedText>
        <ThemedText>
          {content.fileBasedRouting.secondParagraphPrefix}{' '}
          <ThemedText type="defaultSemiBold">{content.fileBasedRouting.layoutPath}</ThemedText>{' '}
          {content.fileBasedRouting.secondParagraphSuffix}
        </ThemedText>
        <ExternalLink href={content.fileBasedRouting.linkHref}>
          <ThemedText type="link">{content.fileBasedRouting.linkLabel}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={content.multiPlatformSupport.title}>
        <ThemedText>
          {content.multiPlatformSupport.paragraphPrefix}{' '}
          <ThemedText type="defaultSemiBold">{content.multiPlatformSupport.shortcut}</ThemedText>{' '}
          {content.multiPlatformSupport.paragraphSuffix}
        </ThemedText>
      </Collapsible>
      <Collapsible title={content.images.title}>
        <ThemedText>
          {content.images.paragraphPrefix}{' '}
          <ThemedText type="defaultSemiBold">{content.images.densityTwoLabel}</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">{content.images.densityThreeLabel}</ThemedText>{' '}
          {content.images.paragraphSuffix}
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href={content.images.linkHref}>
          <ThemedText type="link">{content.images.linkLabel}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={content.themes.title}>
        <ThemedText>
          {content.themes.paragraphPrefix}{' '}
          <ThemedText type="defaultSemiBold">{content.themes.hookName}</ThemedText>{' '}
          {content.themes.paragraphSuffix}
        </ThemedText>
        <ExternalLink href={content.themes.linkHref}>
          <ThemedText type="link">{content.themes.linkLabel}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={content.animations.title}>
        <ThemedText>
          {content.animations.paragraphPrefix}{' '}
          <ThemedText type="defaultSemiBold">{content.animations.componentPath}</ThemedText>{' '}
          {content.animations.paragraphMiddle}{' '}
          <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
            {content.animations.libraryName}
          </ThemedText>{' '}
          {content.animations.paragraphSuffix}
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              {content.animations.iosParagraphPrefix}{' '}
              <ThemedText type="defaultSemiBold">{content.animations.iosComponentPath}</ThemedText>{' '}
              {content.animations.iosParagraphSuffix}
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
