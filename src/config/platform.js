import { Platform, Dimensions, PixelRatio, NativeModules, DeviceEventEmitter} from 'react-native';
import variable from '../scripts/app.dev';
import DeviceInfo from 'react-native-device-info';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const { AsgRNTControlCenter } = NativeModules || { };

export default {
  platformStyle,
  platform,
  deviceWidth,
  deviceHeight,
  version: 'v1.6.5',
  callPhone: '4006599988',
  shareTitle: '超多实惠快来戳~',
  env: process.env.NODE_ENV,
  accessToken: variable.accessToken,
  userToken: variable.userToken,
  enableDebug: variable.debug,
  serverURL: variable.apiDomain,
  componentName: variable.componentName,
  // shopId: variable.shopId,
  shareURL: variable.shareURL,
  imageURL: variable.imageURL,
  customerServiceUrl: variable.customerServiceUrl,
  operatorServiceUrl: variable.operatorServiceUrl,
  shopkeeperInfoUrl: variable.shopkeeperInfoUrl,
  biDomain: variable.biDomain,
  biAccessToken: variable.biAccessToken,
  isLumi: false,
  lumiProjectId: variable.lumiProjectId,
  websocket: variable.websocket,
  brandActStatus: false,
  shareLogo: 'http://zmcimg.99zmall.com/static/img/image/49df61bc8693472db25e10605f4e529d.jpg',
  brandAreaId: null,
  site: {},
  
  isCoinFrozen: function() { return Number(this.site.userStatus) === 4 },

  // host operator
//   isHost: () => {
//     return !!AsgRNTControlCenter;
//   },
//   exitApp: () => {
//     if (AsgRNTControlCenter && AsgRNTControlCenter.closePage) {
//       AsgRNTControlCenter.closePage();
//     }
//   },
//   payment: (channel, options, success, fail) => {
//     if (AsgRNTControlCenter && AsgRNTControlCenter.invokePay) {
//       AsgRNTControlCenter.invokePay(channel, JSON.stringify(options), success, fail);
//     }
//   },
//   closeDialog: () => {
//     if (AsgRNTControlCenter && AsgRNTControlCenter.closeLoadingDialog) {
//       AsgRNTControlCenter.closeLoadingDialog();
//     }
//   },
//   toWithdraw: (success, failure) => {
//     if (AsgRNTControlCenter && AsgRNTControlCenter.invokeWithdraw) {
//       AsgRNTControlCenter.invokeWithdraw(success, failure);
//     }
//   },
//   navigatorSetting: (success, failure) => {
//     const emptyFunc = () => {};

//     if (AsgRNTControlCenter && AsgRNTControlCenter.openSettingPage) {
//       AsgRNTControlCenter.openSettingPage(success || emptyFunc, failure || emptyFunc);
//     }
//   },
//   channel: {
//     // type namespace.type
//     on: (type, fn) => {
//       return DeviceEventEmitter.addListener(type, fn);
//     },
//     emit: (type, args) => {
//       DeviceEventEmitter.emit(type, args);
//     }
//   },
//   customServiceForAndroid: {
//     canHandle: () => platform === 'android' && AsgRNTControlCenter && AsgRNTControlCenter.invokeOnlineService,
//     handle: (url) => AsgRNTControlCenter.invokeOnlineService(url),
//   },
};
