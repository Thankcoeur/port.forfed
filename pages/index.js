import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav"
import Presentation  from '../components/Presentation'
import ImageContainer from '../components/ImageContainer'
import Projet from '../components/Projet'
export default function Home() {
 

const list = [
  {
  title : 'La chouette agence',
  text :'Amélioration du référencement du site lachouette agence* Google analytique * amélioration des performances',
  image :'images/agence.png',
  link : 'https://oc-p4-forfed.netlify.app/'
  },
  {
  title :'Ohmyfood',
  text : 'Integration d’une maquette pour le restaurant ohmyfood *html * css *animation css',
  image :'images/ohmyfood.png',
  link : 'https://oc-p3-forfed.netlify.app'
  }
  ,
  {
  title :'Orinoco',
  text : 'Creation d’ un front end pour un site de e - commerce* jquery',
  image :'images/orinico.png',
  link :'https://projet5-frontend.netlify.app'
  }
  ]


   const listes = list.map((item,key) => {
     console.log(item)

     return <Projet key={key}  text={item.text} title={item.title} image={item.image} link={item.link}></Projet>







  })

  return (<div className="bg-gray-200 ">
<div className="md:max-w-[900px] md:mx-auto p-5 min-h-screen">


<Nav></Nav>

<section className="
   mt-[150px]
      presentation
      justify-around
      mx-auto
      md:grid
      md:grid-cols-2
      md:align-middle
      ">

<Presentation></Presentation>
<ImageContainer></ImageContainer>
</section>
{listes}



</div>

    
    
    </div>
  )
}
