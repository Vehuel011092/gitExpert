import { GifItem } from '../components/GifItem';
import { useFerchGifs } from '../hooks/useFerchGifs';

export const GifGrid = ({category}) => {

    const { images, isLoading  } = useFerchGifs( category );

  return (
    <>
    <h3> { category }</h3>
    <h3 className="animate__animated animate__fadeIn"> { isLoading && 'Cargando...' }</h3>

    <div className='card-grid'>
        {
            images.map( ( images ) => (
                <GifItem
                    key={ images.id }
                        { ...images }
                 />
                //<li key={ id }>{ title }</li>
            ))
        }
    </div>
    </>
  )
}
