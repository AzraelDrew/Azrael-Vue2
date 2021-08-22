export default [{
    path: "/",
    redirect: "/aaa",
    component: () => import("@/views/Home"),
    children: [{
        path: "/aaa",
        redirect: "/ccc",
        component: () => import("@/views/AAA"),
        children: [{
            path: "/ccc",
            component: () => import("@/views/CCC")
          },
          {
            path: "/ddd",
            component: () => import("@/views/DDD")
          },
        ]
      },
      {
        path: "/bbb",
        component: () => import("@/views/BBB")
      },
    ]
  }, {
    path: "/login",
    component: () => import("@/views/Login")
  },

]