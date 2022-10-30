import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface CoinListProps {
  coins: string[];
  onCoinSelect?: (coin: string) => void;
}

const CoinList = ({coins, onCoinSelect}: CoinListProps) => {
  return (
    <FlatList
      testID="coin-list"
      bounces={false}
      data={coins}
      keyExtractor={item => item}
      style={styles.content}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => (
        <TouchableOpacity
          testID={`coin-button-${index}`}
          activeOpacity={0.7}
          onPress={() => onCoinSelect && onCoinSelect(item)}
          style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </TouchableOpacity>
      )}
      ListEmptyComponent={
        <Text testID="coin-list-empty" style={styles.emptyText}>
          No Coins Found
        </Text>
      }
    />
  );
};

export default CoinList;
