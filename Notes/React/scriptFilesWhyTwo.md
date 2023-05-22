# why we have two script files in our code ?

## code :

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  <body>
    <div id="root"></div>

   <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script>
        const element = React.createElement('h1',{}, "Hello from React");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(element);
    </script>
  </body>
</html>
```

## 1. First file :

>When Browser Encounter this Url in script tags's **src** attribute, it send a request to **unpkg CDN** to fetch the react library file
The CDN then responded with the request file in this case Development version of **React Library**

```javascript
<script src="https://unpkg.com/react@18/umd/react.development.js"> </script>
```
>> **Breaking-Down**  src="https://unpkg.com/react@18/umd/react.development.js" 

     1. https://unpkg.com/ : This is a base Url for the unpkg CDN,
     unpkg is popular CDN that hosts various javascript libraries and packages

     2. react@18 : part of url that specifies package and the version being requested

     -------------------------------------------------
     |                                                |
     |            react  ----->Library                |
     |                                                |
      ----------------------------------------------- 

       -------------------------------------------------
     |                                                |
     |            18  -----> Version                  |
     |                                                |
      ----------------------------------------------- 


      -------------------------------------------------
     |                                                |
     |            @18  -----> Version of React        |
     |                                                |
      ----------------------------------------------- 

      3.umd/react.development.js: This part of url specifies  the file path with in the react package that is being requested
      and react.developmet.js file is a development version of react library which is suitable for development environment
```javascript
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```
