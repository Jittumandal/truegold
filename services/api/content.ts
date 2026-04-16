import type { Href } from 'expo-router';

import { apiRequest } from '@/services/api/client';

type SupportedPlatform = 'ios' | 'android' | 'web';

export type HomeScreenContent = {
  title: string;
  developerToolsStep: {
    title: string;
    descriptionPrefix: string;
    editablePath: string;
    descriptionMiddle: string;
    developerToolsByPlatform: Record<SupportedPlatform, string>;
    descriptionSuffix: string;
  };
  exploreStep: {
    title: string;
    description: string;
    menu: {
      actionLabel: string;
      actionMessage: string;
      shareLabel: string;
      shareMessage: string;
      moreLabel: string;
      deleteLabel: string;
      deleteMessage: string;
    };
  };
  resetProjectStep: {
    title: string;
    command: string;
    sourceDirectory: string;
    destinationDirectory: string;
  };
};

export type ExploreScreenContent = {
  title: string;
  intro: string;
  fileBasedRouting: {
    title: string;
    firstParagraphPrefix: string;
    homeScreenPath: string;
    exploreScreenPath: string;
    secondParagraphPrefix: string;
    layoutPath: string;
    secondParagraphSuffix: string;
    linkLabel: string;
    linkHref: Href & string;
  };
  multiPlatformSupport: {
    title: string;
    paragraphPrefix: string;
    shortcut: string;
    paragraphSuffix: string;
  };
  images: {
    title: string;
    paragraphPrefix: string;
    densityTwoLabel: string;
    densityThreeLabel: string;
    paragraphSuffix: string;
    linkLabel: string;
    linkHref: Href & string;
  };
  themes: {
    title: string;
    paragraphPrefix: string;
    hookName: string;
    paragraphSuffix: string;
    linkLabel: string;
    linkHref: Href & string;
  };
  animations: {
    title: string;
    paragraphPrefix: string;
    componentPath: string;
    paragraphMiddle: string;
    libraryName: string;
    paragraphSuffix: string;
    iosParagraphPrefix: string;
    iosComponentPath: string;
    iosParagraphSuffix: string;
  };
};

export type ModalScreenContent = {
  title: string;
  dismissLabel: string;
};

export const defaultHomeScreenContent: HomeScreenContent = {
  title: 'Welcome!',
  developerToolsStep: {
    title: 'Step 1: Try it',
    descriptionPrefix: 'Edit',
    editablePath: 'app/(tabs)/index.tsx',
    descriptionMiddle: 'to see changes. Press',
    developerToolsByPlatform: {
      ios: 'cmd + d',
      android: 'cmd + m',
      web: 'F12',
    },
    descriptionSuffix: 'to open developer tools.',
  },
  exploreStep: {
    title: 'Step 2: Explore',
    description: "Tap the Explore tab to learn more about what's included in this starter app.",
    menu: {
      actionLabel: 'Action',
      actionMessage: 'Action pressed',
      shareLabel: 'Share',
      shareMessage: 'Share pressed',
      moreLabel: 'More',
      deleteLabel: 'Delete',
      deleteMessage: 'Delete pressed',
    },
  },
  resetProjectStep: {
    title: 'Step 3: Get a fresh start',
    command: 'npm run reset-project',
    sourceDirectory: 'app',
    destinationDirectory: 'app-example',
  },
};

export const defaultExploreScreenContent: ExploreScreenContent = {
  title: 'Explore',
  intro: 'This app includes example code to help you get started.',
  fileBasedRouting: {
    title: 'File-based routing',
    firstParagraphPrefix: 'This app has two screens:',
    homeScreenPath: 'app/(tabs)/index.tsx',
    exploreScreenPath: 'app/(tabs)/explore.tsx',
    secondParagraphPrefix: 'The layout file in',
    layoutPath: 'app/(tabs)/_layout.tsx',
    secondParagraphSuffix: 'sets up the tab navigator.',
    linkLabel: 'Learn more',
    linkHref: 'https://docs.expo.dev/router/introduction',
  },
  multiPlatformSupport: {
    title: 'Android, iOS, and web support',
    paragraphPrefix:
      'You can open this project on Android, iOS, and the web. To open the web version, press',
    shortcut: 'w',
    paragraphSuffix: 'in the terminal running this project.',
  },
  images: {
    title: 'Images',
    paragraphPrefix: 'For static images, you can use the',
    densityTwoLabel: '@2x',
    densityThreeLabel: '@3x',
    paragraphSuffix: 'suffixes to provide files for different screen densities',
    linkLabel: 'Learn more',
    linkHref: 'https://reactnative.dev/docs/images',
  },
  themes: {
    title: 'Light and dark mode components',
    paragraphPrefix: 'This template has light and dark mode support. The',
    hookName: 'useColorScheme()',
    paragraphSuffix:
      "hook lets you inspect what the user's current color scheme is, and so you can adjust UI colors accordingly.",
    linkLabel: 'Learn more',
    linkHref: 'https://docs.expo.dev/develop/user-interface/color-themes/',
  },
  animations: {
    title: 'Animations',
    paragraphPrefix: 'This template includes an example of an animated component. The',
    componentPath: 'components/HelloWave.tsx',
    paragraphMiddle: 'component uses the powerful',
    libraryName: 'react-native-reanimated',
    paragraphSuffix: 'library to create a waving hand animation.',
    iosParagraphPrefix: 'The',
    iosComponentPath: 'components/ParallaxScrollView.tsx',
    iosParagraphSuffix: 'component provides a parallax effect for the header image.',
  },
};

export const defaultModalScreenContent: ModalScreenContent = {
  title: 'This is a modal',
  dismissLabel: 'Go to home screen',
};

export function getHomeScreenContent() {
  return apiRequest<HomeScreenContent>({
    path: '/content/home',
    mockData: defaultHomeScreenContent,
  });
}

export function getExploreScreenContent() {
  return apiRequest<ExploreScreenContent>({
    path: '/content/explore',
    mockData: defaultExploreScreenContent,
  });
}

export function getModalScreenContent() {
  return apiRequest<ModalScreenContent>({
    path: '/content/modal',
    mockData: defaultModalScreenContent,
  });
}
