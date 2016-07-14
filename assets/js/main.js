jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

        /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
        GitHubCalendar("#github-graph", "nategraf", {"global_stats": false});
        
        
        /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
        GitHubActivity.feed({ username: "nategraf", selector: "#gh-feed" });

        $('iframe#soundcloud-iframe-A').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/159500192&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false');
        $('iframe#soundcloud-iframe-B').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/10360987&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false');
        $('iframe#soundcloud-iframe-C').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/166946939&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false');
        $('iframe#soundcloud-iframe-D').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/97603531&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false');

        /* Once the iframes load, remove the loading message */
        $('iframe#soundcloud-iframe-D').on('load', function(){
            $('p#sc-loading-msg').remove();
        });
    });
    
    /* Bootstrap Tooltip for Skillset */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "http://feeds.feedburner.com/TechCrunch/startups",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        
        }
    );

});