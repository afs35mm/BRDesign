<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div class="blog cf">
    <div id="posts" class="postList BRD-ui-module" data-module="social" data-social="posts">
        {{ if posts }}
            {{ posts }}
                <div class="post">
                    {{post:month}}
                    <div class="head">
                    <img class="headerImg" src="http://s3.amazonaws.com/brd_blog_images/{{blog_post_image:filename}}" alt="">
                        <div class="date">
                            <span class="month">{{ helper:date format="M" timestamp=created_on }}</span>
                            <span class="day">{{ helper:date format="d" timestamp=created_on }}</span>
                        </div> 
                    </div>
                    <div class="titleHolder">
                        <h3><a class="title" href="{{ url }}">{{ title }}</a></h3>
                        <div class="fb-like" data-href="http://brdesignassociates.com/" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>
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
