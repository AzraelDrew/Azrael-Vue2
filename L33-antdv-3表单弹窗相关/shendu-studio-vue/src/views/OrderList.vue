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
      <a href="" slot="number" slot-scope="sort">
        {{sort.sort}}
      </a>
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
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      scopedSlots: {
        customRender: 'tags'
      },
    },
    {
      title: "sort",
      key: 'sort',
      dataindex: 'sort',
      scopedSlots: {
        customRender: 'number'
      }
    }

  ];

  const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      sort: "1"
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
      sort: "2"
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