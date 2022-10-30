import React, {MutableRefObject} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from '../BottomSheet';
import styles from './styles';

export interface CoinDetailsProp {
  coin: string;
  rate: string;
  height: number;
  forwardedRef?: MutableRefObject<any>;
}

const CoinDetails = ({coin, rate, height, forwardedRef}: CoinDetailsProp) => {
  return (
    <RBSheet
      ref={forwardedRef}
      closeOnDragDown
      height={height}
      openDuration={250}
      customStyles={{
        container: styles.bottomSheetContainer,
      }}>
      <View testID="coin-details" style={styles.container}>
        <Text style={styles.header}>Coin Details</Text>
        <TouchableOpacity
          testID="coin-details-close"
          activeOpacity={0.6}
          onPress={() => forwardedRef?.current.close()}
          style={styles.cancelBtn}>
          <Image
            source={require('src/assets/images/close.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title}>
            Coin: <Text style={styles.value}>{coin}</Text>
          </Text>
          <Text style={styles.title}>
            Rate: <Text style={styles.value}>{rate}</Text>
          </Text>
        </View>
      </View>
    </RBSheet>
  );
};

CoinDetails.defaultProps = {
  title: '',
  height: 300,
  onOpen: () => null,
};

export default CoinDetails;
