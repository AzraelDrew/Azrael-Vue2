<template>
  <div>

    <a-table :columns="columns" :data-source="data" :pagination="pagerConfig" @change="handleTableChange">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle">
        <a-icon type="smile-o" /> Name</span>
      <span slot="customStatus">STATUS</span>
      <span slot="tags" slot-scope="tags">
        <a-tag v-for="tag in tags" :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="">
        <a @click="handleTableDelete">
          <a-icon type="delete"></a-icon>
          Delete
        </a>
      </span>
      <a-tag slot="status" slot-scope="status" :color="status===0 ? '#eb2f06':'blue'">
        <a>{{status | fmtGoodsTypeStatus}}</a>
      </a-tag>
    </a-table>
  </div>
</template>
<script>
  import data from "~/data"
  const columns = [{
      dataIndex: 'name',
      key: 'name',
      slots: {
        title: 'customTitle'
      },
      scopedSlots: {
        customRender: 'name'
      },
      align: 'center'
    },
    {
      // title: "Status",
      dataIndex: "status",
      key: "status",
      slots: {
        title: "customStatus"
      },
      scopedSlots: {
        customRender: 'status'
      },
      align: 'center',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      scopedSlots: {
        customRender: 'tags'
      },
      align: 'center'
    },
    {
      title: 'CreateTime',
      dataIndex: 'createTime',
      key: 'createTime',
      align: 'center'
    },
    {
      title: 'Action',
      key: 'action',
      scopedSlots: {
        customRender: 'action'
      },
      align: 'center'
    },
  ];


  export default {
    data() {
      return {
        data,
        columns,
        // table_loding: true,
        pagerConfig: {
          // current: 1,
          pageSize: 5,
          total: data.length + 100,
        }
      };
    },
    filters: {
      fmtGoodsTypeStatus(val) {
        return ["已删除", "待发布", "已发布"][val]
      }
    },
    methods: {

      handleTableChange(pagination) {
        console.log(pagination);
      },

      /* 将此方法混入全局 */
      // msg(message, description) {
      //   this.$notification.success({
      //     message,
      //     description
      //   });
      // },
      async handleTableDelete() {
        // this.$mc().then(() => {
        //   this.$ms()
        // })

        await this.$mc()
        this.$ms()
      },
      // async getList() {
      //   let list = await this.$get("/goodstype/listByPid?pageIndex=1&pageSize=10&keywords=")
      // }
    },
    created() {
      // this.getList();
      this.$ms("登录成功")

    }
  };
</script>