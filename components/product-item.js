// Depending on how the customer whants to link/rout into product some elements should be replaced with <a> for seo/accessability and of cource best practice.
// Use image instead of background, ssr loaded?
export default function productItem(props) {
  return (
    <>
      <div>
        <div style={{backgroundImage: `url(${props.product.image.asset.url})`}}  className="w-full h-[60vh] relative bg-cover bg-left bg-no-repeat">
          <p className={` z- absolute top-5 left-5 py-2 px-5 bg-white ${props.product.tagColor}`}>{props.product.tag}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-4">
          <div>
            <p className="text-2xl"> {props.product.name}</p>
            <p className="text-xl text-gray-500">{props.product.description}</p>
          </div>
          <p className="text-2xl text-left md:text-right">{props.product.currency}{props.product.price}</p>
        </div>
      </div>
    </>
  )
}