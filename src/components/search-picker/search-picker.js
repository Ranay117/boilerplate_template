import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  SectionList,
} from 'react-native';
// import {withTranslation} from 'react-i18next';
import _ from 'lodash';
import {Header, CheckBox} from '../';
import styles from './search-picker.style';

let SearchPicker = props => {
  // const {t} = props;
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState(false);
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onDonePress = () => {
    setVisible(false);
    setSearchText('');
    props.onDonePress && props.onDonePress(value);
  };

  function onItemPress(newValue) {
    if (props.multiSelect) {
      _.includes(value, newValue)
        ? setValue([..._.pull(value, newValue)])
        : setValue([...value, newValue]);
    } else {
      newValue === value ? setValue(null) : setValue(newValue);
    }
  }

  function filterData(data) {
    return !searchText
      ? data
      : _.filter(data, item => item.label.includes(searchText));
  }

  function filterSections(sections) {
    return !searchText
      ? sections
      : _.map(sections, section => ({
          ...section,
          data: _.filter(section.data, item => item.label.includes(searchText)),
        }));
  }

  function onChangeSearchText(text) {
    setSearchText(text);
    props.onChangeSearchText && props.onChangeSearchText(text);
  }

  const onPressCancelSearch = () => {
    setVisible(false);
    setSearchText('');
  };

  const renderItem = itemData => {
    const {item} = itemData;

    return (
      <TouchableOpacity
        onPress={() => onItemPress(item.value)}
        style={styles.itemContainer}>
        <View style={styles.itemContentContainer}>
          {props.ItemContentComponent(itemData)}
        </View>

        <CheckBox
          isChecked={
            props.multiSelect
              ? _.includes(value, item.value)
              : value === item.value
          }
          onToggle={() => onItemPress(item.value)}
        />
      </TouchableOpacity>
    );
  };

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

      <Modal visible={visible} style={styles.modalContainer}>
        <SafeAreaView style={styles.safeAreaContainer}>
          <Header
            title={props.title}
            searchBar
            searchInputProps={{
              // placeholder: t('headerActionButtons.searchInputPlaceholder'),
              placeholder: 'Placeholder searchPicker',
              onChangeText: onChangeSearchText,
              loading: props.loading,
            }}
            showCancelSearchButton
            onPressCancelSearch={onPressCancelSearch}
            // rightButtonText={t('headerActionButtons.done')}
            rightButtonText={'Done SearchPicker'}
            onRightButtonPress={onDonePress}
            smallTitle={props.smallTitle}
          />

          <View style={{flex: 1}}>
            {props.sections ? (
              <SectionList
                style={{flex: 1}}
                contentContainerStyle={{padding: 10}}
                sections={filterSections(props.sections)}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={sectionData =>
                  props.SectionHeaderComponent(sectionData)
                }
                stickySectionHeadersEnabled={false}
              />
            ) : (
              <FlatList
                style={{flex: 1}}
                contentContainerStyle={{padding: 10}}
                data={filterData(props.data)}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.value.toString() + index}
                ItemSeparatorComponent={() => (
                  <View style={{height: 1, backgroundColor: '#E6ECF2'}} />
                )}
              />
            )}
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

// SearchPicker = withTranslation()(SearchPicker);

export {SearchPicker};
