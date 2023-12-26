'use client'
import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import ButtonUI from '@/commonUl/ButtonUI';
interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    Approve: any;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'User',
        dataIndex: 'name',
    },
    {
        title: 'Bid Amount (AED)',
        dataIndex: 'age',
    },
    {
        title: 'Date And Time',
        dataIndex: 'address',
    },
    {
        title: 'Approve',
        dataIndex: 'Approve',
    },
];

type TablePaginationPosition = NonNullable<TablePaginationConfig['position']>[number];

const topOptions = [
    { label: 'topLeft', value: 'topLeft' },
    { label: 'topCenter', value: 'topCenter' },
    { label: 'topRight', value: 'topRight' },
    { label: 'none', value: 'none' },
];

const bottomOptions = [
    { label: 'bottomLeft', value: 'bottomLeft' },
    { label: 'bottomCenter', value: 'bottomCenter' },
    { label: 'bottomRight', value: 'bottomRight' },
    { label: 'none', value: 'none' },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `AGB Motors ${i}`,
        age: 180.000,
        address: `12 Jun 2023 at 15:29:23  ${i}`,
        Approve: <ButtonUI label='Approve' />,
    });
}

export default function TableBids() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [bottom, setBottom] = useState<TablePaginationPosition>('bottomCenter');

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };
    return (
        <>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{ position: [bottom] }} />
        </>
    )
}
