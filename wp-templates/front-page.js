import * as MENUS from 'constants/menus';

import { useQuery, gql } from '@apollo/client';
import styles from 'styles/pages/_Home.module.scss';
import {
  Main,
  Heading,
  NavigationMenu,
  SEO,
  Header,
  AaronFooter,
  Posts,
  Testimonials, AaronHero, AaronBanner,AaronPosts,FixdAppFooter,
} from 'components';
import { BlogInfoFragment } from 'fragments/GeneralSettings';

import AaronLogoGrid from "../components/AaronLogoGrid";

const postsPerPage = 6;

export default function Component() {
  const { data, loading } = useQuery(Component.query, {
    variables: Component.variables(),
  });
  if (loading) {
    return null;
  }

  const { title: siteTitle, description: siteDescription } =
      data?.generalSettings;
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];

  return (
      <>
        <SEO title={siteTitle} description={siteDescription} />
        <AaronBanner text="Shop our Spring Sale!" buttonText="Save 67% Now" />
        <Header
            title={siteTitle}
            description={siteDescription}
            menuItems={primaryMenu}
        />
        <AaronHero />
        <Main className={styles.home} style={{ paddingTop: '40px' }}>
          <div className="container">
            <section className="hero text-center">
              <Heading className={styles.heading} level="h1">
                Car Buying
              </Heading>
              <Heading className={styles.heading} level="h1">
                Made Simple
              </Heading>
              <p className={styles.description}>
                Looking for objective advice, expert info and helpful tools to answer your car questions?{' '}
              </p>
            </section>
            <section>
            <div className={styles.divider}></div>
          </section>
            <section>
              <p className={styles.description}>
                Turn to your Car FIXD experts.
              </p>
            </section>
            <section className={styles.posts}>
              <Heading className={styles.heading} level="h2">
                OBD2 Codes
              </Heading>
              <Posts posts={data.posts?.nodes} id="posts-list" />
            </section>
            <section className={styles.posts}>
              <AaronPosts categoryId="dGVybTo1" />
            </section>
            <section>
              <Heading className={styles.heading} level="h1">
                As Seen On
              </Heading>
              <AaronLogoGrid />
            </section>
          </div>
        </Main>
        <AaronFooter />
        <FixdAppFooter />
      </>
  );
}

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    first: postsPerPage,
  };
};

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${Posts.fragments.entry}
  ${Testimonials.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $first: Int
  ) {
    posts(first: $first) {
      nodes {
        ...PostsItemFragment
      }
    }
    testimonials {
      nodes {
        ...TestimonialsFragment
      }
    }
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;
