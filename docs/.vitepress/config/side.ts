/**
 * collapsible 开启折叠
 * collapsed 默认折叠
 */
 const allViews = [
  {
        text: "日常记录",
        items: [{ text: "乱七八糟的记录", link: "/views/all/index" }],
  },
];
const cssViews = [
  {
        text: "Css",
        items: [{ text: "Index", link: "/views/css/index" }],
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
const engineeringViews = [
  {
        text: "Engineering",
        items: [{ text: "Index", link: "/views/engireering/index" }],
  },
];

export default {
  "/views/all/": allViews,
  "/views/css/": cssViews,
  "/views/js/": jsViews,
  "/views/ts/": tsViews,
  "/views/vue/": vueViews,
  "/views/react/": reactViews,
  "/views/engineering/": engineeringViews,
};