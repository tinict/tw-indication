import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface InfoPatientProps {
    soVv: string;
    maBA: string;
    hoTen: string;
    gioiTinh: string;
    ngaySinh: string;
    ngayVaoVien: string;
    bsKhamVaoVien: string;
    cDoan: string;
    khoaVaoVien: string;
    phongGiuong: string;
    icdvv: string;
    tenBenhVaoVien: string;
    diaChi: string;
    soDienThoai: string;
};

export default function InfoPatient(data: InfoPatientProps) {
    return (
        <View style={styles.card}>
            <View style={styles.divider} />

            <Text style={styles.infoText}>
                <Text style={styles.label}>Số Vv:</Text> {data.soVv}
            </Text>

            <Text style={styles.infoText}>
                <Text style={styles.label}>Mã BA:</Text> {data.maBA}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.infoText}>
                <Text style={styles.label}>Họ tên:</Text> {data.hoTen}
            </Text>

            <Text style={styles.infoText}>
                <Text style={styles.label}>Giới tính:</Text> {data.gioiTinh}
            </Text>

            <Text style={styles.infoText}>
                <Text style={styles.label}>Chẩn đoán:</Text> {data.cDoan}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.infoText}>
                <Text style={styles.label}>Ngày sinh:</Text> {data.ngaySinh}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.infoText}>
                <Text style={styles.label}>Ngày vào viện:</Text> {data.ngayVaoVien}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.infoText}>
                <Text style={styles.label}>BS khám vv:</Text> {data.bsKhamVaoVien}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.infoText}>
                <Text style={styles.label}>Khoa vv:</Text> {data.khoaVaoVien}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.infoText}>
                <Text style={styles.label}>Phòng/Giường:</Text> {data.phongGiuong}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.infoText}>
                <Text style={styles.label}>ICD Vv:</Text> {data.icdvv} /{" "}
                <Text style={styles.label}>{data.tenBenhVaoVien}</Text>
            </Text>

            <View style={styles.divider} />

            <Text style={styles.infoText}>
                <Text style={styles.label}>Địa chỉ:</Text> {data.diaChi}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.infoText}>
                <Text style={styles.label}>SĐT:</Text> {data.soDienThoai}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 12,
        backgroundColor: "#ffffff",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
    divider: {
        borderBottomColor: "#e0e0e0",
        borderBottomWidth: 1,
        marginVertical: 6,
    },
    infoText: {
        fontSize: 16,
        color: "#4d4d4d",
        marginBottom: 6,
        lineHeight: 24,
    },
    label: {
        fontWeight: "600",
        color: "#007AFF",
    },
});
