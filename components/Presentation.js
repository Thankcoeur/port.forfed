import Button from "./Button"

export default function Presentation(  ) {

    return (
        <div className="presentation_content flex flex-col  items-center justify-around min-h-full max-w-[400px] ">
         <h1 className="text-4xl font-bold">
            Je suis Maxime <span className=""> Front-end</span> Développeur
         </h1>
         <p className="break-all w-full mt-5	">
            Je suis à la recherche d’un premier emploi en tant que Développeur web
            Fullstack JavaScript, ou Front-end, sur Paris et ses environs.
         </p>
         <Button text="linkedin"></Button>
      </div>
    )
}