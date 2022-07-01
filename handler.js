var data = [];
var loading = false;
window.addEventListener("load", async () => {
  const getData = async () => {
    return await fetch("./products.json").then((res) => res.json());
  };
  data = await getData();
  data = data.products ? data.products : [];
  const search = (search, limit = 5) => {
    search = search.toLowerCase();
    return new Promise((resolve, reject) => {
      let result = data
        .filter((x) => x.title.toLowerCase().includes(search))
        .slice(0, limit);
      setTimeout(() => resolve(result), 3000);
    });
  };
  let date = new Date().getTime();
  loading = true;
  console.log("loading ...");
  let searchData = await search("iPhone 9");
  loading = false;
  console.log(searchData, new Date().getTime() - date);
});
