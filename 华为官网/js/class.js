new Vue({
    el:"#main-list",
    data: {
        item1list1:[
              {img:"images/class/weinituijian/pic1.jpg",name:"荣耀Play"},
              {img:"images/class/weinituijian/pic2.jpg",name:"HUAWEI P20"},
              {img:"images/class/weinituijian/pic3.jpg",name:"荣耀9i"},
              {img:"images/class/weinituijian/pic4.jpg",name:"HUAWEI nova 3e"},
              {img:"images/class/weinituijian/pic5.jpg",name:"荣耀10"},
              {img:"images/class/weinituijian/pic6.jpg",name:"HUAWEI WATCH 2 Pro"},
              
             ],
        item1list2:[
              {img:"images/class/weinituijian/pic7.jpg",name:"荣耀V10"},
              {img:"images/class/weinituijian/pic8.jpg",name:"HUAWEI Mate 10"},
              {img:"images/class/weinituijian/pic9.jpg",name:"荣耀畅玩7X"},
              {img:"images/class/weinituijian/pic10.jpg",name:"华为畅享8"},
              {img:"images/class/weinituijian/pic11.jpg",name:"荣耀畅玩7C"},
              {img:"images/class/weinituijian/pic12.jpg",name:"华为畅享8 Plus"},
              
             ],
        item1list3:[
              {img:"images/class/weinituijian/pic13.jpg",name:"HUAWEI nova 2s"},
              {img:"images/class/weinituijian/pic14.jpg",name:"荣耀9青春版"},
              {img:"images/class/weinituijian/pic15.jpg",name:"荣耀V10"},
              {img:"images/class/weinituijian/pic16.jpg",name:"荣耀畅玩7X"},
              {img:"images/class/weinituijian/pic17.jpg",name:"华为畅享8"},
              
             ],
        item2list1:[
              {img:"images/class/huaweishouji/pic1.jpg",name:"HUAWEI Mate 10"},
              {img:"images/class/huaweishouji/pic2.jpg",name:"HUAWEI P20"},
              {img:"images/class/huaweishouji/pic3.jpg",name:"HUAWEI nova 3e"},
              {img:"images/class/huaweishouji/pic4.jpg",name:"HUAWEI nova 2s"},
              {img:"images/class/huaweishouji/pic5.jpg",name:"华为畅享8"},
              {img:"images/class/huaweishouji/pic6.jpg",name:"HUAWEI P20 Pro"},
             ]
    }
});

var c3lists = document.querySelectorAll(".main>.row>.col-xs-3 .list ul li a");
for(let i=0;i<c3lists.length;i++){
    c3lists[i].onclick = function(){
        for(let j=0;j<c3lists.length;j++){
            c3lists[j].setAttribute("class","");
        }
        this.setAttribute("class","active");
    }
}

