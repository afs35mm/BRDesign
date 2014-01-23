{{ theme:partial name="aside" }}

{{ if posts }}
	{{ blog:posts limit="2" }}
		limit = 2!
		<article class="post">
			<h5>{{ theme:image file="link.png" }} <a href="{{ url }}">{{ title }}</a></h5>
			
			<div class="post_date">
				<span class="date">
					{{ theme:image file="date.png" }}
					About {{ helper:timespan timestamp=created_on }} ago.
				</span>
			</div>
			
			<hr>
			
			<div class="post_intro">
				{{ intro }}
			</div>
			
			<hr>
			
			<div class="post_meta">
				{{ if keywords }}
					{{ theme:image file="tags.png" }}
					<span class="tags">
						{{ keywords }}
					</span>
				{{ endif }}
			</div>
		</article>

	{{ /blog:posts }}
	<div style="color:red;"> 
	{{ pagination }}
	</div>
	
	<!-- blog pagination: {{ blog_pagination:page_number post_id="6" }} -->
	

{{ else }}
	
	{{ helper:lang line="blog:currently_no_posts" }}

{{ endif }}