<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div class="blog cf">
    
    {{ session:messages success="success-box" notice="notice-box" error="error-box" }}

    <div id="posts" class="singlePost BRD-ui-module" data-module="social" data-social="singlepost">
        {{ post }}
            <div class="post">
                <div class="head">
                    <img class="headerImg" src="http://s3.amazonaws.com/brd_blog_images/{{blog_post_image:filename}}" alt="">
                    <div class="date">
                        <span class="month">{{ helper:date format="M" timestamp=created_on }}</span>
                        <span class="day">{{ helper:date format="d" timestamp=created_on }}</span>
                    </div> 
                </div>
                <div class="titleHolder">
                    <h3><span class="title">{{ title }}</span></h3>
                    <div class="fb-like" data-href="http://brdesignassociates.com/" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>
                </div>
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
        <?php if (Settings::get('enable_comments')): ?>  
        
            <div id="existing-comments">
                <h4><?php echo lang('comments:title') ?></h4>
                <div> <?php echo $this->comments->display() ?></div>
            </div>      
            <?php if ($form_display): ?>
                <?php echo $this->comments->form() ?>
            <?php else: ?>
                <?php echo sprintf(lang('blog:disabled_after'), strtolower(lang('global:duration:'.str_replace(' ', '-', $post[0]['comments_enabled'])))) ?>
            <?php endif ?>
        
        <?php endif; ?>

        {{ /post }}
    </div>
    {{ theme:partial name="blog-sidebar" }}
</div>