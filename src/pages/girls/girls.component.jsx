import React from 'react';

import GIRLS_DATA from './girls.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class GirlsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: GIRLS_DATA

        }
    }

    render() {
        const { collections } = this.state;
        return (<div className='girl-page'>
            {
                collections.map(({id, ...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
        )
    }
}

export default GirlsPage;