<div class="blog cf">
    <div id="posts" class="singlePost">
        {{ post }}
            <div class="post">
                <div class="head">
                    <img class="headerImg" src="http://s3.amazonaws.com/brd_blog_images/{{blog_post_image:filename}}" alt="">
                    <div class="date">
                        <span class="month">{{ helper:date format="M" timestamp=created_on }}</span>
                        <span class="day">{{ helper:date format="d" timestamp=created_on }}</span>
                    </div> 
                </div>
                <h3><a class="title" href="{{ url }}">{{ title }}</a></h3>
                <!-- <p class="author"><strong>- by {{ user:display_name user_id=created_by }}</strong></p> -->
                <div class="body">
                    {{ body }}
                </div>
                <div class="tags">
                    <p>Tags:</p>
                    <ul>
                    {{ keywords }}
                        <li>
                            <a href="/blog/tagged/{{ keyword }}">{{ keyword }}</a>
                        </li>
                    {{ /keywords }}    
                    </ul>
                </div>
            </div>
        {{ /post }}
    </div>
    {{ theme:partial name="blog-sidebar" }}
</div>