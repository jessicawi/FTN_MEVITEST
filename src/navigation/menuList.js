import React, {Component, useEffect, useState} from 'react';
import {Image, TabNavigator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import LoginScreen from '../screen/01-Login/01-01-Login';
import * as SecureStore from "expo-secure-store";

const MenuList = (props) => {
    // const [loading, setLoading] = useState(true);
    //
    // useEffect(() => {
    //     // fetch all data for displaying on first load
    //     const init = async () => {
    //         try {
    //
    //         } catch (e) {
    //
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     init().then();
    // });

    // if (loading) {
    //     return null;
    // }
    //
    // if (!token) {
    //     return (
    //         <NavigationContainer>
    //             <Stack.Navigator initialRouteName="Login" screenOptions={{headerTitleStyle: {fontSize: 15}}}>
    //                 <Stack.Screen name="Login" component={LoginScreen}
    //                               options={{headerShown: false, tabBarVisible: false}}/>
    //             </Stack.Navigator>
    //         </NavigationContainer>
    //     );
    // }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginLanding" screenOptions={{headerTitleStyle: {fontSize: 15}}}>
                <Stack.Screen name="LoginLanding" component={LoginLandingScreen}
                              options={{headerShown: false, tabBarVisible: false}}/>
                <Stack.Screen name="Login" component={LoginScreen}
                              options={{headerShown: false, tabBarVisible: false}}/>
                <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen}
                              options={{headerShown: false, tabBarVisible: false}}/>
                <Stack.Screen name="forgotPasswordScreen" component={forgotPasswordScreen}
                              options={{headerShown: false, tabBarVisible: false}}/>
                <Stack.Screen name="CreateUserScreen" component={CreateUserScreen}/>
                <Stack.Screen name="Dashboard" component={MainStackNavigator} options={{headerShown: false}}/>
                <Stack.Screen name="MessageSuccess" component={MessageSuccessScreen} options={{headerShown: false}}/>
                <Stack.Screen name="MessageError" component={MessageErrorScreen}
                              options={({route}) => ({title: route.params.name})}/>
                <Stack.Screen name="AcountScreen" component={AcountScreen} options={{headerShown: false}}/>
                <Stack.Screen name="AccountSettingScreen" component={AccountSettingScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="AboutUsScreen" component={AboutUsScreen}
                              options={{title: i18n.t('00-menu-about'), headerShown: false}}/>
                <Stack.Screen name="PaymentListScreen" component={PaymentListScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="BankListScreen" component={BankListScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="NewBankScreen" component={NewBankScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="WeixinPayScreen" component={WeixinPayScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="AlipayScreen" component={AlipayScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="USDTWalletScreen" component={USDTWalletScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="HelpScreen" component={HelpScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="HelpFormScreen" component={HelpFormScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="PrivacyScreen" component={PrivacyScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="AccountKYCScreen" component={AccountKYCScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="AccountKYCUploadScreen" component={AccountKYCUploadScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="AccountLanguageScreen" component={AccountLanguageScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="TransactionPasswordScreen" component={TransactionPasswordScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="BindMobileScreen" component={BindMobileScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="AccountAssetScreen" component={AccountAssetScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="ProfileSettingScreen" component={ProfileSettingScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="ProfileNameSettingScreen" component={ProfileNameSettingScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="PasswordResetScreen" component={PasswordResetScreen}
                              options={{title: i18n.t('00-menu-editPassword')}}/>
                <Stack.Screen name="SecurityPasswordResetScreen" component={SecurityPasswordResetScreen}
                              options={{title: i18n.t('00-menu-editSecurityPassword')}}/>
                <Stack.Screen name="ShareScreen" component={ShareScreen}
                              options={{title: i18n.t('00-menu-share'), headerShown: false}}/>
                <Stack.Screen name="ShareRecordScreen" component={ShareRecordScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="accountVersionScreen" component={accountVersionScreen}
                              options={{title: i18n.t('00-menu-version')}}/>
                <Stack.Screen name="versionScreen" component={versionScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="reloadNotifyScreen" component={reloadNotifyScreen}
                              options={{title: i18n.t('00-menu-language')}}/>
                <Stack.Screen name="Earning" component={Earning} options={{headerShown: false}}/>
                <Stack.Screen name="EarningDate" component={EarningDate} options={{headerShown: false}}/>
                <Stack.Screen name="TeamScreen" component={TeamScreen} options={{headerShown: false}}/>
                <Stack.Screen name="TeamEarningScreen" component={TeamEarningScreen} options={{headerShown: false}}/>
                <Stack.Screen name="TeamGlobalBonusScreen" component={TeamGlobalBonusScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="MaintenanceScreen" component={MaintenanceScreen}
                              options={{title: i18n.t('00-menu-maintenance')}}/>
                <Stack.Screen name="ContractListScreen" component={ContractListScreen}
                              options={{title: i18n.t('00-menu-contract')}}/>
                <Stack.Screen name="walletTopupScreen" component={walletTopupScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="walletScreen" component={walletScreen}
                              options={{title: i18n.t('00-menu-wallet'), headerShown: false}}/>
                <Stack.Screen name="WalletTopupRecordScreen" component={WalletTopupRecordScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="MiningScreen" component={MiningScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="C2CScreen" component={C2CScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="C2CBuyScreen" component={C2CBuyScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="C2CSellScreen" component={C2CSellScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="C2CTransactionRecordScreen" component={C2CTransactionRecordScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="WithdrawScreen" component={WithdrawScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="TermsAndConditionsScreen" component={TermsScreen} options={{headerShown: false}}/>
                <Stack.Screen name="UserAgreementScreen" component={UserAgreementScreen}
                              options={{headerShown: false}}/>
                {/*<Stack.Screen name="TransferScreen" component={TransferSelectionScreen}*/}
                {/*options={{title: i18n.t('00-menu-transfer')}}/>*/}
                {/*<Stack.Screen name="TransferMemberSearch" component={TransferSearchScreen}*/}
                {/*options={{title: i18n.t('00-menu-transfer')}}/>*/}
                {/*<Stack.Screen name="TransferConfirmation" component={TransferConfirmationScreen}*/}
                {/*options={{title: i18n.t('00-menu-transfer')}}/>*/}
                {/*<Stack.Screen name="ConvertScreen" component={ConvertPointSelectionScreen}*/}
                {/*options={{title: i18n.t('00-menu-convert')}}/>*/}
                {/*<Stack.Screen name="ConvertPointTo" component={ConvertPointToScreen}*/}
                {/*options={{title: i18n.t('00-menu-convert')}}/>*/}
                {/*<Stack.Screen name="ConvertConfirmation" component={ConvertConfirmationScreen}*/}
                {/*options={{title: i18n.t('00-menu-convert')}}/>*/}
                {/*<Stack.Screen name="MemoList" component={MemoListScreen}*/}
                {/*options={{title: i18n.t('00-menu-latestMemo')}}/>*/}
                {/*<Stack.Screen name="Memo" component={MemoScreen} options={{title: i18n.t('00-menu-memo')}}/>*/}
                {/*<Stack.Screen name="NewsListScreen" component={NewsListScreen}*/}
                {/*options={{title: i18n.t('00-menu-news')}}/>*/}
                {/*<Stack.Screen name="NewsScreen" component={NewsScreen} options={{title: i18n.t('00-menu-news')}}/>*/}
                {/*<Stack.Screen name="WithdrawalScreen" component={WithdrawTypeSelectionScreen}*/}
                {/*options={{title: i18n.t('00-menu-withdraw')}}/>*/}
                {/*<Stack.Screen name="WithdrawalConfirmationScreen" component={WithdrawConfirmationScreen}*/}
                {/*options={{title: i18n.t('00-menu-withdraw')}}/>*/}
                {/*<Stack.Screen name="FAQScreen" component={FAQScreen} options={{title: i18n.t('00-menu-FAQ')}}/>*/}
                {/*<Stack.Screen name="ReportGroupSalesScreen" component={ReportGroupSalesScreen}*/}
                {/*options={{title: i18n.t('00-menu-teamReport')}}/>*/}
                {/*<Stack.Screen name="ReportWithdrawalListScreen" component={ReportWithdrawalListScreen}*/}
                {/*options={{title: i18n.t('00-menu-withdrawLog')}}/>*/}
                {/*<Stack.Screen name="RewardListScreen" component={RewardListScreen}*/}
                {/*options={{title: i18n.t('00-menu-rewardList')}}/>*/}
                {/*<Stack.Screen name="createContractScreen" component={createContractScreen}*/}
                {/*options={{title: i18n.t('00-menu-addContract')}}/>*/}
                {/*<Stack.Screen name="createContractAgreementScreen" component={createContractAgreementScreen}*/}
                {/*options={{title: i18n.t('00-menu-upgradeContractTerms')}}/>*/}
                {/*<Stack.Screen name="UpgradeContractScreen" component={UpgradeContractScreen}*/}
                {/*options={{title: i18n.t('00-menu-upgrade')}}/>*/}
                {/*<Stack.Screen name="deleteContractScreen" component={deleteContractScreen}*/}
                {/*options={{title: i18n.t('00-menu-deleteContract')}}/>*/}
                {/*<Stack.Screen name="CryptoMarketScreen" component={cryptoMarketScreen}*/}
                {/*options={{title: i18n.t('00-menu-market')}}/>*/}
                {/*<Stack.Screen name="discoverListScreen" component={discoverListScreen}*/}
                {/*options={{title: i18n.t('00-menu-discover')}}/>*/}
                {/*<Stack.Screen name="transactionByPointScreen" component={transactionByPointScreen}*/}
                {/*options={({route}) => ({title: route.params.name})}/>*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const MainStackNavigator = ({navigation, route}) => {
    const locale = useSelector(d => d.common.locale);

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    if (route.name === 'Home' || route.name === '首页') {
                        return (
                            <Image
                                style={[{height: 140}]}
                                resizeMode="contain"
                                source={require('../../assets/00-home.png')}
                            />
                        );
                    } else if (route.name === 'Trading' || route.name === '交易所') {
                        return (
                            <Image
                                style={[{height: 140}]}
                                resizeMode="contain"
                                source={require('../../assets/00-exchange.png')}
                            />
                        );
                    } else if (route.name === 'Team' || route.name === '团队') {
                        return (
                            <Image
                                style={[{height: 140}]}
                                resizeMode="contain"
                                source={require('../../assets/00-team.png')}
                            />
                        );
                    } else if (route.name === 'My Account' || route.name === '我的') {
                        return (
                            <Image
                                style={[{height: 140}]}
                                resizeMode="contain"
                                source={require('../../assets/00-myaccount.png')}
                            />
                        );
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: '#3F1E1B',
                inactiveBackgroundColor: '#fff',
                activeBackgroundColor: '#fff',
                inactiveTintColor: '#D2C7BB',
                allowFontScaling: true,
                style: {
                    height: 70,
                },
                labelStyle: {
                    paddingBottom: 5,
                    fontSize: 13
                },
                tabStyle: {}
            }}
        >
            <Tab.Screen name={i18n.t('00-menu-home')} component={DashboardScreen}/>
            <Tab.Screen name={i18n.t('00-menu-exchange')} component={C2CScreen}/>
            <Tab.Screen name={i18n.t('00-menu-team')} component={TeamScreen}/>
            <Tab.Screen name={i18n.t('00-menu-profile')} component={AcountScreen}/>
        </Tab.Navigator>
    );
};

export default MenuList;
