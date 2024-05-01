import React from "react";
import { Table, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { delete_SV, edit_SV } from "../../redux/slice/sinhVienSlice";

const columns = [
  {
    title: "Mã SV",
    dataIndex: "maSV",
    key: "maSV",
  },
  {
    title: "Họ tên",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "Số điện thoại",
    dataIndex: "sdt",
    key: "sdt",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Chức năng",
    render: (text, record) => {
      // console.log(record);
      return (
        <Space>
          <button
            className="bg-yellow-400 px-3 py-2 text-white rounded hover:bg-yellow-500"
            onClick={() => {
              dispatch(edit_SV(record.maSV));
            }}
          >
            <i className="fa-solid fa-pencil"></i> Sửa
          </button>
          <button
            onClick={() => {
              dispatch(delete_SV(record.maSV));
            }}
            className="bg-red-600 px-3 py-2 text-white rounded hover:bg-red-700"
          >
            <i className="fa-solid fa-trash-can"></i> Xóa
          </button>
        </Space>
      );
    },
  },
];
const TableUser = () => {
  const { list_SV } = useSelector((state) => state.sinhVien);
  const dispatch = useDispatch();
  return (
    <Table
      dataSource={list_SV}
      columns={columns}
      pagination={{ defaultPageSize: 20 }}
    />
  );
};

export default TableUser;
