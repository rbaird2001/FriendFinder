# Match Maester 
## A friend finder app for Westeros and Eastward

## Description
This project is a friend finder app that collects survey values and comparing the answer to each question to that of other friends in the app.  It demonstrates the use of Express JS for retrieving, routing, and processing data. It's important to note that the profile pictures do not match the friend names. This makes it more like an actual couples meet application.

This project will also insert the requester's information into the friend list to be search by others. Currently the unique value used to identify the friend is the name value. Future implementations would include a more unique identifier. This would be done along with creating authentication requirements for the requester. If the requester's name already exists, then that name would be excluded from the search and the requester's scores and other detail would be updated.

## Prerequisites
1. NodeJS
2. Express Module
3. Path Module

## Setup
1. Download the repository to your local device.
2. Install NodeJS to this device.
3. From the shell prompt, move to the folder that holds the repostitory.
3. Verify the _package.json_ file is in this directory. If so, run _npm install_ command. This will install all prerequisite modules.
4. from the folder for the repository, run _node server_
5. Verify you can reach the home page from a browser by launching your browser and going to _localhost:8080_
6. Click on the survey link to enter your data and find your match.

### Note:
A prepopulated list of friends has been created. The file that created them is called _createSurveyResults_ and is found in /app/data. You may execute _node createSurveyResults_ from this folder and initialize a list of names and photos. The resulting friend.js file will contain only female genders.

## License
This is licensed under the MIT licenses

