# crumpled-cards
> A full stack web app built with MEVN (MongoDB, Express.js, Vue.js, and Node.js) that will (one day) allow users to play poker against one another.

### Project Structure
This repo holds two separate projects: 

- [coffee-casino](./coffee-casino/), which is a Node.js backend connected to a MongoDB instance (named back when it was written in coffeescript).
- and [vue-poker](./vue-poker/), a Vue.js frontend using vuex, vue-router, Babel, and webpack.

These two projects are hosted separately on Heroku (so you might have to wait a bit for Heroku to "wake up" when you first access the site).

### Contributing
1. `git clone https://github.com/ben-walker/crumpled-cards.git`
2. `cd crumpled-cards/`
3. Terminal 1: `cd coffee-casino/ && npm install && gulp`
4. Terminal 2: `cd vue-poker/ && npm install && npm run serve`
5. [`http://localhost:8080`](http://localhost:8080)
