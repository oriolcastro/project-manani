import React from 'react'
import { Header, Container, Segment } from 'semantic-ui-react'
import Slider from 'react-slick'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

const CarouselItem = props => (
  <Segment color="yellow" style={{ margin: '0px 8px 0px 8px' }}>
    <Header>{props.name}</Header>
    <p>{props.message}</p>
  </Segment>
)

const propostes = [
  {
    id: '01',
    name: 'Joan',
    message:
      "Assegurar un espai jove des del maig del 2019 fins a la construcció de l'espai definitiu",
  },
  {
    id: '02',
    name: 'Anna',
    message:
      "Descentralitzar l'OAC per tal que la ciutadania pugui fer tràmits i gestions municipals a través de la xarxa de centres cívics",
  },
  {
    id: '03',
    name: 'Raul',
    message: 'Crear un rocòdrom popular en un espai obert de la ciutat',
  },
  {
    id: '04',
    name: 'Marta',
    message:
      "Crear un Parc Agrari al Sant Jordi i a l'Eixample Nord. Recuperar els sols fèrtils i les antigues sínies",
  },
  {
    id: '05',
    name: 'Helena',
    message:
      'Tornar al pla original de peatonalització del centre prohibint el pas de vehicles i evitant així el seu deteriorament',
  },
]

const settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  infinite: true,
  centerMode: true,
  dots: true,
  slidesToShow: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}
const IdeasExample = () => (
  <Container text style={{ marginBottom: '48px' }}>
    <Header as="h2">Algunes propostes</Header>
    <Slider {...settings}>
      {propostes.map(i => (
        <CarouselItem key={i.id} name={i.name} message={i.message} />
      ))}
    </Slider>
  </Container>
)

export default IdeasExample
