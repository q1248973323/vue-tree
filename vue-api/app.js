var express = require("express");
var app = express();
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use("/list", (req, res) => {
  var list = [
    {
      id: "a-1",
      show: false,
      next: [
        {
          id: "b-1",
          next: [{ id: "c-1", title: "三级级标题001" }],
          show: false,
          title: "二级标题001"
        },
        { id: "b-2", next: [], show: false, title: "二级标题002" },
        { id: "b-3", next: [], show: false, title: "二级标题003" },
        { id: "b-4", next: [], show: false, title: "二级标题004" }
      ],
      title: "一级标题A"
    },
    { id: "a-2", next: [
        { id: "b-5", next: [], show: false, title: "二级标题005" },
      ], show: false, title: "一级标题B" },
    { id: "a-3", next: [], show: false, title: "一级标题C" },
    { id: "a-4", next: [], show: false, title: "一级标题D" },
    { id: "a-5", next: [], show: false, title: "一级标题E" }
  ];
  res.send(list);
});
app.listen(8888, () => {
  console.log("服务器正在运行");
});
