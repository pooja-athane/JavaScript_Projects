const users = [
  {
    name: "Pooja Athane",
    pic: "https://i.pravatar.cc/150?img=47",
    bio: "Frontend Developer | HTML, CSS, JavaScript"
  },
  {
    name: "Rahul Sharma",
    pic: "https://i.pravatar.cc/150?img=12",
    bio: "Backend Developer | Node.js & MongoDB"
  },
  {
    name: "Sneha Patil",
    pic: "https://i.pravatar.cc/150?img=32",
    bio: "UI/UX Designer | Figma & Adobe XD"
  },
  {
    name: "Amit Verma",
    pic: "https://i.pravatar.cc/150?img=15",
    bio: "Full Stack Developer | MERN Stack"
  },
  {
    name: "Neha Kulkarni",
    pic: "https://i.pravatar.cc/150?img=28",
    bio: "Software Tester | Manual & Automation"
  }
];

function showUsers(arr){
arr.forEach(function(user) {
    // card
    let card = document.createElement("div");
    card.classList.add("card");

    // image
    let img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // blur layer
    let blur = document.createElement("div");
    blur.classList.add("Blurred-layer");

    // content
    let content = document.createElement("div");
    content.classList.add("content");

    let h3 = document.createElement("h3");
    h3.textContent = user.name;

    let p = document.createElement("p");
    p.textContent = user.bio;

    // append text
    content.appendChild(h3);
    content.appendChild(p);

    // append card elements
    card.appendChild(img);
    card.appendChild(blur);
    card.appendChild(content);

    // append card to container
    document.querySelector(".cards").appendChild(card);
  });
}

// initial render
showUsers(users);

real-time search
searchInput.addEventListener("input", function () {
  let value = this.value.toLowerCase();

  let filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(value)
  );

  showUsers(filteredUsers);

});

showUsers(users)

// user show
// filter krna har bar input krne pe
// show krna filtered users
