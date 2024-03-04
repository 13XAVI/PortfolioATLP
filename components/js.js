const profileSection = document.getElementById("profile");
const rightSection = document.getElementById("right").parentNode;
const replySection = document.getElementById("queries");
const blogSection = document.getElementById("add-blog");

//admin


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
 
};

const replyQuery = () => {
    
    rightSection.removeChild(document.getElementById("right"));
    rightSection.appendChild(replySection);
    replySection.style.display = "block";
    
};

const addBlog = () => {
   
    rightSection.removeChild(document.getElementById("right"));
    rightSection.appendChild(blogSection);
    blogSection.style.display = "block";
   
};

const formBlog = document.getElementById("form-submit");
formBlog.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const postTitle = document.getElementById("post-title").value.trim();
    const author = document.getElementById("url-slug").value.trim();
    const postDescription = document.getElementById("post-description").value.trim();
    const postThumbnail = document.getElementById("post-thumbnail").value.trim();
    const postDate = document.getElementById("post-date").value.trim();
    const emailNotification = document.getElementById("email-notification").value;

    const errorSpanTitle = document.getElementById("error1");
    const errorSpanAuthor = document.getElementById("error2");
    const errorSpanDescription = document.getElementById("error3");
    const errorSpanImage = document.getElementById("error4");
    const errorSpanDate = document.getElementById("error5");
    const errorSpanNotification = document.getElementById("error6");
    const errorSuccess = document.getElementById("error-success")
    
    errorSpanTitle.innerText = ""; 
    errorSpanAuthor.innerText = "";
    errorSpanDescription.innerText = "";
    errorSpanImage.innerText = "";
    errorSpanDate.innerText = "";
    errorSpanNotification.innerText = "";

    if (postTitle === "") {
        errorSpanTitle.innerText = "Please enter a post title.";
        return;
    }

    if (author === "") {
        errorSpanAuthor.innerText = "Please enter an author.";
        return;
    }

    if (postDescription === "") {
        errorSpanDescription.innerText = "Please enter a post description.";
        return;
    }

    if (postThumbnail === "") {
        errorSpanImage.innerText = "Please upload a post thumbnail.";
        return;
    }

    if (postDate === "") {
        errorSpanDate.innerText = "Please select a post date.";
        return;
    }

    if (emailNotification === "") {
        errorSpanNotification.innerText = "Please select an email notification option.";
        return;
    }

    const formData = {
        postTitle: document.getElementById("post-title").value.trim(),
        author: document.getElementById("url-slug").value.trim(),
        postDescription: document.getElementById("post-description").value.trim(),
        postThumbnail: document.getElementById("post-thumbnail").value.trim(),
        postDate: document.getElementById("post-date").value.trim(),
        emailNotification: document.getElementById("email-notification").value
    };
        if(formData){
            localStorage.setItem("Form Data",JSON.stringify(formData))
            errorSuccess.innerHTML = "<br/>Data Sent succesfully "
        }
    
    



}



