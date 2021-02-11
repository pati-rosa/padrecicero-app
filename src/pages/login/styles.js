import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
    width: 100%;
    height: 100%; 
    flex: 1;
    align-items: center;
    padding-top: ${Constants.statusBarHeight + 100}px
`