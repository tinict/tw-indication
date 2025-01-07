import React from 'react';
import { Text, View } from 'react-native';
import FullscreenModal from '@/components/modals/FullscreenModal';

interface MedicineItem {
    tenThuoc: string;
    hoatChat: string;
    maHoatChat: string;
    dvt: string;
    giaBHYT: number;
    tonKho: number;
    tonDuTinh: number;
};

interface ModalSelectorMedicinesProps {
    data: MedicineItem[];
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalSelectorMedicines: React.FC<ModalSelectorMedicinesProps> = ({
    data,
    isModalVisible,
    setIsModalVisible,
}) => {
    return (
        <FullscreenModal
            data={data}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            onSelected={(item: MedicineItem) => {
                console.log(item);
            }}
            customComponent={(item: MedicineItem) => {
                return (
                    <View>
                        <Text>{item?.tenThuoc}</Text>
                        <Text>
                            Hc: {item?.hoatChat} |{" "}
                            <Text>{item?.maHoatChat}</Text>
                        </Text>
                        <Text>
                            DVT: {item.dvt}
                        </Text>
                        <Text>
                            Giá BHYT:{" "}
                            {Number(item?.giaBHYT).toLocaleString("vi", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </Text>
                        <Text>
                            Tồn kho:{" "}
                            {Number(item?.tonKho).toLocaleString("vi-VN", {
                                style: "decimal",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            })}{" "}
                            {item?.dvt}
                        </Text>
                        <Text>
                            Tồn dự tính:{" "}
                            {Number(item?.tonDuTinh).toLocaleString("vi-VN", {
                                style: "decimal",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            })}{" "}
                            {item?.dvt}
                        </Text>
                    </View>
                );
            }}
        />
    );
};

export default ModalSelectorMedicines;
