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

var photographyTips = [
    {
        name: 'Ephotozine Techniques',
        url: 'http://feeds.feedburner.com/EphotozineTechniques'
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
    var collection = ko.observableArray();

    var getContent = function (result) {
        if (!result.error && !viewModel.query()) {
            for (var i = 0; i < result.feed.entries.length; i++) {
                var entry = result.feed.entries[i];
                var title = entry.title;
                var content = entry.content;
                var author = entry.author;
                var fetchDate = new Date(entry.publishedDate);
                var date = fetchDate.toDateString();
                var link = entry.link;
                collection.push({
                    title: title,
                    content: $('<div/>').html(content).text(),
                    author: author,
                    date: date,
                    link: link
                });
            }
        }
        return collection;
    };

    var chosenFeed;
    switch(document.location.pathname) {
        case '/photography-feeds/tips.html':
            chosenFeed = photographyTips;
            break;
        case '/photography-feeds/equipment.html':
            chosenFeed = photographyGear;
            break;
        case '/photography-feeds/competitions.html':
            chosenFeed = photographyContests;
            break;
        default:
        chosenFeed = photographyFeeds;
    }
    for (var i = 0, len = chosenFeed.length; i < len; i++) {
        feed = new google.feeds.Feed(chosenFeed[i].url);
        feed.load(getContent);
    }

    var viewModel = {
        collection: collection,
        query: ko.observable()
    };


    viewModel.filteredCollection = ko.computed(function () {
        if (!viewModel.query()) {
            return viewModel.collection();
        } else {
            return ko.utils.arrayFilter(viewModel.collection(), function(item) {
                if (item.title.toLowerCase().indexOf(viewModel.query().toLowerCase()) > -1) {
                    return item;
                }
            })
        }
    });
    ko.applyBindings(viewModel);

}

if (google) {
    google.load("feeds", "1");
    google.setOnLoadCallback(initialize);
}


function initEvents() {
    var topRow = $('#top-row');
    var logo = $('#logo');
    var menu = $('#menu-img');

    topRow.mouseenter(function () {
        logo.attr('src', 'images/logo-dark.png');
        menu.attr('src', 'images/menu-icon-dark.png')
    }).mouseleave(function () {
        logo.attr('src', 'images/logo.png');
        menu.attr('src', 'images/menu-icon.png')
    });
}
initEvents();


$('#menu li').click(function(){
   var li = $(this);
   var a = $('a', li);
   document.location = a.attr('href');
});