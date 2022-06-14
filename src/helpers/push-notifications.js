// import {Platform, AppState} from 'react-native';
// import PushNotification from 'react-native-push-notification';
// import analytics from '@segment/analytics-react-native';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import Config from 'react-native-config';
// import {NOTIFICATION_TYPES, SCREENS, ANALYTICS_EVENTS} from '@constants';
// import PubNub from 'pubnub';
// import NavigationService from '@navigation/navigation-service';

// const pubnub = new PubNub({
//   publishKey: Config.PUBNUB_PUBLISH_KEY,
//   subscribeKey: Config.PUBNUB_SUBSCRIBE_KEY,
// });

// const environment = 'production';
// const TEST_CHANNEL = 'cialfotestpn123';

// export class PushNotifications {
//   token = '';
//   channels = [];

//   static configure = user => {
//     PushNotification.configure({
//       // Called when Token is generated.
//       onRegister: token => {
//         console.log('TOKEN:', token);
//         this.token = token.token;
//         this.channels = [
//           user.inbox_channel,
//           user.mobile_notification_channel,
//           TEST_CHANNEL,
//         ];

//         if (token.os === 'ios') {
//           pubnub.push.addChannels(
//             {
//               channels: this.channels,
//               device: this.token,
//               pushGateway: 'apns2',
//               topic: Config.BUNDLE_ID,
//               environment,
//             },
//             status => {
//               console.log('pubnub ios subscription status:', status);
//             },
//           );
//           // Send iOS Notification from debug console: {"pn_apns":{"aps":{"alert":"Hello World."}}}
//         } else if (token.os === 'android') {
//           pubnub.push.addChannels(
//             {
//               channels: this.channels,
//               device: this.token,
//               pushGateway: 'gcm', // apns, gcm, mpns
//             },
//             status => {
//               console.log('pubnub android subscription status:', status);
//             },
//           );
//           // Send Android Notification from debug console: {"pn_gcm":{"data":{"message":"Hello World."}}}
//         }
//       },
//       // Something not working?
//       // See: https://support.pubnub.com/support/solutions/articles/14000043605-how-can-i-troubleshoot-my-push-notification-issues-
//       // Called when a remote or local notification is opened or received.
//       onNotification: notification => {
//         console.log('NOTIFICATION:', notification);
//         // Do something with the notification.\

//         const notificationType =
//           Platform.OS === 'ios' ? notification.data.type : notification.type;

//         analytics.track(ANALYTICS_EVENTS.PUSH_NOTIFICATION_OPENED, {
//           type: notificationType,
//           userId: user && user.id,
//         });

//         if (notificationType === NOTIFICATION_TYPES.COLLEGE_VISITS) {
//           NavigationService.navigate(SCREENS.UPCOMING_COLLEGE_VISITS);
//         }

//         if (notificationType === NOTIFICATION_TYPES.TASKS) {
//           const date =
//             Platform.OS === 'ios' ? notification.data.date : notification.date;
//           NavigationService.navigate(SCREENS.TASKS, {task: date});
//         }

//         if (notificationType === NOTIFICATION_TYPES.MEETINGS) {
//           NavigationService.navigate(SCREENS.UPCOMING_MEETINGS);
//         }

//         if (notificationType === NOTIFICATION_TYPES.COLLEGE_FAIR) {
//           NavigationService.navigate(SCREENS.ONLINE_FAIR);
//         }

//         if (
//           notificationType === NOTIFICATION_TYPES.INBOX &&
//           AppState.currentState !== 'active'
//         ) {
//           NavigationService.navigate(SCREENS.INBOX);
//         }

//         // Required on iOS only (see fetchCompletionHandler docs: https://reactnative.dev/docs/pushnotificationios)
//         notification.finish(PushNotificationIOS.FetchResult.NoData);
//       },
//       // ANDROID: GCM or FCM Sender ID
//       senderID: '321453309132',
//     });
//   };

//   static unsubscribeFromPubNub = user => {
//     if (Platform.OS === 'ios') {
//       pubnub.push.removeChannels(
//         {
//           channels: this.channels,
//           device: this.token,
//           pushGateway: 'apns2',
//           topic: Config.BUNDLE_ID,
//           environment,
//         },
//         status => {
//           if (status.error) {
//             console.log('unsub PubNub w/ error:', status);
//           } else {
//             console.log('unsub pubnub done!');
//           }
//         },
//       );
//     } else if (Platform.OS === 'android') {
//       pubnub.push.removeChannels(
//         {
//           channels: this.channels,
//           device: this.token,
//           pushGateway: 'gcm',
//         },
//         status => {
//           if (status.error) {
//             console.log('unsub PubNub w/ error:', status);
//           } else {
//             console.log('unsub pubnub done!');
//           }
//         },
//       );
//     }
//   };
// }
