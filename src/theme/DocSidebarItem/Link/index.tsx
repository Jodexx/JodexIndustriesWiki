import React, {type ReactNode, useEffect, useState} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {isActiveSidebarItem} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type { Props } from '@theme/DocSidebarItem/Link';

import styles from './styles.module.css';
import { DynamicIcon } from '../../../components/DynamicIcon';

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): ReactNode {
  const {href, label, className, autoAddBaseUrl} = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);

  const iconName = item.customProps?.icon as string;
  const IconComp = <DynamicIcon name={iconName} />

  const iconColor = item.customProps?.iconColor as string;

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}>
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.menuExternalLink,
          {
            'menu__link--active': isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}>
        {IconComp && (
          <span
            className={clsx("sidebar-icon", styles.icon)}
            aria-hidden="true"
            style={iconColor ? { color: iconColor } : undefined}
          >
            {IconComp}
          </span>
        )}
        <span className="sidebar-label">{label}</span>
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
