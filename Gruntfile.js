module.exports = function(){
	// do requires here
	require('jit-grunt')(grunt);

	//do grunt task configurations here
	grunt.initConfig({

	});


	//register tasks here
	grunt.registerTask('build',['jshint']);
	grunt.registerTask('default',['build']);



}