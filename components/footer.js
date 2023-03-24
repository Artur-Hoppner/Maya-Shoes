export default function Profile(props) {
  return (
    <>
      <footer className='w-full  bg-gray-200 py-16 px-14'>
        <h4 className='text-4xl uppercase pb-6'>maya</h4>
        <ul className='flex flex-wrap gap-5 uppercase'>
          {/* Loop out navbar links */}
          {props.navLinks.map((text, index) => (
            <li className='text-2xl cursor-pointer mr-4' key={index}>
              <a>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  )
}