// NOTE: Replace these placeholder images with your actual TrueGold assets
// Place your images in src/assets/images/ folder as:
//   slide1.png - Gold jewelry on purple stand
//   slide2.png - Jewelry circular illustration
//   slide3.png - Gold bars and jewelry display

export const onboardingSlides = [
  {
    id: '1',
    title: "India’s Most Trusted Digital Gold App",
    image: require('../assets/images/slide1.png'),
    badge1: [
      { text: "India's top refinery\n", color: '#000000' },
      { text: 'IDVL', color: '#FF9800' },
    ],
    badge2: [
      { text: '24K Hallmark Gold\n', color: '#000000' },
      { text: 'BIS', color: '#FF9800' },
    ],
  },
  {
    id: '2',
    title: 'Withdraw Gold Easily in Cash, Coins or Jewellery',
    image: require('../assets/images/slide2.png'),
    badge1: 'NABL & BIS CERTIFIED LAB',
  },
  {
    id: '3',
    title: 'Safe, Secure & 100% Guaranteed Gold',
    image: require('../assets/images/slide3.png'),
    badge1: 'Withdraw at your favourite jeweller',
  },
];
