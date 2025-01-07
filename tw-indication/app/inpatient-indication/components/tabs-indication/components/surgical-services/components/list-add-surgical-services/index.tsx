import React from 'react';
import ListItemAdd from "@/components/ListItemAdd";
import ItemSelector from "./components/ItemSelector";

interface SurgicalServicesItem {
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

interface ListItemAddSurgicalServicesProps {
    label: string;
    data: SurgicalServicesItem[];
};

const ListItemAddSurgicalServices: React.FC<ListItemAddSurgicalServicesProps> = ({
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

export default ListItemAddSurgicalServices;
