# SampleStarWarsApp

SampleStarWarsApp is a Single Page Application (SPA) that shows a sample app developed with Angular.

## Installation

As easy as downloading this project, getting the node_modules folder and run it!

```bash
git clone https://github.com/rewtelize/SampleStarWarsApp.git
cd SampleStarWarsApp
npm i
ng serve
```

## Usage

Open a web browser and go to [http://localhost:4200/](http://localhost:4200/) 

## Documentation

This main page (**app-component**) contains three components:
* **navigation-menu**: to show an horizontal carousel of Star Wars characters. If you click on one of them you will be redirected to some google search with its name.
* **search-box**: a space that contains an input to look for films of Star Wars and a search history.
* **film-details**: to show the details of a film or a set of films searched.

This project also needs two services to make it works:
* **characters-service**: to make a get request in order to retrieve all the characters for the navigation-menu.component.
* **films-service**: 
    * To get the whole list of films or a selected film.
    * To serve as mediator for search-box.component and film-details.component.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)