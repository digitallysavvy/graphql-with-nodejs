# graphql-with-nodejs
Introductory project to the concepts of GraphQL based on the tutorial: [An introduction to GraphQL: how it works and how to use it](https://medium.com/p/an-introduction-to-graphql-how-it-works-and-how-to-use-it-91162ecd72d0)


## usage
use `npm start` to start express sever

### movie
Input:
```{
  movie(id: 3) {
    name
    id
    year
  }
}```
Output:
```{
  "data": {
    "movie": {
      "name": "Movie 3",
      "id": "3",
      "year": 2016
    }
  }
}```

### director
Input:
```{
  director(id: 1) {
    name
    id,
    age,
    movies{
      name,
      year
    }
  }
}
```
Output:
```{
  "data": {
    "director": {
      "name": "Director 1",
      "id": "1",
      "age": 20,
      "movies": [
        {
          "name": "Movie 1",
          "year": 2018
        },
        {
          "name": "Movie 2",
          "year": 2017
        }
      ]
    }
  }
}```