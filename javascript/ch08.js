/** @format */

// 클래스가 load-posts 인 버튼을 클릭하면 https://jsonplaceholder.typicode.com/posts
// 의 데이터를 fetch해 .posts에 채운다. (async & await 사용)
// template: post-item-template 사용.

onload = function () {
  const userButton = document.querySelector(".load-git-users");
  userButton.onclick = function () {
    function fillUsers(userList) {
      const template = document.querySelector("#github-user-template");
      const users = document.querySelector(".github-users");

      users.innerHTML = "";

      userList.forEach(function (eachUser) {
        const userDom = document.importNode(template.content, true);
        userDom.querySelector("a").setAttribute("href", eachUser.html_url);
        userDom.querySelector("img").setAttribute("src", eachUser.avatar_url);
        userDom.querySelector(".user-name").innerText = eachUser.login;
        users.append(userDom);
      });
    }
    (async function () {
      try {
        const fetchResult = await fetch(
          "https://api.github.com/users",
        );
        const body = await fetchResult.json();
        console.log(body);
        fillUsers(body);
      } catch (e) {
        console.log(e.message);
      }
    })();
  };

  // post 불러오기 추가 작성.
  const postsButton = document.querySelector(".load-posts");
  postsButton.onclick = function () {
    function fillPosts(postList) {
      const template = document.querySelector("#post-item-template");
      const posts = document.querySelector(".posts");

      posts.innerHTML = "";

      postList.forEach(function (eachPost) {
        const postDom = document.importNode(template.content, true);
        postDom.querySelector("li").dataset.userId = eachPost.userId;
        postDom.querySelector("li").dataset.id = eachPost.id;
        postDom.querySelector(".title").innerText = eachPost.title;
        postDom.querySelector(".body").innerText = eachPost.body;

        postDom.querySelector(".title").onclick = function () {
          const body = this.nextElementSibling;
          if (body.style.display === "none" || !body.style.display) {
            body.style.display = "block";
          } else {
            body.style.display = "none";
          }
        };

        posts.append(postDom);
      });
    }
    (async function () {
      try {
        const fetchResult = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const body = await fetchResult.json();
        console.log(body);
        fillPosts(body);
      } catch (e) {
        console.log(e.message);
      }
    })();
  };

  const commentsButton = document.querySelector(".load-comments");
  commentsButton.onclick = function () {
    function fillComments(commentList) {
      const template = document.querySelector("#comments-item-template");
      const comments = document.querySelector(".comments");

      comments.innerHTML = "";
      console.log(comments.childNodes.length);

      commentList.forEach(function (eachComment) {
        const commentDom = document.importNode(template.content, true);
        commentDom.querySelector("li").dataset.postId = eachComment.postId;
        commentDom.querySelector(".name").innerText = eachComment.name;
        commentDom.querySelector(".email").innerText = eachComment.email;
        commentDom.querySelector(".body").innerText = eachComment.body;

        comments.append(commentDom);
      });
    }

    (async function () {
      try {
        const fetchResult = await fetch(
          "https://jsonplaceholder.typicode.com/comments",
        );
        const body = await fetchResult.json();
        console.log(body);
        fillComments(body);
      } catch (e) {
        console.log(e.message);
      }
    })();
  };
};
