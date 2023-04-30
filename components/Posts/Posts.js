import React from 'react';
import { gql } from '@apollo/client';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { FeaturedImage } from 'components';
import appConfig from 'app.config';
import useFocusFirstNewResult from 'hooks/useFocusFirstNewResult';

import styles from './Posts.module.scss';
let cx = classNames.bind(styles);

function Posts({ posts, intro, id }) {
    const { firstNewResultRef, firstNewResultIndex } =
        useFocusFirstNewResult(posts);

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
