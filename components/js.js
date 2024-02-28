const profileSection = document.getElementById("profile");
const rightSection = document.getElementById("right").parentNode;
const replySection = document.getElementById("queries");
const blogSection = document.getElementById("add-blog");

const changeProfile = () => {
   
    rightSection.removeChild(document.getElementById("right"));
    rightSection.appendChild(profileSection);
    profileSection.style.display = "block";

};

const returnHome = () => {
   
    while (rightSection.firstChild) {
        rightSection.removeChild(rightSection.firstChild);
    }
    blogSection.style.display = "none";
    replySection.style.display = "none";
    rightSection.appendChild(document.getElementById("right"));
    location.reload();
};

const replyQuery = () => {
    
    rightSection.removeChild(document.getElementById("right"));
    rightSection.appendChild(replySection);
    replySection.style.display = "block";
    location.reload();
};

const addBlog = () => {
   
    rightSection.removeChild(document.getElementById("right"));
    rightSection.appendChild(blogSection);
    blogSection.style.display = "block";
   
};
