# Ways to show Output in the Browser

## 1. using HTML

**Code :**

```
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Namaste React</title>
</head>
<body>
 <div id="root">
   <h1>Hello from HTML</h1>
 </div>
 </body>

</html>
```

## 2. using javascript

**Code :**

```<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Namaste React</title>
</head>
<body>

 <div id="root">

 </div>



<script>

   const heading = document.createElement('h1');
   heading.innerHTML = "Hello World From javascript!!";

   const root = document.getElementById("root");
  root.appendChild(heading);

  </script>

</body>

</html>
```

## 2. using React

**Code :**
```




```