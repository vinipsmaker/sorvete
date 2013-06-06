/*global module:false*/
/*jslint es5: true */
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	meta: {
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
			' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
			' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n'
	},
	linter: {
		files: [ 'Gruntfile.js', 'package.json',
			'www/js/**/*.js', 'www/js/spec/**/*.js',
			'!www/thirdparty/**/*.js', '!www/js/**/*.min.js',
			'!www/thirdparty/'
		],
		globals: {
			jQuery: true,
			$: true,
			describe: true,
			it: true,
			xdescribe: true,
			xit: true,
			expect: true,
			define: true,
			require: true,
			requirejs: true
		}
	},
	watch: {
		files: ['<config:linter.files>', 'www/js/spec/**/*.js'],
		tasks: 'test'
	},
	jasmine: {
		src: [ '!www/js/spec/**/*.spec.js' ],
		options: {
			template: require('grunt-template-jasmine-requirejs'),
			specs : 'www/js/spec/**/*.spec.js'
		}
	},
	uglify: {
		options: {
			mangle: false,
			banner: '<%= meta.banner %>'
		},sorvete_client: {
			files: {
				'www/js/<%= pkg.name %>.min.js': [ 'www/js/sorvete/**/*.js' ]
			}
		}
	},requirejs: {
		compile: {
			options: {
				baseUrl: ".",
				name: "www/js/sorvete/sorvete.js",
//				mainConfigFile: "www/js/sorvete/sorvete.js",
				out: 'www/js/sorvete/sorvete.min.js',
				optimize: "uglify2"
			}
		}
	},shell: {
		options: {
			failOnError: true,
			stdout: true
		},
		debug_ios: {
			command: 'cordova build ios && cordova emulate ios'
		},
		debug_android: {
			command: 'cordova build android && cordova emulate android'
		},
		debug_blackberry: {
			command: 'cordova build blackberry && cordova emulate blackberry'
		}
	}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
//	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-linter');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-volo');

	// Default task
	grunt.registerTask('default', ['test_syntax','min_code','test_tdd']);

	// Custom tasks
	grunt.registerTask('test', ['test_syntax','test_tdd']);

	grunt.registerTask('debug:ios', ['test_syntax','test_tdd','min_code','shell:debug_ios']);
	grunt.registerTask('debug:android', ['test_syntax','test_tdd','min_code','shell:debug_android']);
	grunt.registerTask('debug:blackberry', ['test_syntax','test_tdd','min_code','shell:debug_blackberry']);

	// Resolve and get deps.
	grunt.registerTask('get_deps', ['volo:install']);

	grunt.registerTask('test_syntax', ['linter']);
	grunt.registerTask('test_tdd', ['jasmine']);
	grunt.registerTask('min_code', ['requirejs']);
};

