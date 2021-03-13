import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Iconos = ({wc, estacionamiento, habitaciones}) => {
    const { iconos } = useStaticQuery(graphql`
        query{
            iconos: allFile(filter: {relativeDirectory: {eq: "iconos"}}){
                edges{
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `)
    console.log(iconos);

    return (
        <ul>
            <li>{estacionamiento}</li>
        </ul>
      );
}
 
export default Iconos;