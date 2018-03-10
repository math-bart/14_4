var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'images/harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'images/lew.jpg'
  },
  {
    id: 3,
    title: 'Władca pierścieni',
    desc: 'Kolejny film o czarodzieju:)',
    img: 'images/wladca.jpg'
  },
  {
    id: 4,
    title: 'Szklana pułapka',
    desc: 'Tu to już prawdziwe czary',
    img: 'images/die.jpg'
  }
];

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
      )
  },
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  },
});

var MovieImage = React.createClass({
  propTypes: {
    img: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('img', {src: this.props.img, width: 200})
    )
  },
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('li', {key: this.props.movie.id},
      React.createElement(MovieTitle, {title: this.props.movie.title}),
      React.createElement(MovieDescription, {desc: this.props.movie.desc}),
      React.createElement(MovieImage, {img: this.props.movie.img})
      )
    )
  },
});

var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {key: movie.id, movie: movie});
});

var moviesList = React.createClass({
  render: function() {
    return (React.createElement('ul', {}, moviesElements));
  }
});

var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement(moviesList, {})
);
  
ReactDOM.render(element, document.getElementById('app'));