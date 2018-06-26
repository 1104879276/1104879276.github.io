new Vue({
    el:"#list",
    data: {
        list:[
              {name: "HUAWEI P20",img: 'images/shop-car/pic1.jpg',price:'￥ 4288'},
              {name: "荣耀10",img: 'images/shop-car/pic2.jpg',price:'￥ 2599'},
              {name: "HUAWEI Mate 10",img: 'images/shop-car/pic3.jpg',price:'￥ 3999'},
              {name: "荣耀V 10",img: 'images/shop-car/pic4.jpg',price:'￥ 2299'},
              {name: "HUAWEI nova 3e",img: 'images/shop-car/pic5.jpg',price:'￥ 2199'},
              {name: "荣耀9青春版",img: 'images/shop-car/pic6.jpg',price:'￥ 999'},
              {name: "HUAWEI P20",img: 'images/shop-car/pic1.jpg',price:'￥ 4288'},
              {name: "荣耀10",img: 'images/shop-car/pic2.jpg',price:'￥ 2599'},
              {name: "HUAWEI Mate 10",img: 'images/shop-car/pic3.jpg',price:'￥ 3999'},
              {name: "荣耀V 10",img: 'images/shop-car/pic4.jpg',price:'￥ 2299'},
              {name: "HUAWEI nova 3e",img: 'images/shop-car/pic5.jpg',price:'￥ 2199'},
              {name: "荣耀9青春版",img: 'images/shop-car/pic6.jpg',price:'￥ 999'},
              {name: "HUAWEI P20",img: 'images/shop-car/pic1.jpg',price:'￥ 4288'},
              {name: "荣耀10",img: 'images/shop-car/pic2.jpg',price:'￥ 2599'},
              {name: "HUAWEI Mate 10",img: 'images/shop-car/pic3.jpg',price:'￥ 3999'},
              {name: "荣耀V 10",img: 'images/shop-car/pic4.jpg',price:'￥ 2299'},
              {name: "HUAWEI nova 3e",img: 'images/shop-car/pic5.jpg',price:'￥ 2199'},
              {name: "荣耀9青春版",img: 'images/shop-car/pic6.jpg',price:'￥ 999'},
              {name: "HUAWEI P20",img: 'images/shop-car/pic1.jpg',price:'￥ 4288'},
              {name: "荣耀10",img: 'images/shop-car/pic2.jpg',price:'￥ 2599'},
             ]
    }
});

var list = document.querySelectorAll("#list .col-xs-6");
for(let i=0;i<list.length;i++){
    if(i%2==0){
        list[i].style.borderRight = "1px solid #eaeaea";
        console.log(i);
    }
}
