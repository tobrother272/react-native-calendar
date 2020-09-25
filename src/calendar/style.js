import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';
const STYLESHEET_ID = 'stylesheet.calendar.main';
export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: appStyle.calendarBackground
    },
    monthView: {
      ...Platform.select({
        android: {
          elevation: 1
        },
        ios: {
          shadowColor: 'rgba(99,99,99,0.7)',
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: {
            width: 3,
            height: 4
          }
        }
      }),
      backgroundColor:'white',
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      marginTop: 7,
      marginBottom: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}

