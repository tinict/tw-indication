import React from 'react';
import {
    FontAwesome5,
    FontAwesome6,
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    Fontisto,
    AntDesign,
    Entypo
} from '@expo/vector-icons';

type IconProps = {
    name: string;
    size?: number;
    color?: string;
    library?: string;
    style?: object;
};

const Icon: React.FC<IconProps> = ({
    name,
    size = 24,
    color = '#000',
    library = 'FontAwesome5',
    style = {},
}) => {
    let IconComponent: React.ElementType;

    switch (library) {
        case 'Ionicons':
            IconComponent = Ionicons;
            break;
        case 'MaterialIcons':
            IconComponent = MaterialIcons;
            break;
        case 'AntDesign':
            IconComponent = AntDesign;
            break;
        case 'FontAwesome5':
            IconComponent = FontAwesome5;
            break;
        case 'FontAwesome6':
            IconComponent = FontAwesome6;
            break;
        case 'Fontisto':
            IconComponent = Fontisto;
            break;
        case 'Entypo':
            IconComponent = Entypo;
            break;
        case 'MaterialCommunityIcons':
            IconComponent = MaterialCommunityIcons;
            break;
        case 'FontAwesome':
        default:
            IconComponent = FontAwesome5;
            break;
    }

    return <IconComponent name={name} size={size} color={color} style={style} />;
};

export default Icon;
