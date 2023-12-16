import React from 'react';
import {Carousel} from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

export const Recommendation = ({mediaType, id}) => {
    const { data, loading, error } = useFetch(
      `/${mediaType}/${id}/recommendations`
  );

  return (
    <div>
        {data?.results?.length > 0 && <Carousel
          title="Recommendations"
          data={data?.results}
          loading={loading}
          endpoint={mediaType}
      />}
    </div>
  );
}
