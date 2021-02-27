// import React, {Component, useEffect, useState} from 'react';
// import {Image, TabNavigator, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import i18n, {loadLocale} from '../translations/i18n';
//
// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
//
// import LoginScreen from '../screen/01-Login/01-01-Login';
// import LoginLandingScreen from '../screen/01-Login/01-01-LoginLanding';
// import forgotPasswordScreen from '../screen/01-Login/01-02-forgotPassword';
// import CreateUserScreen from '../screen/01-Login/01-03-createUser';
// import DashboardScreen from '../screen/02-Dashboard/02-01-Dashboard';
// import MaintenanceScreen from '../component/underMaintenance';
//
// import accountVersionScreen from '../screen/03-Account/03-09-accountVersion';
// import AboutUsScreen from '../screen/03-Account/03-02-accountAbout';
// import AcountScreen from '../screen/03-Account/03-01-Account';
// import AccountSettingScreen from '../screen/03-Account/03-10-accountSetting';
// import AccountKYCScreen from '../screen/03-Account/03-12-privacy/kyc/03-12-01-kyc';
// import AccountKYCUploadScreen from '../screen/03-Account/03-12-privacy/kyc/03-12-03-kycUpload';
// import AccountAssetScreen from '../screen/03-Account/03-13-asset/03-13-accountAsset';
// import ConvertPointToScreen from '../screen/09-Convert/09-02-ConvertPointTo';
// import ConvertPointSelectionScreen from '../screen/09-Convert/09-01-ConvertPointSelection';
// import ConvertConfirmationScreen from '../screen/09-Convert/09-03-ConvertConfirmation';
// import ContractListScreen from '../screen/07-Contract/07-01-ContractList';
// import createContractScreen from '../screen/07-Contract/07-02-CreateContract';
// import createContractAgreementScreen from '../screen/07-Contract/07-04-contractAgreement';
// import cryptoMarketScreen from '../screen/18-Crypto/cryptoMarket';
// import deleteContractScreen from '../screen/07-Contract/07-05-deleteContract';
// import discoverListScreen from '../screen/17-Discover/discoverList';
// import Earning from '../screen/19-Earning/19-01-earning';
// import EarningDate from '../screen/19-Earning/19-02-earningDate';
// import FAQScreen from '../screen/14-Article/faq';
// import HelpScreen from '../screen/03-Account/03-11-accountHelp';
// import HelpFormScreen from '../screen/03-Account/03-11-01-accountHelpForm';
// import MessageSuccessScreen from '../component/Message/MessageSuccess';
// import MessageErrorScreen from '../component/Message/MessageError';
// import MemoListScreen from '../screen/13-Memo/MemoList';
// import MemoScreen from '../screen/13-Memo/Memo';
// import MiningScreen from '../screen/20-Mining/20-01-mining';
// import NewsListScreen from '../screen/13-Memo/13-02-news';
// import NewsScreen from '../screen/13-Memo/13-02-01-newsView';
// import ProfileSettingScreen from '../screen/03-Account/03-05-accountProfileSetting/03-05-accountProfileSetting';
// import ProfileNameSettingScreen from '../screen/03-Account/03-05-accountProfileSetting/03-05-01-profileNameSetting';
// import PasswordResetScreen from '../screen/03-Account/03-03-accountPasswordReset';
// import PrivacyScreen from '../screen/03-Account/03-12-privacy/03-12-accountPrivacy';
//
// import reloadNotifyScreen from '../translations/reloadNotify';
// import ReportGroupSalesScreen from '../screen/05-Report/05-01-GroupSales';
// import ReportWithdrawalListScreen from '../screen/05-Report/05-03-WithdrawalList';
// import RewardListScreen from '../screen/05-Report/05-02-RewardList';
// import SecurityPasswordResetScreen from '../screen/03-Account/03-04-accountPasswordSecurityReset';
// import ShareScreen from '../screen/03-Account/03-06-accountShare';
// import TransferSelectionScreen from '../screen/08-Transfer/08-02-TransferPointSelection';
// import TransferSearchScreen from '../screen/08-Transfer/08-01-TransferMemberSearch';
// import TransferConfirmationScreen from '../screen/08-Transfer/08-03-TransferConfirmation';
// import TermsScreen from '../screen/03-Account/03-07-accountTerms';
// import TeamScreen from '../screen/04-Team/04-01-Team';
// import transactionByPointScreen from '../screen/11-Wallet/11-01-01-transactionByPoint';
// import UpgradeContractScreen from '../screen/07-Contract/07-03-upgradeContract';
// import UserAgreementScreen from '../screen/03-Account/03-08-accountUserAgreement';
// import versionScreen from '../screen/03-Account/03-09-01-updateVersion';
// import WithdrawTypeSelectionScreen from '../screen/10-Withdraw/10-03-WithdrawTypeSelection';
// import WithdrawConfirmationScreen from '../screen/10-Withdraw/10-02-WithdrawConfirmation';
// import walletTopupScreen from '../screen/11-Wallet/11-02-walletTopup';
// import walletScreen from '../screen/11-Wallet/11-01-wallet';
// import {useSelector} from "react-redux";
// import lang from "../locale/locale";
//
// const NavigatorList = (props) => {
//     const token = useSelector(d => d.user?.token);
//     console.log("propspropsprops", props?.navigation);
//     if (!token) {
//         props.navigation.navigate("LoginLanding");
//     }
//
//     return (
//         <Stack.Navigator initialRouteName="LoginLanding" screenOptions={{headerTitleStyle: {fontSize: 15}}}>
//             <Stack.Screen name="LoginLanding" component={LoginLandingScreen}
//                           options={{headerShown: false, tabBarVisible: false}}/>
//             <Stack.Screen name="Login" component={LoginScreen}
//                           options={{headerShown: false, tabBarVisible: false}}/>
//             <Stack.Screen name="forgotPasswordScreen" component={forgotPasswordScreen}
//                           options={{headerShown: false, tabBarVisible: false}}/>
//             <Stack.Screen name="CreateUserScreen" component={CreateUserScreen}/>
//             <Stack.Screen name="Dashboard" component={MainStackNavigator} options={{headerShown: false}}/>
//             <Stack.Screen name="TransferScreen" component={TransferSelectionScreen}
//                           options={{title: lang('00-menu-transfer')}}/>
//             <Stack.Screen name="TransferMemberSearch" component={TransferSearchScreen}
//                           options={{title: lang('00-menu-transfer')}}/>
//             <Stack.Screen name="TransferConfirmation" component={TransferConfirmationScreen}
//                           options={{title: lang('00-menu-transfer')}}/>
//             <Stack.Screen name="ConvertScreen" component={ConvertPointSelectionScreen}
//                           options={{title: lang('00-menu-convert')}}/>
//             <Stack.Screen name="MessageSuccess" component={MessageSuccessScreen}
//                           options={({route}) => ({title: route.params.name})}/>
//             <Stack.Screen name="MessageError" component={MessageErrorScreen}
//                           options={({route}) => ({title: route.params.name})}/>
//             <Stack.Screen name="ConvertPointTo" component={ConvertPointToScreen}
//                           options={{title: lang('00-menu-convert')}}/>
//             <Stack.Screen name="ConvertConfirmation" component={ConvertConfirmationScreen}
//                           options={{title: lang('00-menu-convert')}}/>
//             <Stack.Screen name="MemoList" component={MemoListScreen}
//                           options={{title: lang('00-menu-latestMemo')}}/>
//             <Stack.Screen name="Memo" component={MemoScreen} options={{title: lang('00-menu-memo')}}/>
//             <Stack.Screen name="NewsListScreen" component={NewsListScreen}
//                           options={{title: lang('00-menu-news')}}/>
//             <Stack.Screen name="NewsScreen" component={NewsScreen} options={{title: lang('00-menu-news')}}/>
//
//
//             <Stack.Screen name="WithdrawalScreen" component={WithdrawTypeSelectionScreen}
//                           options={{title: lang('00-menu-withdraw')}}/>
//             <Stack.Screen name="WithdrawalConfirmationScreen" component={WithdrawConfirmationScreen}
//                           options={{title: lang('00-menu-withdraw')}}/>
//             <Stack.Screen name="AcountScreen" component={AcountScreen} options={{headerShown: false}}/>
//             <Stack.Screen name="AccountSettingScreen" component={AccountSettingScreen}
//                           options={{headerShown: false}}/>
//             <Stack.Screen name="AboutUsScreen" component={AboutUsScreen}
//                           options={{title: lang('00-menu-about'), headerShown: false}}/>
//             <Stack.Screen name="HelpScreen" component={HelpScreen}
//                           options={{headerShown: false}}/>
//             <Stack.Screen name="HelpFormScreen" component={HelpFormScreen}
//                           options={{headerShown: false}}/>
//             <Stack.Screen name="PrivacyScreen" component={PrivacyScreen}
//                           options={{headerShown: false}}/>
//             <Stack.Screen name="AccountKYCScreen" component={AccountKYCScreen}
//                           options={{headerShown: false}}/>
//             <Stack.Screen name="AccountKYCUploadScreen" component={AccountKYCUploadScreen}
//                           options={{headerShown: false}}/>
//             <Stack.Screen name="AccountAssetScreen" component={AccountAssetScreen}
//                           options={{headerShown: false}}/>
//             <Stack.Screen name="ProfileSettingScreen" component={ProfileSettingScreen}
//                           options={{headerShown: false}}/>
//             <Stack.Screen name="ProfileNameSettingScreen" component={ProfileNameSettingScreen}
//                           options={{headerShown: false}}/>
//             <Stack.Screen name="PasswordResetScreen" component={PasswordResetScreen}
//                           options={{title: lang('00-menu-editPassword')}}/>
//             <Stack.Screen name="SecurityPasswordResetScreen" component={SecurityPasswordResetScreen}
//                           options={{title: lang('00-menu-editSecurityPassword')}}/>
//             <Stack.Screen name="ShareScreen" component={ShareScreen}
//                           options={{title: lang('00-menu-share'), headerShown: false}}/>
//             <Stack.Screen name="TermsAndConditionsScreen" component={TermsScreen}
//                           options={{title: lang('00-menu-rules')}}/>
//             <Stack.Screen name="UserAgreementScreen" component={UserAgreementScreen}
//                           options={{title: lang('00-menu-userAgreement')}}/>
//             <Stack.Screen name="FAQScreen" component={FAQScreen} options={{title: lang('00-menu-FAQ')}}/>
//             <Stack.Screen name="accountVersionScreen" component={accountVersionScreen}
//                           options={{title: lang('00-menu-version')}}/>
//             <Stack.Screen name="versionScreen" component={versionScreen}
//                           options={{headerShown: false}}/>
//             <Stack.Screen name="reloadNotifyScreen" component={reloadNotifyScreen}
//                           options={{title: lang('00-menu-language')}}/>
//             <Stack.Screen name="Earning" component={Earning} options={{headerShown: false}}/>
//             <Stack.Screen name="EarningDate" component={EarningDate} options={{headerShown: false}}/>
//             <Stack.Screen name="TeamScreen" component={TeamScreen} options={{headerShown: false}}/>
//             <Stack.Screen name="ReportGroupSalesScreen" component={ReportGroupSalesScreen}
//                           options={{title: lang('00-menu-teamReport')}}/>
//             <Stack.Screen name="ReportWithdrawalListScreen" component={ReportWithdrawalListScreen}
//                           options={{title: lang('00-menu-withdrawLog')}}/>
//             <Stack.Screen name="RewardListScreen" component={RewardListScreen}
//                           options={{title: lang('00-menu-rewardList')}}/>
//             <Stack.Screen name="MaintenanceScreen" component={MaintenanceScreen}
//                           options={{title: lang('00-menu-maintenance')}}/>
//             <Stack.Screen name="ContractListScreen" component={ContractListScreen}
//                           options={{title: lang('00-menu-contract')}}/>
//             <Stack.Screen name="createContractScreen" component={createContractScreen}
//                           options={{title: lang('00-menu-addContract')}}/>
//             <Stack.Screen name="createContractAgreementScreen" component={createContractAgreementScreen}
//                           options={{title: lang('00-menu-upgradeContractTerms')}}/>
//             <Stack.Screen name="UpgradeContractScreen" component={UpgradeContractScreen}
//                           options={{title: lang('00-menu-upgrade')}}/>
//             <Stack.Screen name="deleteContractScreen" component={deleteContractScreen}
//                           options={{title: lang('00-menu-deleteContract')}}/>
//
//             <Stack.Screen name="CryptoMarketScreen" component={cryptoMarketScreen}
//                           options={{title: lang('00-menu-market')}}/>
//             <Stack.Screen name="discoverListScreen" component={discoverListScreen}
//                           options={{title: lang('00-menu-discover')}}/>
//             <Stack.Screen name="walletTopupScreen" component={walletTopupScreen}
//                           options={{title: lang('00-menu-topup')}}/>
//             <Stack.Screen name="walletScreen" component={walletScreen}
//                           options={{title: lang('00-menu-wallet'), headerShown: false}}/>
//             <Stack.Screen name="transactionByPointScreen" component={transactionByPointScreen}
//                           options={({route}) => ({title: route.params.name})}/>
//
//             <Stack.Screen name="MiningScreen" component={MiningScreen}
//                           options={{headerShown: false}}/>
//         </Stack.Navigator>
//     );
// };
//
// const MainStackNavigator = ({navigation, route}) => {
//     return (
//         <Tab.Navigator
//             screenOptions={({route}) => ({
//                 tabBarIcon: ({focused, color, size}) => {
//                     if (route.name === 'Home' || route.name === '首页') {
//                         return (
//                             <Image
//                                 style={[{height: 140}]}
//                                 resizeMode="contain"
//                                 source={require('../../assets/00-home.png')}
//                             />
//                         );
//                     } else if (route.name === 'Exchange' || route.name === '兑换') {
//                         return (
//                             <Image
//                                 style={[{height: 140}]}
//                                 resizeMode="contain"
//                                 source={require('../../assets/00-exchange.png')}
//                             />
//                         );
//                     } else if (route.name === 'Team' || route.name === '团队') {
//                         return (
//                             <Image
//                                 style={[{height: 140}]}
//                                 resizeMode="contain"
//                                 source={require('../../assets/00-team.png')}
//                             />
//                         );
//                     } else if (route.name === 'My Account' || route.name === '我的') {
//                         return (
//                             <Image
//                                 style={[{height: 140}]}
//                                 resizeMode="contain"
//                                 source={require('../../assets/00-myaccount.png')}
//                             />
//                         );
//                     }
//                 },
//             })}
//             tabBarOptions={{
//                 activeTintColor: '#3F1E1B',
//                 inactiveBackgroundColor: '#fff',
//                 activeBackgroundColor: '#fff',
//                 inactiveTintColor: '#D2C7BB',
//                 allowFontScaling: true,
//                 style: {
//                     height: 70,
//                 },
//                 labelStyle: {
//                     paddingBottom: 5,
//                     fontSize: 13
//                 },
//                 tabStyle: {}
//             }}
//         >
//             <Tab.Screen name={i18n.t('00-menu-home')} component={DashboardScreen}/>
//             <Tab.Screen name={i18n.t('00-menu-exchange')} component={TeamScreen}/>
//             <Tab.Screen name={i18n.t('00-menu-team')} component={discoverListScreen}/>
//             <Tab.Screen name={i18n.t('00-menu-profile')} component={AcountScreen}/>
//         </Tab.Navigator>
//
//     );
// };
//
// export default NavigatorList;
