/*global module:false*/
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
			'!www/js/thirdparty/**/*.js', '!www/js/**/*.min.js'
		],
		globals: {
			jQuery: true,
			$: true,
			describe: true,
			it: true,
			expect: true
		}
	},
	watch: {
		files: ['<config:linter.files>', 'www/js/spec/**/*.js'],
		tasks: 'test'
	},
	jasmine: {
		src: [ 'www/**/*.js', '!www/js/spec/**/*.spec.js' ],
		options: {
			specs : 'www/js/spec/**/*.spec.js'
		}
	},
	uglify: {
		options: {
			mangle: false,
			banner: '<%= meta.banner %>'
		},sorvete_server: {
			files: {
				'www/js/<%= pkg.name %>.min.js': [ 'www/js/sorvete/**/*.js' ]
			}
		}
	} 
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-linter');
	grunt.loadNpmTasks('grunt-volo');

	// Default task
	grunt.registerTask('default', ['test_syntax','min_code','test_tdd']);

	// Custom tasks
	grunt.registerTask('test', ['test_syntax','test_tdd']);

	// Resolve and get deps.
	grunt.registerTask('get_deps', ['volo:install']);

	grunt.registerTask('test_syntax', ['linter']);
	grunt.registerTask('test_tdd', ['jasmine']);
	grunt.registerTask('min_code', ['requirejs']);
};

