var images = ["https://i.postimg.cc/nh7tcWcf/WIN-20211201-10-22-25-Pro-2.jpg", "https://i.postimg.cc/wT1pnvCv/WIN-20211201-10-22-41-Pro-2.jpg", "https://i.postimg.cc/mZX4dM6J/WIN-20211201-10-22-16-Pro.jpg","https://i.postimg.cc/kXLmCCCy/WIN-20211201-10-22-34-Pro-2.jpg"];
var names = ["Mom", "Dad", "Me", "Sister"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}
