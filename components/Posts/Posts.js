import React from 'react';
import { gql, useQuery } from '@apollo/client';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { FeaturedImage } from 'components';
import appConfig from 'app.config';
import useFocusFirstNewResult from 'hooks/useFocusFirstNewResult';

import styles from './Posts.module.scss';
let cx = classNames.bind(styles);

function Posts({ category, intro, id }) {
    const { loading, error, data } = useQuery(Posts.fragments.entry, {
        variables: { category },
    });

    const { firstNewResultRef, firstNewResultIndex } = useFocusFirstNewResult(data?.posts?.edges);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const posts = data.posts.edges.map(edge => edge.node);

    return (
        <section {...(id && { id })}>
            {intro && <p>{intro}</p>}
            <div className={cx('post-list')}>
                {posts?.map((post, i) => {
                    const isFirstNewResult = i === firstNewResultIndex;
                    let image = post?.featuredImage?.node;

                    if (!image && appConfig.archiveDisplayFeaturedImage) {
                        image = {
                            sourceUrl: '/static/banner.jpeg',
                            altText: 'Downtown Austin, Texas skyline',
                        };
                    }

                    return (
                        <div
                            className={cx('container')}
                            key={post.id ?? ''}
                            id={`post-${post.id}`}
                        >
                            <div className={cx('card')}>
                                <Link href={post?.uri ?? '#'}>
                                    <a
                                        className={cx('image-holder')}
                                        tabIndex="-1"
                                        ref={isFirstNewResult ? firstNewResultRef : null}
                                    >
                                        <FeaturedImage
                                            className={cx('image')}
                                            image={image}
                                            width={353}
                                            height={233}
                                            priority={i < appConfig.postsAboveTheFold}
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    );
                })}
                {posts && posts?.length < 1 && <p>No posts found.</p>}
            </div>
        </section>
    );
}

Posts.fragments = {
    entry: gql`
        ${FeaturedImage.fragments.entry}
        query Posts($category: String) {
            posts(where: { categoryName: $category }) {
                edges {
                    node {
                        id
                        date
                        uri
                        title
                        author {
                            node {
                                name
                            }
                        }
                        ...FeaturedImageFragment
                    }
                }
            }
        }
        fragment PostsItemFragment on Post {
            id
            date
            uri
            title
            author {
                node {
                    name
                }
            }
            ...FeaturedImageFragment
        }
    `,
};

export default Posts;
