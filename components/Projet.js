import Button from "./Button";

export default function Project(props) {
  return (
    <div className="portefolio_item  justify-center flex-wrap  md:grid md:grid-cols-2 mt-5">
      <div className="content flex flex-col justify-around p-10">
        <h3 className="text-2xl font-semibold">{props.title}</h3>
        <p className="max-w-sm" >{props.text}</p>
        <Button text="voir le site" link={props.link}></Button>
      </div>
      <div className="images border-orange-500 border-t-2 p-4 m-10 border-r-2 rounded-tr-xl ">
        <img
          className="images-item rounded-2xl shadow-2xl mx-auto"
          src={props.image}
          alt=""
          width=""
        />
       
      </div>
    </div>
  );
}
