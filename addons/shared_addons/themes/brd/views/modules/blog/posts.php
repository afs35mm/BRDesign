<div class="blog cf">
    <div id="posts" class="postList">
        {{ if posts }}
            {{ posts }}
                <div class="post">
                    <div class="head">
                    <img class="headerImg" src="http://s3.amazonaws.com/brd_blog_images/{{blog_post_image:filename}}" alt="">
                        <div class="date">
                            <span class="month">{{ helper:date format="M" timestamp=created_on }}</span>
                            <span class="day">{{ helper:date format="d" timestamp=created_on }}</span>
                        </div> 
                    </div>
                    <h3><a class="title" href="{{ url }}">{{ title }}</a></h3>
                    <div class="body preview">
                        {{ preview }}
                        <p class="readMore" ><a class="more" href="{{ url }}">Read More...</a></p>
                    </div>
                </div>
            {{ /posts }}
         <div id="pagination">
            PAGINATION IS SUPPOSED TO GO HERE!!!: {{ pagination }}    
        </div>
        {{ else }}
            {{ helper:lang line="blog:currently_no_posts" }}
        {{ endif }}
    </div>
    {{ theme:partial name="blog-sidebar" }}
</div>