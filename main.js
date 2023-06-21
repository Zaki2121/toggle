

let image = document.querySelector("#image");
let title = document.querySelector("#title");
let article = document.querySelector("#article");
let form = document.querySelector("form");
let boxes = document.querySelector(".boxs");


const getPostFromLocalStorage = () => {

    let posts = localStorage.getItem("posts");

    return posts ? JSON.parse(localStorage.getItem("posts")) : [];

}

const LoadPostsFromLocalStorage = () => {



    let postList = getPostFromLocalStorage();

    boxes.innerHTML = "";
    postList.forEach((p) => {




        boxes.innerHTML += `

                <div class="box">
                <div class="imgprent"><img src="${p.image}" alt=""></div>
               <h2>${p.title}</h2>
               <p>${p.article}</p>
        </div>   `;


    })



}

LoadPostsFromLocalStorage();


const addPostToLocalStorage = (postInfo) => {


    let image = postInfo[0].value;
    let title = postInfo[1].value;
    let article = postInfo[2].value;

    let post = {}


    if (image == "" && title == "" && article == "") {

        return;

    } else {
        post = {

            image: image,
            title: title,
            article: article,

        }

    }


    let posts = getPostFromLocalStorage();

    posts.push(post);

    localStorage.setItem("posts", JSON.stringify(posts));


    postInfo[0].value = "";
    postInfo[1].value = "";
    postInfo[2].value = "";
    LoadPostsFromLocalStorage();







}

form.addEventListener("submit", (e) => {

    e.preventDefault();



        addPostToLocalStorage([image, title, article]);
        // LoadPostsFromLocalStorage();




})


let arr = [9, 3, 4, 5];
console.log(arr);






