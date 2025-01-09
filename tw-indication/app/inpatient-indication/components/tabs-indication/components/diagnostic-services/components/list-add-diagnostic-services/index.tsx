import React from 'react';
import ListItemAdd from "@/components/ListItemAdd";
import ItemSelector from "./components/ItemSelector";

interface DiagnosticServicesItem {
    maDVKT: string;
    tenDVKT: string;
    khoaTH: string;
    donGiaBH: number;
    donGiaTT: number;
    chenhLech: number;
    tiLe: number;
    soLuong: number;
    ghiChu: string;
    stt: number;
};

interface ListItemAddDiagnosticServicesProps {
    label: string;
    data: DiagnosticServicesItem[];
};

const ListItemAddDiagnosticServices: React.FC<ListItemAddDiagnosticServicesProps> = ({
    label, data }) => {
    return (
        <ListItemAdd
            label={label}
            data={data}
            customComponent={(item) => (
                <ItemSelector
                    item={item}
                />
            )}
        />
    );
};

export default ListItemAddDiagnosticServices;
