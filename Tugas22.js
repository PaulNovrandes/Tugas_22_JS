var data = "Saya ingin belajar bersama";
var data2;

function panggilForEach(){
  console.log(data);
  data2 = data.split(' ');
  // console.log(data2);
  data2.forEach((item, i) => {
    console.log("Item : ", item,"index ke", i);
  });

}

panggilForEach();
