# Contributing

First off, we want to thank you for your interest in helping this project grow and be kept alive. To make sure all additions maintain a certain quality and the code stays up-to-par we ask you the read the following before submitting any new features/bugfixes etc.

## Code Style & Naming Conventions

### Code Style ###

TODO

### Naming new branches ###
Branches should always show the issue type as well as the issue number and a short description of the problem.

    <type>/<no>-<desc> (ex. feature/46-remove-google-analytics)

### Naming the PR ###
Pull Requests should be named like the issue worked on.

## Testing your changes ##

To test your changes you need to setup a redis-server as well as node on your machine.

### Ubuntu ###

#### Redis on Ubuntu ####

    sudo apt install redis-server
    sudo systemctl start redis
    sudo systemctl status redis (to check if running)

    redis-cli (for command-line client)

In development mode no password is required by default.


#### Nodejs on Ubuntu ####

    sudo apt install nodejs-legacy

Change directory to pasteit/pasteit and run

    npm install 



## Getting your changes published in the official branches

This project follows a simple rule of branching. Each feature/bugfix or any other change needs to be pushed to a new branch referring to an issue within the issues page.

For that purpose two branches are kept alive by the maintainers, which are
 - **_master_** (The current version running on the production system. Only administrators are allowed to push updates on this branch)
 - **_develop_*** (The current development version running on the development system and deployed nightly. Everybody is allowed to open PRs for their changes to get merged back in here)

*) This is the default branch when cloning the project

## Workflow ##

Fork and clone the project
    
    git clone https://github.com/<your-username>/pasteit
 
Make your changes to a respective branch branching from develop (ex. feature/46-remove-google-analytics)
    
     git checkout -b feature/99-new-awesome-feature
     
Commit & Push your changes to your fork
    
     git add -A
     git commit -m "issue #99 added new awesome feature"
     git push origin feature/99-new-awesome-feature
 
Create a PR on this project to have your changes merged into the develop branch
  - When opening a PR please name it as stated in section Naming Conventions
  - Please add a "Resolves #<issue>" to the body of the PR to link the issue you worked on
     
Await the review, which can only be done and therefore approved by one of the administrators. If your changes are good enough and do solve the problems stated in the issue they will get merged back to the develop branch.
