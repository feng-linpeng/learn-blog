/**
 * collapsible 开启折叠
 * collapsed 默认折叠
 */
 const allViews = [
  {items: [{ text: "日常记录", link: "/views/all/index" }]}
];
const cssViews = [
  {
    items: [
      { text: "css属性", link: "/views/css/index" },
      { text: "文本处理", link: "/views/css/text" },
      { text: "居中方法", link: "/views/css/center" },
    ],
  },
];
const jsViews = [
{
  text: "JS",
  collapsible: true, // 开启折叠
  collapsed: true,
  items: [
    { text: "Index", link: "/views/js/index" },
    { text: "Function", link: "/views/js/function" },
  ],
},
]
const tsViews = [
      {
        text: "TypeScript",
        items: [
          {text:"ts学习记录",link: "/views/ts/index.md"}
        ]
      },
      {
        text: "Ts方法",
        items: [
          { text: "Debounce", link: "/views/ts/function/debounce" },
          { text: "Throttle", link: "/views/ts/function/throttle" },
          { text: "FormateDate", link: "/views/ts/function/formatDate" }
        ],
      },
];
const vueViews = [
  {
        text: "Vue",
        items: [{ text: "Index", link: "/views/vue/index" }],
  },
];
const reactViews = [
  {
        text: "React",
        items: [{ text: "Index", link: "/views/react/index" }],
  },
];
const toolsViews = [
  {
    text: "环境&工具",
    items: [
      { text: "Git", link: "/views/tools/git" },
      { text: "Node", link: "/views/tools/node" },
      { text: "VsCode", link: "/views/tools/vscode" }
    ],
  }
];

export default {
      "/views/all/": allViews,
      "/views/css/": cssViews,
      "/views/js/": jsViews,
      "/views/ts/": tsViews,
      "/views/vue/": vueViews,
      "/views/react/": reactViews,
      "/views/tools/": toolsViews,
};