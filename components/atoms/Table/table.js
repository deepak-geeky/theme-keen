import React from "react";
import "antd/dist/antd.css";
import { Table, Icon, Divider } from "antd";
import Link from "next/link";

const shuffle = str => {
  return str
    .split("")
    .sort(function() {
      return 0.5 - Math.random();
    })
    .join("");
};

const data = [];

for (let i = 1; i <= 100; i++) {
  data.push({
    key: i,
    name: `deepak${i}`,
    age: `${i}`,
    address: `Banglore${i}`
  });
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <Link
        href={`/users/user?userslug=${record.name}`}
        as={`/users/${record.name}/${record.address}`}
      >
        <a>{text}</a>
      </Link>
    )
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a className="ant-dropdown-link">
          More actions <Icon type="down" />
          <Divider type="vertical" />
          <a>Delete</a>
        </a>
      </span>
    )
  }
];

const showHeader = true;
const footer = () => "Here is footer";
const pagination = { position: "bottom" };

class MainTable extends React.Component {
  state = {
    bordered: false,
    loading: false,
    pagination,
    size: "default",
    title: undefined,
    showHeader,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: undefined
  };

  render() {
    const { state } = this;
    return (
      <Table
        {...this.state}
        scroll={{ x: true }}
        columns={columns.map(item => ({ ...item, ellipsis: state.ellipsis }))}
        dataSource={state.hasData ? data : null}
      />
    );
  }
}

export default MainTable;
