Notice Before using back-end test:
	- For tests excluding recommend:
		- First, remove recommend.test.js for now. Set up your mysql database，and load dummy data before testing. In specific, first run \BruinCave\Backend\api\setup.sql to set up the tables, and put the db information in BruinCave\Backend\api\config\db.config.js. Then, run \BruinCave\Backend\api\Test_general.sql to load dummy data. 

		- repeat the above step before each attempt of testing. 

	- For recommend test:
		- - First, remove all tests file other than recommend.test.js for now. Set up your mysql database，and load dummy data before testing. In specific, first run \BruinCave\Backend\api\setup.sql to set up the tables, and put the db information in BruinCave\Backend\api\config\db.config.js. Then, run \BruinCave\Backend\migration.sql to load dummy data. 

		- repeat the above step before each attempt of testing.