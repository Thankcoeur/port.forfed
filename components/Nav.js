

export default  function Nav() {

return (
    <nav id="navbar"  className="md:grid-cols-2 md:grid">
    <div className="text-4xl font-bold">Forfed . <span className="text-orange-500">port</span></div>
    <ul className="flex justify-around items-center">
       <li> <a className="font-semibold" href="tel:+33685037370">06 85 03 73 70</a></li>
       <li><a className="font-semibold" href="mailto:maxime.fedou@gmail.com" >maxime.fedou@gmail.com</a></li>
    </ul>
 </nav>
)

}