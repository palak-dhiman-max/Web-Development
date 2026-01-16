 //i want to add a elemnt after h1 tag using js

 //firstly we create the elemnt that we want to insert

 const element = document.createElement("h2");
 //now add some content to it
 element.textContent="Strike is coming";
 element.style.color="aqua";
 element.id = "first";

 //now select the tag jiske baad h2 ko dalna hai

 const select = document.getElementById("second");
 select.after(element);
 // select.before(element);

 //console.dir(element);

 //creating another elemnt 
 const element2 = document.createElement("h3");
 element2.textContent="Diwali is Coming";
 element2.id="third";
 //element2.className="diwali";
 //element2.className += " holi";

 //good way to make class
 element2.classList.add("hello");
 element2.classList.add("ji");
 //element2.classList.remove("ji");
 element2.style.backgroundColor = "pink";
 element2.style.color="black";
 element2.style.fontSize="30px";

 //inserting element before hello coder army
 //select.before(element2);
 //console.log(element2);

 //insert diwali after strike is coming
const select2 = document.getElementById("first");
//console.log(select2);
select2.after(element2);


//get attributes of class
//console.log(element2.getAttribute("class"));

//we can set  attributes as well 
console.dir(element2)         //attributename/value
console.log(element2.setAttribute("id","palak"));
console.log(element2.getAttribute("id"));
console.dir(element2)


//crete elemnt inside unordered list
const list1 = document.createElement("li");
list1.textContent="Milk";


const list2 = document.createElement("li");
list2.textContent="Cake";

const list3 = document.createElement("li");
list3.textContent="Bread";

const list4 = document.createElement("li");
list4.textContent="Fruit";

const select3= document.getElementById("listing");
//select3.append(list1 ,list2);  //unordered list ke andar dalne ke liye (at end ek ke baad ek)

//select3.append(list3);
//select3.prepend(list3); //pahle daal do list ka pahla elemnt


//beech me kahi bhi so we use this

//one way 
//list2.after(list4);

//another way
//select3.children[2].after(list4);


//real world senario we have have data in form of array and we have to add all the items in list
const arr =["milk","paneer","halwa","fruit","icecream","tofu","tea"];

//yaha 1000 data bhi ho sakta hai to hum manually to chizo ko nahi dalenge list me to isliye loop use kar lete hai

// for(let food of arr){
//    const lis = document.createElement("li");
//    lis.textContent=food;
//    select3.append(lis);
// }

// yaha apped bara bar call hoga jiski vagha se baar barr mai ui ko chnage kar rahi hu so there is a lot of strss on ui
// to agar mai pahle sab list ko create kar lu fir ek saath bhej du to meri problem solve ho jayegi
const fragment = document.createDocumentFragment();
for(let food of arr){
   const lis = document.createElement("li");
   lis.textContent=food;
   fragment.append(lis);
}

select3.append(fragment);

const s = document.getElementById("pal");

//deletion operation jo list hamne banai thi aab vo remove ho gai hai
//s.remove();

console.log(s.childNodes) // so i am getting a list which consist of text as well on its indexs ye aa raha hai kuki next line ko text ke andar store kar liya in form of(/n)
console.log(s.children) //it give all four list

//old methods to add something on ui
const lister = document.createElement("li");
//lister.textContent="rice";
//s.insertAdjacentElement("beforebegin",lister); // unordered list se bahar(uske uper) hum elemnt ko insert kar denge uper 
//s.insertAdjacentElement("afterend",lister); //list lkhtam hone ke baad dal do 

//dont use innerhtml to add your content because it is very dangerous .
//lister.textContent="<h2>help</h2>";  //it will write the text
//lister.innerHTML="<h2>help</h2>" //it will make help a heading
//s.prepend(lister);

//inserting a image in textcontent and innerhtml
//lister.textContent="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s'>";
lister.innerHTML="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s'>"
s.prepend(lister);