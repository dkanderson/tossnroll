'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'src/assets/js/*.js',
        '!src/assets/js/scripts.min.js'
      ]
    },
    less: {
      dist: {
        files: {
          'www/assets/css/main.min.css': [
            'src/assets/less/app.less'
          ]
        },
        options: {
          compress: true,
          // LESS source map
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'www/assets/js/scripts.min.js': [
            'src/assets/js/plugins/bootstrap/transition.js',
            'src/assets/js/plugins/bootstrap/alert.js',
            'src/assets/js/plugins/bootstrap/button.js',
            'src/assets/js/plugins/bootstrap/carousel.js',
            'src/assets/js/plugins/bootstrap/collapse.js',
            'src/assets/js/plugins/bootstrap/dropdown.js',
            'src/assets/js/plugins/bootstrap/modal.js',
            'src/assets/js/plugins/bootstrap/tooltip.js',
            'src/assets/js/plugins/bootstrap/popover.js',
            'src/assets/js/plugins/bootstrap/scrollspy.js',
            'src/assets/js/plugins/bootstrap/tab.js',
            'src/assets/js/plugins/bootstrap/affix.js',
            'src/assets/js/plugins/*.js',
            'src/assets/js/_*.js'
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
          // sourceMap: 'src/assets/js/scripts.min.js.map',
          // sourceMappingURL: '/app/themes/roots/src/assets/js/scripts.min.js.map'
        }
      }
    },
    watch: {
      less: {
        files: [
          'src/assets/less/*.less',
          'src/assets/less/bootstrap/*.less'
        ],
        tasks: ['less']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      },
      build: {
        files: [
          'src/assets/*',
          'src/templates/*.php',
          'src/*.php'
        ],
        tasks: ['copy']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'www/assets/css/main.min.css',
          'www/assets/js/scripts.min.js',
          'www/templates/*.php',
          'www/*.php'
        ]
      }
    },
    clean: {
      dist: [
        'www/assets/css/main.min.css',
        'www/assets/js/scripts.min.js'
      ]
    },
    copy: {
      build: {
        files: [
          {expand: true, cwd: 'src/', src: ['**', '!assets/less/**'], dest: 'www/', filter: 'isFile'}
        ]
      },
    },

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
