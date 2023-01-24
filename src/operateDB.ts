/**
 * 创建数据库&新建表和索引
 */

let db = undefined;
const DBrequest = window.indexedDB.open("userDB", 1);
DBrequest.onerror = function (error) {
  console.log("indexedDB 打开失败", error);
};

DBrequest.onsuccess = function (res) {
  console.log("indexedDB 打开成功", res);
  db = res.target.result;
};

/*
 *数据仓库升级事件(第一次新建库是也会触发，因为数据仓库从无到有算是升级了一次)
 */
DBrequest.onupgradeneeded = function (res) {
  console.log("IndexedDB 升级成功", res);
  db = res.target.result;
  //   创建ObjecStore, 等同于创建表
  db_table = db.createObjectStore("user", { keyPath: "id" });
  db_table.createIndex("indexName", "name", { unique: false });
};

/**
 * 新增数据
 */
const useStore = db.transaction(["user"], "readwrite").objectStore("user");

const tableRequest = useStore.add({
  id: 1,
  name: "张三",
  age: 12,
  email: "1234@email.com",
});

tableRequest.onsuccess = function (event) {
  console.log("数据添加成功", event);
};

tableRequest.onerror = function (event) {
  console.log("数据添加失败", event);
};
