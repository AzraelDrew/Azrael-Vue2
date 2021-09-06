<template>
  <div>

    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle">
        <a-icon type="smile-o" /> Name</span>
      <span slot="tags" slot-scope="tags">
        <a-tag v-for="tag in tags" :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions
          <a-icon type="down" /> </a>
      </span>
    </a-table>
  </div>
</template>
<script>
  const columns = [{
      dataIndex: 'name',
      key: 'name',
      slots: {
        title: 'customTitle'
      },
      scopedSlots: {
        customRender: 'name'
      },
      align: "center"
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      align: "center"
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      align: "center"
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      scopedSlots: {
        customRender: 'tags'
      },
      align: "center"
    },
    {
      title: 'Action',
      key: 'action',
      scopedSlots: {
        customRender: 'action'
      },
      align: "center"
    },
  ];

  const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: 'Azrael',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  export default {
    data() {
      return {
        data,
        columns,
      };
    },
  };
</script>