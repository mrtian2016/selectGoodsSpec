//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    specs: [],
    selectedList:{}
  },
  specClick(e) {
    var selectedList = this.data.selectedList;
    let group = e.currentTarget.dataset.gname;
    let value = e.currentTarget.dataset.value;
    selectedList[group] = value;
    var selectSpecArray = [];
    for (let i in selectedList) {
      if (selectedList[i] != '') {
        selectSpecArray.push(selectedList[i]) ;
      }
    }
    let selectSpecStr = selectSpecArray.join(';;')
    console.log(selectSpecStr)
    this.setData( {
      selectedList: selectedList,
      selectSpecStr: selectSpecStr
    })

  },
  onLoad: function () {
    let jsonStr = "{\"specs\":[{\"name\":\"类型\",\"list\":[{\"name\":\"全自动\",\"check\":true,\"span\":1,\"show\":true,\"group\":\"类型\"},{\"name\":\"半自动\",\"check\":true,\"span\":1,\"show\":true,\"group\":\"类型\"}]},{\"name\":\"大小\",\"list\":[{\"name\":\"8公斤\",\"check\":true,\"span\":1,\"show\":true,\"group\":\"大小\"},{\"name\":\"10公斤\",\"check\":true,\"span\":1,\"show\":true,\"group\":\"大小\"}]}]}"
    let spec = JSON.parse(jsonStr);
    var selectedList = this.data.selectedList;
    for (let i in spec.specs) {
      selectedList[spec.specs[i].name] = ''
    }
    this.setData({
      specs: spec.specs,
      selectedList: selectedList
    })
  }
})
