// const container=document.querySelector(".container"),
//     privacy=container.querySelector(".privacy"),
//     arrowBack=container.querySelector(".arrow-back");


//     privacy.addEventListener("click",() =>{
//         container.classList.add("active");

//     });

//     arrowBack.addEventListener("click",() =>{
//         container.classList.remove("active");

//     });

// var btn1=document.querySelector('.like1');

// btn1.onclick=function(){
//      btn1.style.color="blue"
// }  
// var btn2=document.querySelector('.like2');

// btn2.onclick=function(){
//      btn2.style.color="blue"
// }   
// var btn3=document.querySelector('.like3');

// btn3.onclick=function(){
//      btn3.style.color="blue"
// }   
// var btn4=document.querySelector('.like4');

// btn4.onclick=function(){
//      btn4.style.color="blue"
// }   
// var btn5=document.querySelector('.like5');

// btn5.onclick=function(){
//      btn5.style.color="blue"
// } 


const btn=document.querySelectorAll('.like1')
for(let i of btn)
{
     console.log(i);
     i.addEventListener('click',function(){
          i.style.color="blue";
     });
}
let requests = document.querySelector('#button-block');
let req=document.querySelector('.all-requests')
let deleterequest = document.getElementById('delete');
deleterequest.addEventListener('click', ()=>{
  req.remove();
  
})

let confirmrequest = document.getElementById('confirm');
confirmrequest.addEventListener('click', ()=>{
  deleterequest.style.display = 'none';
  confirmrequest.innerHTML = "Confirmed";
})
const btnn=document.querySelector('.newbtn');
const input=document.querySelector("textarea");
const post=document.querySelector('.all_posts');
function addPost(event){
  const val=input.value;
  let postHtml=
  `            <div class="friends_post">

  <div class="friend_post_top">

      <div class="img_and_name">

         

          <div class="friends_name">
              <p class="friends_name">
                  Senuda De Silva
              </p>
              <p class="time">16h.<i class="fa-solid fa-user-group"></i></p>
          </div>
          

      </div>

      <div class="menu">

          <i class="fa-solid fa-ellipsis"></i>

      </div>

  </div>
<p>${val}</p>
  

  <div class="info">

      <div class="emoji_img">
          <img src="image/like.png">
          <img src="image/haha.png">
          <img src="image/heart.png">
          <p>You, Pusspinder Thakur and 25K others</p>
      </div>

      <div class="comment">
          <p>421 Comments</p>
          <p>1.3K Shares</p>
      </div>

  </div>

  <hr>

  <div class="like">

      <div class="like_icon">
          <i class="fa-solid fa-thumbs-up like1"></i>
          <p>Like</p>
      </div>

      <div class="like_icon">
          <i class="fa-solid fa-message"></i>
          <p>Comments</p>
      </div>

      <div class="like_icon">
          <i class="fa-solid fa-share"></i>
          <p>Share</p>
      </div>

  </div>

  <hr>

  <div class="comment_warpper">

      <img src="image/profile.png">
      <div class="circle"></div>

      <div class="comment_search">

          <input type="text" placeholder="Write a comment">
          <i class="fa-regular fa-face-smile"></i>
          <i class="fa-solid fa-camera"></i>
          <i class="fa-regular fa-note-sticky"></i>

      </div>

  </div>

</div>`
  post.innerHTML+=postHtml
}
btnn.addEventListener("click",addPost)
btnn.addEventListener("click",function(){
  input.value="";
})
