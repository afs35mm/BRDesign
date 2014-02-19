<div class="blog cf">
    <div id="posts" class="postList BRD-ui-module" data-module="social" data-social="posts">
        {{ if posts }}
            {{ posts }}
                <div class="post">
                    {{post:month}}
                    <div class="head">
                    <img class="headerImg" src="http://s3.amazonaws.com/brdesign_blog-images/{{blog_post_image:filename}}" alt="">
                        <div class="date">
                            <span class="month">{{ helper:date format="M" timestamp=created_on }}</span>
                            <span class="day">{{ helper:date format="d" timestamp=created_on }}</span>
                        </div> 
                    </div>
                    <div class="titleHolder cf">
                        <h3 class="title"><a href="{{ url }}">{{ title }}</a></h3>
                    </div>
                    <div class="body preview">
                        {{ preview }}
                        <p class="readMore" ><a class="more" href="{{ url }}">Read More...</a></p>
                    </div>
                </div>
            {{ /posts }}
            <div id="pagination" class="cf">
                {{ pagination }}  
            </div>     
        {{ else }}
            {{ helper:lang line="blog:currently_no_posts" }}
        {{ endif }}
    </div>
    {{ theme:partial name="blog-sidebar" }}
</div>
