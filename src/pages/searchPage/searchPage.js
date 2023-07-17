import React from 'react';
import {useGetAllProductsSearchQuery} from "../../services/productsApi";

const SearchPage = () => {
    const {data} = useGetAllProductsSearchQuery(0);
    if (data === undefined) {
        return []
    }

    console.log(data.filter(ele=> ele.title == 'Generic'))
    return (
        <div>
            {data.filter(ele=> ele.title.match('sh')).map(ele => {
                return <div>{ele.title}</div>
            })
                    // return (
                    //     <div>
                    //         {ele.title}
                    //     </div>
                    // )
                }
            {/*)}*/}
        </div>
    );
};

export default SearchPage;