import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../style';
import sharedStyles from '../../../../../src/configs/styles.config'
const STYLESHEET_ID = 'stylesheet.calendar.header';

export default function(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    header: {
        ...Platform.select({
          android: {
            elevation: 3,
            margin: 3
          },
          ios: {
            shadowColor: 'rgba(99,99,99,0.8)',
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
              width: 0,
              height: 2
            }
          }
        }),
        backgroundColor:'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      borderRadius:10,
      paddingRight: 10,
      marginTop: 6,
      marginBottom: 16,
      alignItems: 'center'
    },
    headerContainer: {

      flexDirection: 'row'
    },
    monthText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: appStyle.textMonthFontWeight,
      color: appStyle.monthTextColor,
      margin: 10
    },
    arrow: {
      padding: 10,
      ...appStyle.arrowStyle
    },
    arrowImage: {
      tintColor: appStyle.arrowColor,
      ...Platform.select({
        web: {
          width: appStyle.arrowWidth,
          height: appStyle.arrowHeight
        }
      }),
    },
    disabledArrowImage: {
      tintColor: appStyle.disabledArrowColor
    },
    week: {
      marginTop: 7,
      paddingVertical:10,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayHeader: {
      
      marginTop: 2,
      marginBottom: 7,
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
      color: appStyle.textSectionTitleColor
    },
    disabledDayHeader: {
      color: appStyle.textSectionTitleDisabledColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
