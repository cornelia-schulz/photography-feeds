module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                // add a banner
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            build: {
                src: ['js/jquery-1.11.1.min.js', 'js/main.js'],
                dest: 'js/build/main.min.js'
            }
        },
        jshint: {
            // define files to lint
            files: ['gruntfile.js', 'js/main.js'],
            // configure jshint
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'css/build/style.css': ['css/style.css']
                }
            }
        },
        jasmine: {
            pivotal: {
                //project source file
                src: 'js/*.js',
                options: {
                    //jasmine spec file
                    specs: 'spec/*Spec.js',
                    //spec helper files
                    helpers: 'spec/*Helper.js',
                    keepRunner: true,
                    vendor: [
                        'lib/vendor/jquery-1.11.1.min.js',
                        'lib/vendor/jasmine-jquery.js'

                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // run these by typing "grunt test" at the command line
    grunt.registerTask('test', ['jshint']);
    // run these by tying "grunt" on the command line
    grunt.registerTask('default', ['uglify', 'cssmin', 'jasmine']);
};
