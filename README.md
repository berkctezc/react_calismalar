# NOTES

1. ### Getting Started
    1. Useful VS Code extensions (Optional)

        1. [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
        2. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
        3. [Prettier (Code Formatter)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

   2. Install React's app creator from npm with this command (-g means global installation to your system)

      ```bash
      npm i -g create-react-app
      #OR
      yarn global add create-react-app
      ```

   3. Execute this command on the directory you wish to store your project

      ```bash
      npx create-react-app yourappname
      ```

   4. Cd into your app and npm/yarn start (this command executes start script in package.json file that created by create-react-app command)

      ```bash
      cd yourappname
      npm start
      OR
      yarn start
      ```

   5. Previous command will serve the app to you and your LAN on port 3000 (ex: localhost:3000)

   6. Congratulations!! You are ready to start programming your app now.

   ------

2. ### Styling using Reactstrap + Bootstrap

   1. Install reactstrap and bootstrap with npm/yarn

   ```bash
   npm i reactstrap
   npm i bootstrap
   ```

    2. Import to your code
    3.  [Components Guide](http://reactstrap.github.io/components)

   ------

 3. ### Props, States, Events

     1. to be filled later

    ------


 4. ### Fake API with json-server (you can also use mockoon)

    1. Install json server and run it with a json file you desire

    ```bash
    npm i -g json-server
    cd #jsondirectory
    json-server --watch db.json
    ```

    2. Port (3000) may conflict. Restart your react server

    