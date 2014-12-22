/**
 * Created by cornelia on 16/12/14.
 */


    var photographyFeeds = [
    {
        name: 'Digital Photography School',
        url: 'http://feeds.feedburner.com/DigitalPhotographySchool'
    },
    {
        name: 'Photo District News',
        url: 'http://feeds2.feedburner.com/PdnNewswire'
    },
    {
        name: 'Photo District Features',
        url: 'http://feeds.feedburner.com/PhotoDistrictNews-PdnFeatures'
    },
    {
        name: 'Ephotozine News',
        url: 'http://feeds.feedburner.com/ephotozine/news'
    }
];

var photographyGear = [
    {
        name: 'Photo District Gear',
        url: 'http://feeds.feedburner.com/GearGuide-news-reviews-features'
    },
    {
        name: 'Ephotozine Gear',
        url: 'http://feeds.feedburner.com/ephotozine/reviews'
    }

];

var photographyContests = [
    {
        name: 'Ephotozine Competitions',
        url: 'http://feeds.feedburner.com/ephotozine/competitions'
    }
];

function initialize() {
    var feed;
    var htmlFeedTitle = '<h2>@@feedTitle@@</h2>';
    var htmlContentTitle = '<div class="content"><h3>@@title@@</h3>';
    var htmlContentParagraph = '<p>@@contentSnippet@@<br/>Author: @@author@@, @@publishedDate@@</p>';
    var htmlContentLink = '<div class="btn"><a href="@@link@@" target="_blank">Read More</a></div></div>';
    var error = '<div class="content">Feeds could not be loaded</div>';
    var postResults = $('#post-results');
    var container = document.getElementById('post-results');
    var getContent = function(result) {
        if (!result.error) {
            for (var i = 0; i < result.feed.entries.length; i++) {
                var entry = result.feed.entries[i];
                console.log(entry);
                var title = entry.title;
                var content = entry.contentSnippet;
                var author = entry.author;
                var fetchDate = new Date(entry.publishedDate);
                var fetchDateYear = fetchDate.getFullYear();
                var fetchDateMonth = fetchDate.getMonth();
                var fetchDateDay = fetchDate.getDate();
                var date = fetchDateDay + '/' + fetchDateMonth + '/' + fetchDateYear;
                var link = entry.link;
                postResults.append(htmlContentTitle.replace('@@title@@', title) + htmlContentParagraph.replace('@@contentSnippet@@', content).replace('@@author@@', author).replace('@@publishedDate@@', date) + htmlContentLink.replace('@@link@@', link));
            }
        }
        else {
            postResults.append(error);
        }
    };
    for(var i = 0, len = photographyFeeds.length; i <  len; i++) {
        feed = new google.feeds.Feed(photographyFeeds[i].url);
        //postResults.append(htmlFeedTitle.replace('@@feedTitle@@', photographyFeeds[i].name));
        feed.load(getContent);
    }

}
if(google){
    google.load("feeds", "1");
    google.setOnLoadCallback(initialize);
}

var top = $('#top-row');
var logo = $('#logo');
var menu = $('#menu-img');

$('#top-row').mouseenter(function() {
    logo.attr('src', 'images/logo-dark.png');
    menu.attr('src', 'images/menu-icon-dark.png')
});
$('#top-row').mouseleave(function() {
    logo.attr('src', 'images/logo.png');
    menu.attr('src', 'images/menu-icon.png')
});

