import React from 'react';
import ListItemAdd from "@/components/ListItemAdd";
import ItemSelector from "./components/ItemSelector";

interface MedicineItem {
    id: string;
    tenThuoc: string;
    hoatChat: string;
    maHoatChat: string;
    dvt: string;
    giaBHYT: number;
    tonKho: number;
    tonDuTinh: number;
};

interface ListItemAddMedicinesProps {
    label: string;
    data: MedicineItem[];
};

const ListItemAddMedicines: React.FC<ListItemAddMedicinesProps> = ({
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

export default ListItemAddMedicines;
