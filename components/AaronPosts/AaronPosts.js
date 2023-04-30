import React from 'react';
import { gql, useQuery } from '@apollo/client';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { FeaturedImage } from 'components';

import styles from './AaronPosts.module.scss';
let cx = classNames.bind(styles);

const GET_POSTS_BY_CATEGORY_ID = gql`
  query GetPostsByCategoryId($categoryId: ID!) {
    category(id: $categoryId) {
      id
      name
      posts {
        nodes {
          id
          title
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

function AaronPosts({ categoryId }) {
    const { loading, error, data } = useQuery(GET_POSTS_BY_CATEGORY_ID, {
        variables: { categoryId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const posts = data.category.posts.nodes;

    return (
        <section>
            <h2>{data.category.name}</h2>
            <div className={cx('post-list')}>
                {posts.map((post) => {
                    const image = post.featuredImage.node;

                    return (
                        <div className={cx('container')} key={post.id}>
                            <div className={cx('card')}>
                                <Link href={post.uri ?? '#'}>
                                    <a className={cx('image-holder')}>
                                        <FeaturedImage
                                            className={cx('image')}
                                            image={image}
                                            width={353}
                                            height={233}
                                            priority
                                        />
                                    </a>
                                </Link>
                                <h3 className={cx('post-title')}>
                                    <Link href={post.uri ?? '#'}>
                                        <a>{post.title}</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default AaronPosts;
