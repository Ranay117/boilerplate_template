import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Picker,
  TouchableOpacity,
  Platform,
  Text,
  ActivityIndicator,
} from 'react-native';
import {RadioButtonInput} from 'react-native-simple-radio-button';
// import {withTranslation} from 'react-i18next';
import {Link} from '../';
import styles from './picker-select.style';

let PickerSelect = props => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(props.value);
  // const {t} = props;

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  function onDonePress() {
    setVisible(false);
    if (Platform.OS === 'ios' && !value) {
      props.onDonePress && props.onDonePress(props.options[0]?.value);
    } else {
      props.onDonePress && props.onDonePress(value);
    }
  }

  function onCancelPress() {
    setVisible(false);
    setValue(props.value);
    props.onCancelPress && props.onCancelPress(value);
  }

  return (
    <View>
      <TouchableOpacity
        disabled={props.disabled || props.isLoading}
        onPress={() => setVisible(true)}>
        {props.isLoading ? (
          <ActivityIndicator color="#1886DF" />
        ) : (
          props.triggerView
        )}
      </TouchableOpacity>

      {Platform.OS === 'ios' ? (
        <Modal style={styles.modalContainer} transparent visible={visible}>
          <View style={styles.modalTopSpace} />

          <View style={styles.actionBarContainer}>
            <Link
              primary
              // text={t('pickerSelect.cancelButton')}
              text={'PickerSelectCancel'}
              onPress={onCancelPress}
            />

            <View style={styles.actionBarSpace} />

            <Link
              primary
              // text={t('pickerSelect.doneButton')}
              text={'PickerSelectDone'}
              onPress={onDonePress}
            />
          </View>

          <Picker
            selectedValue={value}
            style={styles.iosPicker}
            onValueChange={value => setValue(value)}>
            {props.options.map(option => (
              <Picker.Item
                label={option.label}
                value={option.value}
                key={option.value}
              />
            ))}
          </Picker>
        </Modal>
      ) : (
        <Modal
          style={styles.androidModalContainer}
          transparent
          visible={visible}>
          <View style={styles.androidModalContainer}>
            <View style={styles.androidModalContentContainer}>
              <Text style={styles.androidPickerTitle}>{props.title}</Text>

              {props.options.map(option => (
                <View key={option.value} style={styles.pickerOptionContainer}>
                  <Text style={styles.androidPickerOptionText}>
                    {option.label}
                  </Text>

                  <RadioButtonInput
                    obj={option}
                    buttonSize={15}
                    isSelected={option.value === value}
                    onPress={() => setValue(option.value)}
                  />
                </View>
              ))}

              <View style={styles.buttonsContainer}>
                <Link
                  primary
                  // text={t('pickerSelect.cancelButton').toUpperCase()}
                  text={'Cancel Button'}
                  onPress={onCancelPress}
                />

                <View style={styles.buttonSpace} />

                <Link
                  primary
                  // text={t('pickerSelect.doneButton').toUpperCase()}
                  text={'Done Button'}
                  onPress={onDonePress}
                />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

// PickerSelect = withTranslation()(PickerSelect);

export {PickerSelect};
