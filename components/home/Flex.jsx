import Image from "next/image"
import cl1 from '../../assets/images/clients/cl1.png'
import cl2 from '../../assets/images/clients/cl2.png'
import cl4 from '../../assets/images/clients/cl4.png'
import cl5 from '../../assets/images/clients/cl5.png'
import cl6 from '../../assets/images/clients/cl6.png'

const Flex = () => {
  const cli = [
    {
      id: 1,
      url: cl1,
    },
    {
      id: 2,
      url: cl2,
    },
    {
      id: 4,
      url: cl4,
    },
    {
      id: 5,
      url: cl5,
    },
    {
      id: 6,
      url: cl6,
    },
  ]
  return (
    <section className="py-3 bg-blue-950 my-10">
      <div className="container max-w-sm md:max-w-7xl px-4 mx-auto">
        <div className="flex flex-wrap items-center">
          {
            cli.map(item => (
              <div key={item.id} className="w-1/2 md:w-1/3 lg:w-1/5 px-4 ">
                <Image priority className="block mx-auto" src={item.url} alt="logo" />
              </div>
            ))
          }1
        </div>
      </div>
    </section>
  )
}

export default Flex