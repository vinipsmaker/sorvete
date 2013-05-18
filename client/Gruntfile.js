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
		src: [ 'www/**/*.js', '!www/js/spec/**/*.spec.js',
			'!www/js/thirdparty/**/test/**/*.js',
			'!www/js/thirdparty/**/tests/**/*.js'],
		options: {
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
	},
	bower: {
		install: {
			options: {
				targetDir: './www/js/thirdparty/',
				layout: 'byType',
				install: true,
				verbose: false,
				cleanTargetDir: true,
				cleanBowerDir: true
			}
		}
	}
	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-linter');
	grunt.loadNpmTasks('grunt-bower-task');

	// Default task
	grunt.registerTask('default', ['linter','uglify','jasmine']);

	// Custom tasks
	grunt.registerTask('test', ['linter','jasmine']);

	// Resolve and get deps.
	grunt.registerTask('get_deps', ['generate_bower_from_json','bower','delete_bower_config']);

	grunt.registerTask('generate_bower_from_json', 'Generate bower files from \"package.json\"', function() {
		var pkg=grunt.file.readJSON('package.json');
		grunt.file.write('bower.json', '{\n\t"dependencies":'+JSON.stringify(pkg.dependencies)+'\n}\n');
	});

	grunt.registerTask('delete_bower_config', 'Delete bower config file', function() {
		grunt.file.delete('bower.json');
	});
};

