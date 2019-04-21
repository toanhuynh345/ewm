module.exports = function(grunt) {
	grunt.initConfig({
		concat	: {
			options: {
				stripBanners: true,
				separator	: '\n\n',				// define a string to put between each file in the concatenated output
			},
			main : {
				src	: ['material/js/main/*.js'],			// the files to concatenate
				dest: 'material/js/build/main.js'			// the location of the resulting JS file
			},
			configs : {
				src	: ['material/js/configs/*.js'],		// the files to concatenate
				dest: 'material/js/build/configs.js'		// the location of the resulting JS file
			},
			controllers : {
				src	: ['material/js/controllers/*.js', 'material/js/controllers/*/*.js'],
				dest: 'material/js/build/controllers.js'
			},
			directives : {
				src	: ['material/js/directives/*.js', 'material/js/directives/**/*.js'],
				dest: 'material/js/build/directives.js'
			},
			factories : {
				src	: ['material/js/factories/*.js', 'material/js/factories/**/*.js'],
				dest: 'material/js/build/factories.js'
			},
			services : {
				src	: ['material/js/services/*.js', 'material/js/services/**/*.js'],
				dest: 'material/js/build/services.js'
			}
		},
		// jshint	: {
		// 	options: {
		// 		sub	: true,
		// 		reporterOutput : ""
		// 	},
		// 	main		: ['www/js/app.js', 'www/js/utils.js'],
		// 	configs		: ['www/js/configs/*.js'],
		// 	controllers : ['www/js/controllers/*.js', 'www/js/controllers/**/*.js'],
		// 	directives	: ['www/js/directives/*.js', 'www/js/directives/**/*.js'],
		// 	factories	: ['www/js/factories/*.js'],
		// 	filters		: ['www/js/filters/*.js'],
		// 	services	: ['www/js/services/*.js']
		// },
		watch: {
			scripts: {
				files: ['material/js/*.js', 'material/js/**/*.js', 'material/js/**/**/*.js',],
				tasks: ['concat'],
				options: {
					debounceDelay: 50,
				},
			},
		},
		// uglify	: {
		// 	options: {
		// 		beautify	: false,
		// 		sourceMap	: false,
		// 		report	: 'min', // min || gzip
		// 		banner	: '/**\n' +
		// 		' * <%= grunt.template.today("yyyy-mm-dd") %>\n' +
		// 		' * Copyright <%= grunt.template.today("yyyy") %>\n' +
		// 		' */\n'
		// 	},
		// 	configs : {
		// 		src	: ['material/js/configs/*.js'],
		// 		dest: 'www/build/configs.min.js'
		// 	},
		// 	controllers : {
		// 		src	: ['material/js/controllers/*.js'],
		// 		dest: 'www/build/controllers.min.js'
		// 	},
		// 	directives : {
		// 		src	: ['material/js/directives/*.js'],
		// 		dest: 'www/build/directives.min.js'
		// 	},
		// 	factories : {
		// 		src	: ['material/js/factories/*.js'],
		// 		dest: 'www/build/factories.min.js'
		// 	},
		// 	filters : {
		// 		src	: ['material/js/filters/*.js'],
		// 		dest: 'www/build/filters.min.js'
		// 	},
		// 	services : {
		// 		src	: ['material/js/services/*.js'],
		// 		dest: 'www/build/services.min.js'
		// 	}
		// }
	});
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', [/*'jshint', */'concat']);
};
