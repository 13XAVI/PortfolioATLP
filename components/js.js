document.addEventListener("DOMContentLoaded", function() {
    const formBlog = document.getElementById("form-submit");
   
    formBlog.addEventListener("submit", function submitForm(e) {
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
        const errorSuccess = document.getElementById("error-success");
    
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
            postTitle: postTitle,
            author: author,
            postDescription: postDescription,
            postThumbnail: postThumbnail,
            postDate: postDate,
            emailNotification: emailNotification
        };
        
        localStorage.setItem("Form Data", JSON.stringify(formData));
        errorSuccess.innerHTML = "<br/>Data Sent successfully ";
    
        const blogItem = document.querySelector(".blog-item");
        blogItem.innerHTML = `
            <h2 class="blog-name">${postTitle}</h2>
            <div class="image-blog">
                <img src="${postThumbnail}" alt="" class="image-blogz">
            </div>
            <div class="blog-title">
                <p class="author-blog">${author}</p>
            </div>
            <div class="descr">
                <p class="descr-header">Description</p>
                <p class="descr-paragraph">${postDescription}</p>
            </div>
            <div class="icon-blogs">
                <img src="/PortfolioATLP/images/like (1).png" alt="" class="icons-blogz">
                <img src="/PortfolioATLP/images/heart (1).png" alt="" class="icons-blogz"> 
                <img src="/PortfolioATLP/images/share_1358023.png" alt="" class="icons-blogz">
            </div>
            <div class="comment">
                <p class="coom">comment</p>
                <div class="last">
                    <textarea name="comment" id="comment" cols="40" rows="6"  class="commentArea"></textarea>
                    <div class="btn-image-icon">
                        <button class="button-blog"><img src="/PortfolioATLP/images/bi_send.svg" alt="" class="ima-blogz"></button>
                    </div>
                </div>
            </div>
        `;
    });
});
