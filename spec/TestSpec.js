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

        it('Logo changes on mouseenter and leave', function() {
            $('#top-row').trigger('mouseenter');
            var image = $('#logo').attr('src');
            console.log(image);
            expect(image).toBe('images/logo-dark.png');
        })

    });

}());