import React from 'react';
import { useAppContext } from '../context/AppContext';
import { cn } from '../utils/cn';
import wordmarkOnLight from '../assets/brand/omegatech-wordmark-on-light.png';
import wordmarkOnDark from '../assets/brand/omegatech-wordmark-on-dark.png';
import mark from '../assets/brand/omegatech-mark.png';

type LogoVariant = 'full' | 'mark';

/**
 * Background the logo is placed on.
 * `auto` follows the active theme; use `on-dark` for surfaces that stay dark
 * regardless of theme (e.g. the footer).
 */
type LogoTone = 'auto' | 'on-light' | 'on-dark';

export interface LogoProps {
  /** `full` renders the OmegaTech wordmark, `mark` renders the Omega symbol only. */
  variant?: LogoVariant;
  tone?: LogoTone;
  /** Sizing classes, e.g. `h-8 w-auto`. Defaults to a header-sized wordmark. */
  className?: string;
  /** Accessible name. Pass an empty string when the logo is decorative. */
  alt?: string;
}

const MARK_SIZE = { width: 150, height: 110 } as const;
const WORDMARK_SIZE = { width: 512, height: 49 } as const;

/**
 * Brand logo with light/dark wordmark variants, so the lettering keeps its
 * contrast on any background while the Omega mark colors stay untouched.
 */
const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  tone = 'auto',
  className,
  alt = 'OmegaTech',
}) => {
  const { theme } = useAppContext();
  const sizeClasses = className ?? 'h-8 w-auto';

  if (variant === 'mark') {
    return (
      <img
        src={mark}
        alt={alt}
        width={MARK_SIZE.width}
        height={MARK_SIZE.height}
        className={cn('select-none', sizeClasses)}
        draggable={false}
      />
    );
  }

  const resolvedTone = tone === 'auto' ? (theme === 'dark' ? 'on-dark' : 'on-light') : tone;
  const src = resolvedTone === 'on-dark' ? wordmarkOnDark : wordmarkOnLight;

  return (
    <img
      src={src}
      alt={alt}
      width={WORDMARK_SIZE.width}
      height={WORDMARK_SIZE.height}
      className={cn('select-none', sizeClasses)}
      draggable={false}
    />
  );
};

export default Logo;
