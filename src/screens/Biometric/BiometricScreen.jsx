import React, {useState} from 'react';
import {View} from 'react-native';
import {Colors, GlobalStyles} from '../../theme';
import DashboardScreen from '../Dashboard/DashboardScreen';
import BiometricModal from '../../components/common/BiometricModal';

const BiometricScreen = ({navigation}) => {
  const userName = 'Jitendra Mandal';
  const phoneNumber = '9999098558';
  const goldPrice = '15,036.68';
  const [showModal, setShowModal] = useState(true);

  const handleEnable = () => {
    setShowModal(false);
    navigation.reset({index: 0, routes: [{name: 'Main'}]});
  };

  const handleSkip = () => {
    setShowModal(false);
    navigation.reset({index: 0, routes: [{name: 'Main'}]});
  };

  return (
    <View style={GlobalStyles.container}>
      {/* Dashboard visible behind the modal */}
      <DashboardScreen
        userName={userName}
        phoneNumber={phoneNumber}
        goldPrice={goldPrice}
      />

      {/* Biometric Modal overlay */}
      <BiometricModal
        visible={showModal}
        onEnable={handleEnable}
        onSkip={handleSkip}
      />
    </View>
  );
};

export default BiometricScreen;
