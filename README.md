# AngularJS-NodeJS-Exercise-1
The main purpose of this repo is to help get my teammates up to speed when it comes to using AngularJS, which is very relevant in our current line of work.

I have asked the team to first follow [this link](https://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server) in order to get some needed technologies to make the development environment easy and seamless.

I am using NodeJS to get some lightweight server side handling going on and ran this command:

```
npm install -g http-server
```

Running the command is done with this:

```
http-server -o
```

Generic FAV Icon Done [Here](https://favicon.io/favicon-generator/)

# Basic file structure
All files use a base backbone HTML tags with CSS defined at the top and javascript done at the bottom.

## Key files used
### Bootstrap

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
```

We use bootstrap for some basic styling so we don't have to write so much CSS

### AngularJS

```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
```

The base of this tutorial, one of the first files we include

### jQuery

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
```

Increasingly AngularJS has been able to replace jQuery, but its still a good practice to include it unless we expliclty find ourselves not needing it.

### Bootstrap JS files

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
```

To accomplish other pretty cool effects with Bootstrap

# index.html
First file of the lesson, we are using this to give a crash course how AngularJS is used. We won't dive too deep into this, but this is to show how a basic structure for a single page app in AngularJS looks like with scope variables and binding. 