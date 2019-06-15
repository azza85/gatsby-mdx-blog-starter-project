import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo'

export default function Index({ data: { site } }) {
  return <Layout site={site}>
    <SEO />
    <div>Landing Page!</div>
    </Layout>;
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`;
