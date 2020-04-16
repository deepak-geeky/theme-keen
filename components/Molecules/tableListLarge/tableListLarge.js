
// import React from 'react';
// import 'antd/dist/antd.css';
// import './tableListLarge.css';
// import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: text => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },{
//     title: 'Address 2',
//     dataIndex: 'secondaryAddress',
//     key: 'address',
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (text, record) => (
//       <span>
//         <a className="ant-dropdown-link">
//           More actions <Icon type="down" />
//         </a>
//       </span>
//     ),
//   },
// ];

// const data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push({
//     key: i,
//     name: 'John Brown',
//     age: `${i}2`,
//     address: `New York No. ${i} Lake Park`,
//     secondaryAddress: `New York No. ${i} Lake Park`,
//   });
// }

// const showHeader = true;
// const pagination = { position: 'bottom' };

// export default class TableListLarge extends React.Component {
//   state = {
//     pagination,
//     size: 'default',
//     showHeader,
//     rowSelection: {},
//     scroll: true,
//     hasData: true,
//   };
//   render() {
//     const { state } = this;
//     return (
//       <div className=' table-list-large-conatainer'>
//         <Table
//           {...this.state}
//           columns={columns.map(item => ({ ...item, ellipsis: state. ellipsis }))}
//           dataSource={state.hasData ? data : null}
//         />
//       </div>
//     );
//   }
// }
