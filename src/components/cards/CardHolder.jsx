import React from 'react';
import Card from './Cards';
import data from '../../data/CardData';

const CardHolder = () => {
    return (
        <section className='card-holder'>
            {
                data?.map((data) =>
                    <Card key={data.id}
                        image={data.coverImg}
                        location={data.location}
                        desc={data.description}
                        season={data.seasonvisit}
                        title={data.title} 
                        viewmaps={data.viewmaps}/>
                )
            }
        </section>
    )
}
export default CardHolder