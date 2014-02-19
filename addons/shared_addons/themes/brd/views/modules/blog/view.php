<div id="fb-root"></div>
<div class="blog cf">
    
    {{ session:messages success="success-box" notice="notice-box" error="error-box" }}
    
  <p>{{ page:slug }}</p>

    <div id="posts" class="singlePost BRD-ui-module" data-module="social" data-social="singlepost">
        {{ post }}
            <div class="post">
                <div class="head">
                    <img class="headerImg" src="http://s3.amazonaws.com/brdesign_blog-images/{{blog_post_image:filename}}" alt="">
                    <div class="date">
                        <span class="month">{{ helper:date format="M" timestamp=created_on }}</span>
                        <span class="day">{{ helper:date format="d" timestamp=created_on }}</span>
                    </div> 
                </div>
                <div class="titleHolder cf">
                    <h3 class="title singlePost">{{ title }}</h3>
                    
                    <div class="share">
                        <!--FACEBOOK SHARE BUTTON-->
                        <div class="fb-like" data-href="http://brdesignassociates.com/" data-layout="button" data-action="like" data-show-faces="false" data-share="true"></div>
                        <ul class="socialParent">
                            <li>
                                <a href="#" class="roundedButton socialBtn">Share</a> 
                                <ul class="socialList">
                                    <li>
                                        <!-- Place this tag where you want the share button to render. -->
                                        <div style="width:100px;" class="g-plus" data-action="share" data-annotation="none"></div>

                                        <!-- Place this tag after the last share tag. -->
                                        <script type="text/javascript">
                                          (function() {
                                            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                                            po.src = 'https://apis.google.com/js/platform.js';
                                            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                                          })();
                                        </script>
                                    </li>
                                    <li>
                                        <!--TWITTER SHARE BUTTON-->    
                                        <a href="https://twitter.com/share" class="twitter-share-button" data-lang="en">Tweet</a> 
                                        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
                                    </li>
                                    <li>
                                        <script src="//platform.linkedin.com/in.js" type="text/javascript">
                                         lang: en_US
                                        </script>
                                        <script type="IN/Share"></script>
                                    </li>
                                </ul>    
                            </li>
                        </ul>
                    </div>
                    
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