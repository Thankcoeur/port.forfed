export default function button(props) {

    return (
      

<a href={props.link} className="btn mx-auto mt-5 bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent w-fit rounded;">{props.text}</a>

        
    )
}