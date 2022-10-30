import React from 'react';
import {View, Text} from 'react-native';
import RBSheet from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('React Native Raw Bottom Sheet', () => {
  describe('Render', () => {
    it('should render correctly with no props', () => {
      const wrapper = renderer.create(<RBSheet />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly with given props', () => {
      const wrapper = renderer
        .create(
          <RBSheet
            height={300}
            minClosingHeight={100}
            openDuration={350}
            closeOnSwipeDown={false}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: '#00000066',
              },
              container: {
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}
            onClose={() => {}}
          />,
        )
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly with any children', () => {
      const wrapper = renderer
        .create(
          <RBSheet>
            <View>
              <Text>React Native Raw Bottom Sheet</Text>
            </View>
          </RBSheet>,
        )
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
