<template>
  <a-layout class="layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">
        LOGO
      </div>
      <a-menu theme="dark" mode="inline" :selected-keys="currentPath">
        <!-- <a-menu-item key="1">
          <router-link to="/userlist">
            <a-icon type="user" />
            <span>用户列表</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/goodlist">
            <a-icon type="video-camera" />
            <span>商品列表</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/orderlist">
            <a-icon type="upload" />
            <span>订单列表</span>
          </router-link>
        </a-menu-item> -->
        <a-menu-item :key="menu.path" v-for="(menu) in menus">
          <router-link :to="menu.path">
            <a-icon :type="menu.icon" />
            <span>
              {{menu.title}}
            </span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">

        <router-view></router-view>

      </a-layout-content>
    </a-layout>

  </a-layout>
</template>
<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
    computed: {
      menus() {
        let menu_routes = this.$router.options.routes.filter(r => !r.meta.hide).sort((a, b) => a.meta.sort - b.meta
          .sort)
        menu_routes = menu_routes.map(r => ({
          path: r.path,
          icon: r.meta.icon,
          title: r.meta.title,
        }))
        return menu_routes;
      },
      currentPath() {
        return [this.$route.path]
      }
    },
    mounted() {}
  };
</script>
<style scoped lang="scss">
  .layout {

    height: 100vh;
    overflow: hidden;

    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }


    }

    .logo {
      line-height: 32px;
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
      margin: 16px;
      text-align: center;
    }
  }
</style>