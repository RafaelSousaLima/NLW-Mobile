import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/backIcon.png';
import logoImg from '../../assets/images/logo.png';
import style from './styles';

import styles from './styles';

interface PageHeaderPropd {
    title: string;
}

const PageHeader: React.FC<PageHeaderPropd> = ({title}) => {

    const navigate = useNavigation();

    function handleGoBack() {
        navigate.navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode='contain' />

                </BorderlessButton>
                <Image source={logoImg} resizeMode='contain' />
            </View>
            <Text style={style.title}>{title}</Text>
        </View>
    );
}

export default PageHeader;