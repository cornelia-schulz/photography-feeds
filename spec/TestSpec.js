/**
 * Created by cornelia on 16/12/14.
 */
$(function () {
    describe('Rss Feeds', function () {

        it('are defined', function () {
            expect(photographyFeeds).toBeDefined();
            expect(photographyFeeds).not.toBe(0);
        });

        it('have a name', function() {
            for(var i = 0, len = photographyFeeds.length; i < len; i++) {
                expect(photographyFeeds[i].name).toBeDefined();
                expect(photographyFeeds[i].name).not.toBe('');
            }
        });

        it('have a url', function() {
            for(var i = 0, len = photographyFeeds.length; i < len; i++) {
                expect(photographyFeeds[i].url).toBeDefined();
                expect(photographyFeeds[i].url).not.toBe('');
            }
        });
    });

    describe('Menu', function() {
        var topRow, logo;
        beforeEach(function(){
            setFixtures('<li id="top-row"><img id="logo" src="images/logo.png" alt="logo"/><h1>Photography Feeds</h1><img id="menu-img" src="images/menu-icon.png" alt="menu"/></li>');
            topRow = $('#top-row');
            logo = $('#logo')
        });


        it('Logo changes on mouseenter and leave', function() {
            initEvents();

            topRow.trigger('mouseenter');

            var image = logo.attr('src');
            expect(image).toBe('images/logo-dark.png');
        });


        it('Logo changes back on mouseleave', function() {
            initEvents();
            topRow.trigger('mouseenter');
            topRow.trigger('mouseleave');

            var image = logo.attr('src');
            expect(image).toBe('images/logo.png');
        });

    });

}());