import { useAppContext, useEffect } from '../../context/state.js';

function Product({ description }) {

  console.log("description ", description);
  return <p>foo</p>
}

export const getServerSideProps = ({ query }) => {
  const description = { query }
  return {
    props: {
      description
    }
  }
}



export default Product
