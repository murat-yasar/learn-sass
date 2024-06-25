# Learn Sass
I'm learning Sass and here is my playground. You can find the tutorials through [Net Ninja](https://www.youtube.com/@NetNinja) youtube channel.


## Installation
1. Install nodeJS (to keep track of the dependencies)
  ```bash
  npm install
  npm init
  ```
It creates node_modules and package.json

2. Install VS Code extension: Live Sass Compiler (to compile scss files into CSS files)

3. Install Gulp and set dev dependencies
  ```bash
  npm install gulp gulp-sass sass --save-dev
  ```
It updates package.json and creates package-lock.json

4. Create the Gulp file (to build and update CSS files from Sass files)

5. Edit package.json to fix the problem with `gulp` command on terminal
```json
"scripts": {
	"gulp": "gulp"
},
```


## Development
1. Create HTML file (index.html)
2. Create Sass file (index.scss)


## Run
1. Run `npm run gulp` or `npx gulp` command on Terminal
It creates CSS directory and compiles CSS files
2. 