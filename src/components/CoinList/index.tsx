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
      bounces={false}
      data={coins}
      keyExtractor={item => item}
      style={styles.content}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onCoinSelect && onCoinSelect(item)}
          style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </TouchableOpacity>
      )}
      ListEmptyComponent={<Text style={styles.emptyText}>No Coins Found</Text>}
    />
  );
};

export default CoinList;
