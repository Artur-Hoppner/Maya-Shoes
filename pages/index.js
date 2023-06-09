import Head from 'next/head';
import ProductItems from '@/components/product-item.js';
import Header from '@/components/header.js';
import Footer from '@/components/footer.js';
import Pagination from '@/components/pagination';
import { useEffect, useState } from 'react';
import clientCredentials from '@/misc/client.js';


export default function Home() {

  const navLinks = [
    "man",
    "woman",
    "products",
    "about us",
    "blog"
  ];

  // Variables for product items and how its presented
  const [productList, setProductItems] = useState([]);
  const [loaderState, loadingStatefuncton] = useState(false);
  const [productsPerPage] = useState(4);
  const [currentPage, setcurrentPage] = useState(1)

  // Variables and function for pagination
  const indexOfLastproductPage = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastproductPage - productsPerPage;
  const currentProducts = productList.slice(indexOfFirstPost, indexOfLastproductPage);
  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  // Get data from Sanity CSM
  useEffect(() => {
    loadingStatefuncton(true);

    clientCredentials
    .fetch(`*[_type == "product"]{
      name,
      description,
      tag,
      tagColor,
      price,
      currency,
      image {
        asset -> {
          _id,
          url
        }
      }
    }`)
    .then((data) => {
      console.log("Getting data from Sanity CMS", data)
      setProductItems(data)
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      loadingStatefuncton(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Mayo Shoes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header navLinks={navLinks}/>

      <main className='text-dark'>
        {/* Top presentation block */}
        <div className="bg-[url('/image1.jpg')] bg-cover bg-center bg-no-repeat w-full h-[600px] uppercase text-white flex flex-col justify-center p-6 md:p-16 main-topsection-container">
          <h3 className='text-2xl text-gray-300'>Overline</h3>
          <h1 className='text-7xl md:text-9xl py-1'>WELCOME TO MAYA</h1>
          <p className='text-2xl md:w-1/2'>Lorem Ipsum sans sin con ipsum. Lorem Ipsum sans sin con ipsum. Lorem Ipsum sans sin con ipsum.</p>
        </div>
        
        {/* Middle presentation block */}
        <div className='mx-4 md:mx-14'>
          <div className='w-full uppercase py-6 md:py-10 grid grid-cols-1 md:grid-cols-7'>
            <div className='md:col-span-4'>
              <h2 className='text-8xl md:text-9xl pt-1 pb-6 md:pb-0 md:w-3/5'>FUELED to impact.</h2>
            </div>
            <div className='md:col-span-3'>
              <p className='text-primaryred text-2xl pb-4'>MAYA, Inc. is a team comprised of the Nike, Jordan and Converse brands driven by a shared purpose to leave an enduring impact.</p>
              <p className='text-1xl pb-8'>We’ve spent 50 years shifting big ideas into scaled, sustainable platforms that have changed our products and manufacturing process, fueled our design ethos, and championed our athlete community.</p>
            </div>
            <div className=' border-b-4 md:border-b-8 border-t-4 border-black md:col-span-4 w-9/12 md:w-11/12'></div>
          </div>

          {/* Filters */}
          <div className='flex justify-between pb-4 flex-wrap'>
            <h4 className='text-2xl md:text-3xl'>Featured products</h4> 
            <div className='hidden md:block'>
              <div className='flex items-center gap-4'>
                <p className='text-2xl '>Sort:</p>
                <p className='text-xl border-2 border-black px-2 py-1 cursor-pointer duration-200 hover:text-white hover:bg-black'>RECYCLED Polyamide</p>
                <p className='text-xl border-2 border-black px-2 py-1 cursor-pointer duration-200 hover:text-white hover:bg-black'>New</p>
              </div>
            </div>
          </div>

          {/* Product Items & very primitive loader animation, pulses when loading */} 
          <div className={`${loaderState ? "h-screen bg-gray-100 animate-pulse" : ""} grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10'`}> 
            {currentProducts.map((products, index) => (
              <ProductItems key={index} product={products} loaderState={loaderState} />
            ))}
          </div>
   
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={productList.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>

        <Footer navLinks={navLinks}/>
      </main>
    </>
  )
}
