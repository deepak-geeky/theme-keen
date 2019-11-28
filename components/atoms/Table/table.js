import React from "react";
import "antd/dist/antd.css";
import { Table, Icon, Divider } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
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

const data = [];
for (let i = 1; i <= 100; i++) {
  data.push({
    key: i,
    name: "John Brown",
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`
  });
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => "Here is title";
const showHeader = true;
const footer = () => "Here is footer";
const scroll = { y: 240 };
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
      <div>
        <Table
          {...this.state}
          columns={columns.map(item => ({ ...item, ellipsis: state.ellipsis }))}
          dataSource={state.hasData ? data : null}
        />
      </div>
    );
  }
}


export default  MainTable