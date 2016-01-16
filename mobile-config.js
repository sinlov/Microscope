/**
 * Created by "sinlov" on 16/1/16.
 */

App.info({
    id: 'com.sinlov.microscope',
    name: 'Discover meteor',
    description: 'Discover meteor book',
    author: 'WhatEver Co.,Ltd.',
    email: 'sinlovgmppt@gmail.com',
    website: 'http://zh.discovermeteor.com/',
    version: '1.0.0'
});
App.accessRule("*");
App.setPreference('StatusBarOverlaysWebView', 'true');
App.setPreference('StatusBarBackgroundColor', '#AA333333');
App.setPreference('Orientation', 'portrait');

App.icons({
    'iphone': 'resources/icons/mipmap-mdpi/ic-launcher.png',
    'iphone_2x': 'resources/icons//mipmap-xhdpi/ic-launcher.png',
    'ipad': 'resources/icons//mipmap-mdpi/ic-launcher.png',
    'ipad_2x': 'resources/icons//mipmap-xhdpi/ic-launcher.png',

    'android_ldpi': 'resources/icons/mipmap-hdpi/ic-launcher.png',
    'android_mdpi': 'resources/icons/mipmap-mdpi/ic-launcher.png',
    'android_hdpi': 'resources/icons/mipmap-xhdpi/ic-launcher.png',
    'android_xhdpi': 'resources/icons/mipmap-xxhdpi/ic-launcher.png'
});

App.launchScreens({
    'iphone': 'resources/ios/launch_screen.jpg',
    'android_ldpi_portrait': 'resources/ldpi/launch_screen.9.png',
    'android_mdpi_portrait': 'resources/mdpi/launch_screen.9.png',
    'android_hdpi_portrait': 'resources/hdpi/launch_screen.9.png',
    'android_xhdpi_portrait': 'resources/xhdpi/launch_screen.9.png'
});