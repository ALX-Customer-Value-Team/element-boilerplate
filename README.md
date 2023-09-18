# ALX Feature Element Boiler Plate

This template is designed to help get you started with creating your custom element to use in the ALX Catalyst platform. It handles the messageData that is passed into the app from Catalyst and them saved the message data into React useContext.

# Getting started

You need to add the following env files to connect to an instance of ALX when running the app on localhost
.env.development & .env.production

```
VITE_APP_USER_NAME=replace_with_your_ALX_user_name
VITE_APP_USER_PASSWORD=replace_with_your_ALX_password
VITE_APP_BASE_URL=http://localhost:3001
```

To run the proxy server you will first need to cd into the proxy folder and the run the following commands:

```
npm i
npm run compile
npm run start
```

once the server is running and you have added the .env.development file you run up the app with the command from the root folder of the app:

```
npm i
npm run dev
```

There is test code in the index.html which will simulate passing in the messageData with any parameters that you need the user to add when creating the element in Catalyst. This code needs to be uncommented and updated with the parameters to match the parameters in the config.json file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Element Boilerplate</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <!-- Uncomment the below for testing with the parameters passed in to the messageData -->
    <!-- <script>
      setTimeout(() => {
        console.log("Running post message script.");
        const messageData = {
          user_details: {
            access_token: "",
            first_name: "",
            last_name: "",
            user_id: 1,
            user_name: "",
          },
          object_record_meta: {
            class_id: "",
            record_id: "",
          },
          endpoint: "http://localhost:3001", // same as proxy port
          component_parameters: [],
          parameters: {
            completed_color: "#5AAD11",
            outstanding_color: "#82A9FA",
            overdue_color: "#FA3300",
            user_tasks: "No",
          },
        };
        window.postMessage(messageData, "http://127.0.0.1:5173/");
      }, 2000);
    </script> -->
  </body>
</html>
```
