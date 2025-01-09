import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    ViewStyle,
    StyleProp,
} from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    useDerivedValue,
    runOnJS,
} from 'react-native-reanimated';

const SCREEN_HEIGHT = Dimensions.get('window').height;

type DraggableModalProps = {
    visible: boolean;
    minHeight?: number;
    maxHeight?: number;
    initialHeight?: number;
    containerStyle?: StyleProp<ViewStyle>;
    handleStyle?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
    children: React.ReactNode;
    onClose?: () => void;
};

type GestureContext = {
    startY: number;
    startHeight: number;
};

const DraggableResizable: React.FC<DraggableModalProps> = ({
    visible = false,
    minHeight = 200,
    maxHeight = SCREEN_HEIGHT * 0.8,
    initialHeight = 200,
    containerStyle = {},
    handleStyle = {},
    contentStyle = {},
    children,
    onClose,
}) => {
    const translateY = useSharedValue(visible ? 0 : SCREEN_HEIGHT);
    const modalHeight = useSharedValue(Math.max(minHeight, Math.min(initialHeight, maxHeight)));
    const isDragging = useSharedValue(false);

    const scrollEnabled = useDerivedValue(() => modalHeight.value === maxHeight);

    const [isScrollEnabled, setIsScrollEnabled] = useState(false);

    // Sync derived value to React state
    useEffect(() => {
        setIsScrollEnabled(scrollEnabled.value);
    }, [scrollEnabled.value]);

    useEffect(() => {
        if (visible) {
            translateY.value = withSpring(0, { damping: 15 });
        } else {
            translateY.value = withSpring(SCREEN_HEIGHT, { damping: 15 });
        }
    }, [visible, translateY]);

    const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, GestureContext>({
        onStart: (_, ctx) => {
            isDragging.value = true;
            ctx.startY = translateY.value;
            ctx.startHeight = modalHeight.value;
        },
        onActive: (event, ctx) => {
            if (event.translationY < 0) {
                const newHeight = ctx.startHeight - event.translationY;
                modalHeight.value = Math.min(newHeight, maxHeight);
                translateY.value = 0;
            } else {
                if (modalHeight.value <= minHeight) {
                    translateY.value = ctx.startY + event.translationY;
                } else {
                    const newHeight = ctx.startHeight - event.translationY;
                    modalHeight.value = Math.max(newHeight, minHeight);
                    translateY.value = 0;
                }
            }
        },
        onEnd: () => {
            isDragging.value = false;
            if (translateY.value > SCREEN_HEIGHT * 0.2) {
                translateY.value = withSpring(SCREEN_HEIGHT, { damping: 15 });
                onClose?.();
            } else {
                translateY.value = withSpring(0, { damping: 15 });
            }
        },
    });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
        height: modalHeight.value,
    }));

    return (
        <View style={[styles.container, containerStyle]}>
            <Animated.View style={[styles.modalContainer, animatedStyle]}>
                <View style={[styles.handle, handleStyle]} />
                <ScrollView
                    contentContainerStyle={[styles.content, contentStyle]}
                    scrollEnabled={isScrollEnabled} // Use state here
                    onStartShouldSetResponder={() => {
                        isDragging.value = false;
                        return modalHeight.value === maxHeight;
                    }}
                >
                    {children}
                </ScrollView>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderColor: '#CCC',
    },
    handle: {
        width: 40,
        height: 4,
        backgroundColor: '#DEDEDE',
        borderRadius: 2,
        alignSelf: 'center',
        marginBottom: 10,
    },
    content: {
        flexGrow: 1,
    },
});

export default DraggableResizable;
