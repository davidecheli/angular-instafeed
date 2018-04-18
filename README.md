# AngularInstafeed

This project was created to work as a widget for the Instagram feed usaing Angular.

## How to use

This application handle the query param `username` to create a widget with Instagram feed of the user.

### Firebase demo

https://angular-instafeed.firebaseapp.com/?&username=davidecheli

### Widget iframe

You need to add some code to the `onload` to make the iframe be resized based on the size of the component:
```html
<iframe
    id="instaFeed"
    src="https://angular-instafeed.firebaseapp.com/?&username=davidecheli"
    onload="window.addEventListener('message', function(event){getElementById('instaFeed').style.height=event.data+'px';}, false);"
    style="width:100%;"
    frameborder="0"
></iframe>
```

## Development enviroment

* Install [Node.js](https://nodejs.org/)
* Install Angular CLI:
    ```
    $ npm install -g @angular/cli
    ```
* Clone project:
    ```bash
    $ git clone https://github.com/davidecheli/angular-instafeed.git
    ```
* Access project folder:
    ```
    $ cd angular-instafeed
    ```
* Install all dependencies:
    ```bash
    $ npm install
    ```
* Run local server:
    ```
    $ npm serve
    ```
* Open the app on browser:
    http://localhost:4200/?&username=davidecheli
