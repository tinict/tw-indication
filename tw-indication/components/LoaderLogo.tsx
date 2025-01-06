import React, { useRef, useEffect } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Animated
} from 'react-native';

interface LoaderLogoProps {
    logo: string; 
    loaderColor?: string; 
    size?: number; 
    thickness?: number; 
}

const LoaderLogo: React.FC<LoaderLogoProps> = ({
    logo,
    loaderColor = 'blue',
    size = 150,
    thickness = 4,
}) => {
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            })
        ).start();
    }, [rotateAnim]);

    const rotateInterpolate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <Animated.View
                style={[
                    styles.loader,
                    {
                        borderWidth: thickness,
                        borderColor: loaderColor,
                        borderTopColor: 'transparent',
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        transform: [{ rotate: rotateInterpolate }],
                    },
                ]}
            />

            <Image
                source={{ uri: logo }}
                style={[styles.logo, { width: size * 0.4, height: size * 0.4 }]}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        position: 'absolute',
        borderStyle: 'solid',
    },
    logo: {
        position: 'absolute',
    },
});

export default LoaderLogo;
