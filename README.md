# Debugging Node.js

This repository is an example of how to run a Node.js program in debug mode from Docker with live reload enabled.

## Intro

There are two different ways for debugging your Node.js apps. 

### 1 -  Using only your terminal

Using only your terminal using the properties below on your docker-compose:

```yaml
nodejs-debug-docker:
    stdin_open: true
    command: npm run debug:terminal
...
```

After that you'd run `docker-compose run nodejs-debug-docker` which will enter in the interactive mode.

You can also run a few commands such as:

- `list(20)` to show the first 10 lines of code.
- `sb(19)` to set a breakpoint on the 19th line.
- `c` to continue the execution after setting the break point.
- You'd run `curl "localhost:3000?number1=10&number2=20"` to get your debugger working
- `exec calculation` you can see the current value stored on `calculation` variable
- `r` to restart and so on.

## 2 - Using your browser who is based on Chromium

Following this repository, you'd run `docker-compose up --build` then you'd go to your browser, open your `inpection menu` (using `F12`) then you'd see your app there

## Author

- [twitter.com/erickwendel_](https://twitter.com/erickwendel_)

## Video (WIP)

...