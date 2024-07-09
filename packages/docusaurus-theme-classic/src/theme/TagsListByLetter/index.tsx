/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {type LetterEntry} from '@docusaurus/theme-common';
import {listTagsByLetters} from '@docusaurus/theme-common/internal';
import Tag from '@theme/Tag';
import type {Props} from '@theme/TagsListByLetter';
import Heading from '@theme/Heading';
import type {TagsListItem} from '@docusaurus/utils';
import styles from './styles.module.css';

function TagLetterEntryItem({
  letterEntry,
}: {
  letterEntry: LetterEntry<TagsListItem>;
}) {
  return (
    <article>
      <Heading as="h2" id={letterEntry.letter}>
        {letterEntry.letter}
      </Heading>
      <ul className="padding--none">
        {letterEntry.items.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
            <Tag {...tag} />
          </li>
        ))}
      </ul>
      <hr />
    </article>
  );
}

export default function TagsListByLetter({tags}: Props): JSX.Element {
  const letterList = listTagsByLetters(tags);
  return (
    <section className="margin-vert--lg">
      {letterList.map((letterEntry) => (
        <TagLetterEntryItem
          key={letterEntry.letter}
          letterEntry={letterEntry}
        />
      ))}
    </section>
  );
}
